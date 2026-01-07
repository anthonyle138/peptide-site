const fs = require('fs');
const path = require('path');

// Load scraped data
const scrapedData = JSON.parse(fs.readFileSync('/Users/anthonyle/Projects/lazada-go/data/peptides-v3-complete.json', 'utf-8'));

// Create a citations database
const citationsDB = {};
scrapedData.forEach(item => {
  if (item.success && item.citations && item.citations.length > 0) {
    // Extract peptide name from title
    const name = item.title.toLowerCase()
      .replace(/\s*\([^)]*\)/g, '')
      .replace(/\d+mg|\d+mcg/gi, '')
      .trim();

    if (!citationsDB[name]) {
      citationsDB[name] = {
        title: item.title,
        citations: item.citations,
        articleAuthor: item.articleAuthor || '',
        scientificJournalAuthor: item.scientificJournalAuthor || '',
        researchSections: item.researchSections || []
      };
    }
  }
});

console.log('Found ' + Object.keys(citationsDB).length + ' products with citations');

// Output the citations database
fs.writeFileSync(
  '/Users/anthonyle/Projects/lazada-go/peptide-site/data/peptide-citations.json',
  JSON.stringify(citationsDB, null, 2)
);

console.log('Saved citations database');

// Show sample
console.log('\nSample entries:');
Object.entries(citationsDB).slice(0, 10).forEach(([name, data]) => {
  console.log('- ' + name + ': ' + data.citations.length + ' citations');
});
