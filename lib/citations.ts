// Citations database loaded from scraped data
import citationsData from '../data/peptide-citations.json';

export interface CitationData {
  title: string;
  citations: string[];
  articleAuthor: string;
  scientificJournalAuthor: string;
  researchSections: Array<{
    heading: string;
    content: string;
  }>;
}

const citationsDB: Record<string, CitationData> = citationsData;

// Get citations for a product by matching name
export function getCitationsForProduct(productName: string): CitationData | null {
  const nameLower = productName.toLowerCase()
    .replace(/\s*\([^)]*\)/g, '') // Remove parentheses
    .replace(/\d+mg|\d+mcg/gi, '') // Remove dosage
    .trim();

  // Direct match
  if (citationsDB[nameLower]) {
    return citationsDB[nameLower];
  }

  // Partial match
  for (const [key, data] of Object.entries(citationsDB)) {
    if (nameLower.includes(key) || key.includes(nameLower)) {
      return data;
    }
    // Check individual peptide names
    const peptides = key.split(/[,&]/).map(p => p.trim());
    for (const peptide of peptides) {
      if (nameLower.includes(peptide) || peptide.includes(nameLower)) {
        return data;
      }
    }
  }

  return null;
}

// Get all available citations
export function getAllCitations(): Record<string, CitationData> {
  return citationsDB;
}
