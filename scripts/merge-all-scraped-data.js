const fs = require('fs');
const path = require('path');

// Load existing products
const productsPath = '/Users/anthonyle/Projects/lazada-go/peptide-site/data/peptide-products-vi.json';
const scrapedPath = '/Users/anthonyle/Projects/lazada-go/data/peptides-v3-complete.json';

const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf-8'));
const scrapedData = JSON.parse(fs.readFileSync(scrapedPath, 'utf-8'));

// Create lookup by URL
const scrapedByUrl = {};
scrapedData.forEach(item => {
  if (item.success && item.url) {
    // Normalize URL - remove query params for matching
    const baseUrl = item.url.split('?')[0];
    scrapedByUrl[baseUrl] = item;
    scrapedByUrl[item.url] = item; // Also store with full URL
  }
});

console.log(`Loaded ${Object.keys(scrapedByUrl).length} scraped products`);
console.log(`Existing products: ${productsData.products.length}`);

// Merge scraped data into products
let matchedCount = 0;
let unmatchedProducts = [];

productsData.products = productsData.products.map(product => {
  // Try to find matching scraped data
  const baseUrl = product.url.split('?')[0];
  const scraped = scrapedByUrl[baseUrl] || scrapedByUrl[product.url];

  if (scraped) {
    matchedCount++;

    // Merge scraped fields
    return {
      ...product,
      // Scientific data
      whatIs: scraped.whatIs || product.whatIs || '',
      mechanismOfAction: scraped.mechanismOfAction || product.mechanismOfAction || '',
      sequence: scraped.sequence || product.sequence || '',
      molecularFormula: scraped.molecularFormula || product.molecularFormula || '',
      molecularWeight: scraped.molecularWeight || product.molecularWeight || '',
      casNumber: scraped.casNumber || product.casNumber || '',
      pubChem: scraped.pubChem || product.pubChem || '',
      // Research content
      scrapedResearchSections: scraped.researchSections || [],
      articleAuthor: scraped.articleAuthor || '',
      scientificJournalAuthor: scraped.scientificJournalAuthor || '',
      citations: scraped.citations || []
    };
  } else {
    unmatchedProducts.push(product.name_en);
    return product;
  }
});

console.log(`\nMatched: ${matchedCount} products`);
console.log(`Unmatched: ${unmatchedProducts.length} products`);

if (unmatchedProducts.length > 0 && unmatchedProducts.length < 20) {
  console.log('Unmatched products:', unmatchedProducts);
}

// Save updated products
fs.writeFileSync(productsPath, JSON.stringify(productsData, null, 2));
console.log('\nSaved updated products to:', productsPath);

// Also create a comprehensive research database for all scraped products
const researchDB = {};
scrapedData.forEach(item => {
  if (item.success) {
    const name = item.title.toLowerCase()
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\d+mg|\d+mcg/gi, '')
      .trim();

    if (!researchDB[name] || (item.citations && item.citations.length > 0)) {
      researchDB[name] = {
        title: item.title,
        url: item.url,
        whatIs: item.whatIs || '',
        mechanismOfAction: item.mechanismOfAction || '',
        sequence: item.sequence || '',
        molecularFormula: item.molecularFormula || '',
        molecularWeight: item.molecularWeight || '',
        casNumber: item.casNumber || '',
        pubChem: item.pubChem || '',
        researchSections: item.researchSections || [],
        articleAuthor: item.articleAuthor || '',
        scientificJournalAuthor: item.scientificJournalAuthor || '',
        citations: item.citations || []
      };
    }
  }
});

const researchDBPath = '/Users/anthonyle/Projects/lazada-go/peptide-site/data/peptide-research-db.json';
fs.writeFileSync(researchDBPath, JSON.stringify(researchDB, null, 2));
console.log('Created research database with', Object.keys(researchDB).length, 'entries');
console.log('Saved to:', researchDBPath);

// Stats on data quality
let withCitations = 0;
let withResearch = 0;
let withWhatIs = 0;
let withMechanism = 0;
let withSequence = 0;

Object.values(researchDB).forEach(item => {
  if (item.citations && item.citations.length > 0) withCitations++;
  if (item.researchSections && item.researchSections.length > 0) withResearch++;
  if (item.whatIs) withWhatIs++;
  if (item.mechanismOfAction) withMechanism++;
  if (item.sequence) withSequence++;
});

console.log('\n=== Data Quality Stats ===');
console.log(`With citations: ${withCitations}`);
console.log(`With research sections: ${withResearch}`);
console.log(`With "What Is": ${withWhatIs}`);
console.log(`With mechanism: ${withMechanism}`);
console.log(`With sequence: ${withSequence}`);
