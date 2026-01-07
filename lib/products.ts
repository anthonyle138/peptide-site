// Product data and utilities
import productsData from '../data/peptide-products-vi.json';

export interface PeptideComponent {
  name: string;
  amount: string;
  sequence?: string;
  molecularWeight?: string;
  description: string;
  biochemicalCharacteristics?: string;
}

export interface ResearchSection {
  heading: string;
  content: string;
}

export interface Product {
  name_en: string;
  name_vi: string;
  url: string;
  price: string;
  images: string[];
  inStock: boolean;
  category_en: string;
  category_vi: string;
  description_vi: string;
  description_en?: string;
  disclaimer_vi: string;
  specifications: Record<string, string>;
  slug?: string;
  // Extended info generated from name
  sequence?: string;
  molecularWeight?: string;
  purity?: string;
  form?: string;
  storage?: string;
  researchApplications?: string[];
  // Blend-specific info
  isBlend?: boolean;
  components?: PeptideComponent[];
  overview?: string;
  // Individual peptide detailed info
  biochemicalCharacteristics?: string;
  // Scraped scientific data
  whatIs?: string;
  mechanismOfAction?: string;
  molecularFormula?: string;
  casNumber?: string;
  pubChem?: string;
  // Scraped research content
  scrapedResearchSections?: ResearchSection[];
  articleAuthor?: string;
  scientificJournalAuthor?: string;
  citations?: string[];
}

export interface ProductsData {
  scrapedAt: string;
  translatedAt: string;
  source: string;
  totalProducts: number;
  language: string;
  siteInfo: {
    title_vi: string;
    tagline_vi: string;
    disclaimer_vi: string;
  };
  categories: Array<{
    id: string;
    name_en: string;
    name_vi: string;
  }>;
  ui: Record<string, string>;
  products: Product[];
}

// Blend information database
const blendInfo: Record<string, {
  description_en: string;
  overview: string;
  components: PeptideComponent[];
  researchApplications: string[];
}> = {
  'bpc-157-tb-500-ghk-cu-glow-blend': {
    description_en: 'The Glow Blend is a synergistic combination of three powerful research peptides: BPC-157, TB-500, and GHK-Cu. This carefully formulated blend combines peptides that have been individually studied for their potential roles in tissue repair, regeneration, and skin health research. The combined biological activity of these peptides may involve inflammation modulation, tissue repair processes, angiogenesis, cytoprotection, and regulation of gene expression related to cellular repair mechanisms.',
    overview: 'This premium peptide blend combines the regenerative research potential of BPC-157 and TB-500 with the skin-specific benefits of GHK-Cu copper peptide. Each component has been extensively studied in preclinical research for its unique mechanisms of action. Research suggests potential synergistic interactions involving nitric oxide pathway modulation, growth factor expression, extracellular matrix remodeling, and cellular signaling cascades. When combined, these peptides offer researchers a powerful tool for investigating synergistic effects in tissue repair and skin health studies.',
    components: [
      {
        name: 'BPC-157',
        amount: '10mg',
        sequence: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val',
        molecularWeight: '1419.5 Da',
        description: 'A 15-amino acid synthetic peptide derived from human gastric juice protein. Extensively researched for gastrointestinal protection, wound healing, and tissue repair mechanisms.',
        biochemicalCharacteristics: 'BPC-157 is a stable gastric pentadecapeptide that demonstrates resistance to hydrolysis. Research indicates it may interact with the nitric oxide (NO) system, modulating eNOS and iNOS expression. Studies suggest involvement in VEGF pathway activation, promoting angiogenesis and vasculogenesis. The peptide has been shown to influence FAK-paxillin pathway activation, affecting cell migration and adhesion. Research also indicates potential GABAergic and dopaminergic system interactions, as well as modulation of growth hormone receptor expression.'
      },
      {
        name: 'TB-500',
        amount: '10mg',
        sequence: 'LKKTETQ (active region)',
        molecularWeight: '4963 Da',
        description: 'Synthetic version of Thymosin Beta-4. Researched for cell migration, angiogenesis, and tissue regeneration. Plays a key role in actin regulation and wound healing studies.',
        biochemicalCharacteristics: 'TB-500 (Thymosin Beta-4) is a 43-amino acid G-actin sequestering peptide. It contains the central actin-binding domain LKKTETQ which regulates actin polymerization and cell motility. Research demonstrates its role in promoting endothelial cell migration and differentiation through activation of Akt signaling pathway. The peptide modulates inflammatory responses via NF-κB pathway inhibition. Studies show involvement in MMP-2 and MMP-9 activation affecting extracellular matrix remodeling and tissue regeneration processes.'
      },
      {
        name: 'GHK-Cu',
        amount: '10mg',
        sequence: 'Gly-His-Lys + Cu²⁺',
        molecularWeight: '403.9 Da',
        description: 'Copper-binding tripeptide naturally found in human plasma. Extensively studied for skin remodeling, collagen synthesis, wound healing, and anti-aging research.',
        biochemicalCharacteristics: 'GHK-Cu is a naturally occurring copper-binding tripeptide with high affinity for Cu(II) ions (Log K = 16.44). Research indicates it activates genes involved in collagen synthesis (COL1A1, COL3A1), decorin, and tissue inhibitors of metalloproteinases (TIMPs). Studies demonstrate modulation of TGF-β superfamily signaling, affecting fibroblast activity and ECM production. The copper complex exhibits superoxide dismutase-like activity, providing antioxidant effects. Research shows involvement in VEGF and FGF-2 stimulation, promoting angiogenesis and tissue repair.'
      }
    ],
    researchApplications: [
      'Regulation of nitric oxide and endothelial signaling pathways',
      'Actin dynamics and cell migration processes',
      'Extracellular matrix deposition and remodeling',
      'Oxidative stress mitigation and redox balance',
      'Gene expression modulation related to repair and immune signaling',
      'Growth factor pathway activation (VEGF, FGF, TGF-β)',
      'Collagen synthesis and dermal fibroblast studies',
      'Anti-inflammatory cytokine modulation research'
    ]
  },
  'bpc-157-tb-500-blend': {
    description_en: 'The BPC-157 and TB-500 blend combines two of the most extensively researched peptides in the regenerative medicine field. BPC-157, a 15-amino acid fragment of Body Protection Compound, works synergistically with TB-500 (Thymosin Beta-4) to provide researchers with a powerful tool for studying tissue repair and regeneration mechanisms. The combined activity involves multiple signaling pathways including NO system modulation, growth factor expression, and cytoskeletal reorganization.',
    overview: 'This dual-peptide blend brings together complementary mechanisms of action. BPC-157 has been studied for its effects on the gastrointestinal system and wound healing through nitric oxide pathway modulation, while TB-500 is researched for its role in cell migration through actin sequestration and Akt pathway activation. Together, they offer enhanced research potential for studying regenerative processes at the molecular level.',
    components: [
      {
        name: 'BPC-157',
        amount: '5mg (10mg blend) / 10mg (20mg blend)',
        sequence: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val',
        molecularWeight: '1419.5 Da',
        description: 'Pentadecapeptide with cytoprotective and regenerative research applications. Studied for wound healing, GI protection, and musculoskeletal repair.',
        biochemicalCharacteristics: 'BPC-157 is a stable gastric pentadecapeptide exhibiting resistance to enzymatic degradation. Research demonstrates modulation of the nitric oxide (NO) system through eNOS and iNOS expression regulation. The peptide influences VEGF and VEGFR-2 expression, promoting neovascularization. Studies indicate FAK-paxillin pathway activation affecting focal adhesion formation and cell motility. Research also shows potential interaction with dopamine and serotonin receptor systems, as well as modulation of GABAergic neurotransmission.'
      },
      {
        name: 'TB-500',
        amount: '5mg (10mg blend) / 10mg (20mg blend)',
        sequence: 'LKKTETQ (active region)',
        molecularWeight: '4963 Da',
        description: 'Synthetic thymosin beta-4 fragment. Researched for tissue repair, anti-inflammatory effects, and cellular regeneration mechanisms.',
        biochemicalCharacteristics: 'TB-500 functions as a G-actin sequestering protein containing the LKKTETQ motif essential for actin binding. Research shows promotion of endothelial cell migration via PI3K/Akt signaling cascade. The peptide demonstrates anti-inflammatory effects through inhibition of NF-κB nuclear translocation. Studies indicate upregulation of matrix metalloproteinases (MMP-2, MMP-9) facilitating ECM remodeling. Research also shows promotion of stem cell differentiation and activation of Notch signaling pathway.'
      }
    ],
    researchApplications: [
      'Nitric oxide pathway and vascular signaling research',
      'Actin cytoskeleton dynamics and cell motility studies',
      'Extracellular matrix remodeling mechanisms',
      'NF-κB pathway and inflammatory response modulation',
      'Growth factor signaling (VEGF, FGF) studies',
      'Stem cell differentiation and tissue regeneration',
      'Focal adhesion kinase pathway research',
      'Gastrointestinal mucosal integrity studies'
    ]
  },
  'cjc-1295-ipamorelin': {
    description_en: 'The CJC-1295 and Ipamorelin blend combines a growth hormone releasing hormone (GHRH) analog with a selective growth hormone secretagogue. This combination has been studied for its synergistic effects on growth hormone release through dual receptor activation - GHRH-R and GHS-R1a. Research indicates this combination may amplify pulsatile GH secretion while maintaining physiological feedback mechanisms.',
    overview: 'This blend pairs CJC-1295, a modified GHRH analog with extended half-life through DAC technology, with Ipamorelin, a highly selective GH secretagogue. The dual mechanism activates both GHRH receptors on somatotrophs and ghrelin receptors, creating synergistic amplification of GH pulse amplitude. Research suggests this combination may produce more sustained and physiological GH release patterns compared to either peptide alone.',
    components: [
      {
        name: 'CJC-1295',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Modified GHRH analog with Drug Affinity Complex (DAC) for extended half-life. Stimulates pituitary GH release.',
        biochemicalCharacteristics: 'CJC-1295 is a synthetic GHRH(1-29) analog with four amino acid substitutions (Ala2, Gln8, Ala15, Leu27) providing proteolytic resistance. The DAC modification enables covalent binding to serum albumin, extending half-life from minutes to 6-8 days. Research shows activation of adenylate cyclase via GHRH receptor binding, increasing intracellular cAMP and PKA phosphorylation. This triggers somatotroph calcium influx through L-type voltage-gated channels, stimulating GH vesicle exocytosis. Studies indicate downstream IGF-1 hepatic production through JAK2/STAT5 pathway activation.'
      },
      {
        name: 'Ipamorelin',
        amount: '5mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Selective pentapeptide GH secretagogue. Minimal effect on cortisol, prolactin, and appetite compared to other GHRPs.',
        biochemicalCharacteristics: 'Ipamorelin is a highly selective GHS-R1a (ghrelin receptor) agonist with unique selectivity profile. Unlike other GHRPs, it demonstrates no significant activation of ACTH/cortisol axis or prolactin release. Research shows Gq/11 protein coupling triggering IP3-mediated calcium release from intracellular stores. The peptide potentiates GHRH-induced GH release by lowering somatotroph activation threshold. Studies indicate preserved hypothalamic-pituitary feedback sensitivity and absence of GH receptor desensitization with repeated dosing.'
      }
    ],
    researchApplications: [
      'GHRH receptor and GHS-R1a signaling pathway studies',
      'Pituitary somatotroph function and cAMP/PKA research',
      'IGF-1/JAK2/STAT5 axis investigation',
      'Hypothalamic-pituitary feedback mechanism studies',
      'GH pulse amplitude and frequency modulation research',
      'Metabolic substrate utilization and lipolysis studies',
      'Age-related somatopause and GH decline research',
      'Circadian GH secretion pattern studies'
    ]
  },
  'bpc-157-tb-500-kpv-ghk-cu-klow-blend': {
    description_en: 'The Klow Blend is an advanced four-peptide formula combining BPC-157, TB-500, KPV, and GHK-Cu. This comprehensive blend brings together tissue repair, anti-inflammatory, and skin health peptides involving multiple signaling pathways including NO modulation, NF-κB inhibition, melanocortin receptor activation, and TGF-β signaling for advanced research applications.',
    overview: 'This premium quad-peptide blend represents the cutting edge of peptide research combinations. KPV, a potent anti-inflammatory tripeptide derived from alpha-MSH acting via melanocortin receptors and NF-κB inhibition, joins the regenerative trio of BPC-157, TB-500, and GHK-Cu to create a comprehensive research tool for studying inflammation, tissue repair, and skin health at the molecular signaling level.',
    components: [
      {
        name: 'BPC-157',
        amount: '20mg',
        sequence: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val',
        molecularWeight: '1419.5 Da',
        description: 'Body protection compound fragment with extensive wound healing and tissue repair research.',
        biochemicalCharacteristics: 'BPC-157 demonstrates remarkable stability in gastric juice pH conditions. Research indicates NO system interaction through eNOS/iNOS modulation, affecting vasodilation and tissue perfusion. The peptide influences VEGF-A and its receptor VEGFR-2, promoting angiogenic processes. Studies show activation of FAK-paxillin-Akt pathway affecting cellular adhesion and survival signaling. Research also indicates involvement in EGF receptor transactivation and potential interactions with GABAergic and dopaminergic neurotransmitter systems.'
      },
      {
        name: 'TB-500',
        amount: '20mg',
        sequence: 'LKKTETQ (active region)',
        molecularWeight: '4963 Da',
        description: 'Thymosin beta-4 synthetic peptide for tissue regeneration research.',
        biochemicalCharacteristics: 'TB-500 is the synthetic form of naturally occurring Thymosin Beta-4. The central LKKTETQ domain sequesters G-actin monomers, regulating F-actin filament formation and cytoskeletal dynamics. Research demonstrates ILK (Integrin-Linked Kinase) activation promoting cardiac and vascular protection. Studies show MMP-1, MMP-2, and MMP-9 upregulation facilitating ECM degradation for cellular migration. The peptide promotes HIF-1α stabilization under hypoxic conditions and PDGF receptor activation for fibroblast recruitment.'
      },
      {
        name: 'KPV',
        amount: '20mg',
        sequence: 'Lys-Pro-Val',
        molecularWeight: '342.4 Da',
        description: 'Tripeptide derived from alpha-MSH C-terminal. Potent anti-inflammatory research peptide with gut health applications.',
        biochemicalCharacteristics: 'KPV is the C-terminal tripeptide of α-MSH with preserved anti-inflammatory activity independent of melanocortin receptor binding. Research demonstrates potent NF-κB p65 nuclear translocation inhibition, reducing pro-inflammatory cytokine expression (TNF-α, IL-1β, IL-6). Studies show inhibition of MAPK/ERK pathway activation in inflammatory conditions. The peptide demonstrates intestinal epithelial barrier protection through tight junction protein preservation (ZO-1, occludin). Research indicates NLRP3 inflammasome inhibition and reduced IL-18 production.'
      },
      {
        name: 'GHK-Cu',
        amount: '20mg',
        sequence: 'Gly-His-Lys + Cu²⁺',
        molecularWeight: '403.9 Da',
        description: 'Copper peptide for skin regeneration and wound healing research.',
        biochemicalCharacteristics: 'GHK-Cu forms a stable copper(II) complex with high binding affinity. Research shows activation of collagen genes (COL1A1, COL3A1) and glycosaminoglycan synthesis. The copper moiety provides SOD-mimetic antioxidant activity, scavenging superoxide radicals. Studies demonstrate TGF-β1 pathway modulation affecting myofibroblast differentiation. Research indicates TIMP-1 and TIMP-2 upregulation, balancing MMP activity for controlled ECM remodeling. The peptide activates VEGF and nerve growth factor (NGF) expression for tissue innervation and vascularization.'
      }
    ],
    researchApplications: [
      'NF-κB pathway inhibition and inflammatory signaling',
      'Melanocortin receptor-independent anti-inflammatory mechanisms',
      'Intestinal barrier function and tight junction research',
      'Actin dynamics and cytoskeletal reorganization studies',
      'TGF-β superfamily signaling and fibrosis research',
      'Oxidative stress and SOD-mimetic antioxidant studies',
      'MMP/TIMP balance and ECM remodeling research',
      'NLRP3 inflammasome and IL-18 pathway studies'
    ]
  },
  'cjc-1295-ghrp-2': {
    description_en: 'The CJC-1295 and GHRP-2 blend combines a long-acting growth hormone releasing hormone analog with a potent growth hormone releasing peptide. This combination has been studied for its synergistic effects on stimulating robust growth hormone release through simultaneous GHRH-R and GHS-R1a activation, producing amplified somatotroph stimulation.',
    overview: 'This powerful blend pairs CJC-1295 (a modified GHRH with extended half-life through albumin binding) with GHRP-2 (one of the most potent GH secretagogues). Research indicates this combination activates adenylate cyclase and phospholipase C pathways simultaneously, producing significant GH pulses through synergistic dual receptor activation on anterior pituitary somatotrophs.',
    components: [
      {
        name: 'CJC-1295',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Modified GHRH analog that stimulates natural GH production from the pituitary gland with extended duration of action.',
        biochemicalCharacteristics: 'CJC-1295 binds to the GHRH receptor (GHRHR), a class B GPCR, triggering Gs protein activation. This stimulates adenylate cyclase, increasing intracellular cAMP and activating PKA. PKA phosphorylates CREB transcription factor, upregulating GH gene expression. Simultaneously, cAMP activates L-type Ca²⁺ channels causing calcium influx and GH vesicle exocytosis. The DAC technology provides 8-day plasma half-life through albumin conjugation via reactive maleimide group.'
      },
      {
        name: 'GHRP-2',
        amount: '5mg',
        sequence: 'D-Ala-D-βNal-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '817.9 Da',
        description: 'Potent hexapeptide GH secretagogue that works via ghrelin receptor activation. More potent than GHRP-6 with less appetite stimulation.',
        biochemicalCharacteristics: 'GHRP-2 is a synthetic hexapeptide ghrelin mimetic with high GHS-R1a affinity. Unlike endogenous ghrelin, it lacks the serine octanoylation, providing improved stability. Research shows Gq/11 protein coupling activating PLC-β, generating IP3 and DAG. IP3 triggers Ca²⁺ release from endoplasmic reticulum stores. The peptide demonstrates moderate ACTH stimulation and mild cortisol elevation. Studies indicate some prolactin release via cross-reactivity with pituitary lactotrophs. GHRP-2 shows more potent GH release per unit than GHRP-6 with reduced orexigenic effects.'
      }
    ],
    researchApplications: [
      'Dual GPCR signaling (Gs and Gq/11) pathway studies',
      'cAMP/PKA and PLC-β/IP3/DAG cascade research',
      'Pituitary somatotroph calcium signaling investigation',
      'GH pulsatility and amplitude amplification studies',
      'CREB-mediated GH gene transcription research',
      'IGF-1 axis and hepatic signaling studies',
      'Hypothalamic somatostatin feedback mechanisms',
      'Cross-talk between GHRH-R and GHS-R1a pathways'
    ]
  },
  'cjc-1295-ghrp-6': {
    description_en: 'The CJC-1295 and GHRP-6 blend combines a sustained-release GHRH analog with the original growth hormone releasing peptide. This combination leverages dual receptor pathways - GHRH-R and GHS-R1a - to stimulate growth hormone secretion while also activating appetite and gastric motility signaling through the ghrelin/orexin axis.',
    overview: 'This blend combines CJC-1295 for sustained GHRH activity with GHRP-6, one of the first synthetic GH secretagogues developed. GHRP-6 demonstrates strong ghrelin mimetic activity with pronounced appetite stimulation through hypothalamic NPY/AgRP neuron activation, making this blend valuable for research into metabolic regulation, gastric function, and the GH-ghrelin axis.',
    components: [
      {
        name: 'CJC-1295',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Long-acting GHRH analog for sustained growth hormone release stimulation.',
        biochemicalCharacteristics: 'CJC-1295 activates the GHRH receptor triggering Gs-coupled adenylate cyclase activity. This elevates cAMP, activating PKA and CREB phosphorylation for GH gene transcription. The modified GHRH(1-29) backbone includes D-Ala2 substitution preventing DPP-IV degradation. Research shows sustained elevation of IGF-1 through JAK2/STAT5b hepatic pathway activation. The DAC bioconjugation enables continuous somatotroph priming, amplifying subsequent GHS-R1a-mediated GH pulses.'
      },
      {
        name: 'GHRP-6',
        amount: '5mg',
        sequence: 'His-D-Trp-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '873.0 Da',
        description: 'First-generation hexapeptide GH secretagogue. Stimulates GH release and significantly increases appetite via ghrelin mimetic action.',
        biochemicalCharacteristics: 'GHRP-6 is a synthetic ghrelin mimetic acting primarily on GHS-R1a receptors in the pituitary and hypothalamus. Research demonstrates strong activation of hypothalamic NPY and AgRP neurons, explaining pronounced orexigenic effects. The peptide triggers Gq/11-mediated PLC activation generating IP3-induced Ca²⁺ release. Studies show cardioprotective effects through direct cardiac GHS-R1a activation and nitric oxide release. GHRP-6 also demonstrates gastric motility enhancement through enteric nervous system modulation.'
      }
    ],
    researchApplications: [
      'Ghrelin receptor (GHS-R1a) signaling research',
      'Hypothalamic NPY/AgRP appetite circuit studies',
      'Gastric motility and enteric nervous system research',
      'Cardiac GHS-R1a expression and cardioprotection studies',
      'GH-IGF-1 axis and metabolic regulation',
      'Orexigenic pathway and energy homeostasis research',
      'Dual GHRH-R/GHS-R1a synergy mechanisms',
      'Nitric oxide-mediated vascular effects studies'
    ]
  },
  'cjc-1295-hexarelin': {
    description_en: 'The CJC-1295 and Hexarelin blend combines a long-acting GHRH with one of the most potent growth hormone secretagogues. Hexarelin demonstrates unique receptor binding profile with both GHS-R1a and cardiac-specific receptor interactions, providing GH-independent cardioprotective research applications.',
    overview: 'This potent combination pairs CJC-1295 with Hexarelin, considered one of the strongest GH secretagogues available. Hexarelin has unique research value due to its documented cardioprotective properties through direct cardiac receptor activation, myocardial Akt/PI3K pathway, and anti-apoptotic signaling independent of systemic GH release.',
    components: [
      {
        name: 'CJC-1295',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Extended-release GHRH analog for sustained pituitary stimulation.',
        biochemicalCharacteristics: 'CJC-1295 provides continuous GHRH receptor occupation through its DAC-mediated albumin binding (t½ ~8 days). The peptide activates Gs-coupled signaling, increasing cAMP and PKA activity in somatotrophs. Research demonstrates enhanced GH storage pool and increased sensitivity to subsequent secretagogue stimulation. Studies show maintained pituitary responsiveness without desensitization during extended exposure.'
      },
      {
        name: 'Hexarelin',
        amount: '5mg',
        sequence: 'His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '887.0 Da',
        description: 'Highly potent hexapeptide GH secretagogue with documented cardioprotective properties. Strongest GH release among GHRPs.',
        biochemicalCharacteristics: 'Hexarelin is the most potent synthetic GHS-R1a agonist with additional activity at CD36 scavenger receptor in cardiac tissue. Research demonstrates direct cardioprotective effects through PI3K/Akt survival pathway activation independent of GH. The peptide inhibits cardiomyocyte apoptosis via Bcl-2 upregulation and caspase-3 inhibition. Studies show protection against ischemia-reperfusion injury through mitochondrial permeability transition pore regulation. Hexarelin also modulates cardiac calcium handling and improves contractile function through SERCA2a modulation.'
      }
    ],
    researchApplications: [
      'Cardiac CD36 receptor and cardioprotection research',
      'PI3K/Akt myocardial survival signaling studies',
      'Anti-apoptotic Bcl-2 family pathway research',
      'Ischemia-reperfusion injury protection mechanisms',
      'Mitochondrial permeability transition pore studies',
      'Maximum GH secretion and pituitary capacity research',
      'Cardiac calcium handling and SERCA2a modulation',
      'GH-independent cardiovascular protective mechanisms'
    ]
  },
  'tesamorelin-ipamorelin': {
    description_en: 'The Tesamorelin and Ipamorelin blend combines an FDA-studied GHRH analog with a highly selective GH secretagogue. Tesamorelin demonstrates specific activity on visceral adipose tissue through GH-mediated lipolysis pathways and adiponectin modulation, providing unique research value for metabolic studies.',
    overview: 'This blend pairs Tesamorelin (a 44-amino acid GHRH analog clinically studied for lipodystrophy with documented visceral fat reduction) with Ipamorelin (the most selective GHRP with minimal cortisol/prolactin impact). This combination offers researchers a tool for studying GH-mediated lipolytic pathways, adipokine signaling, and body composition regulation.',
    components: [
      {
        name: 'Tesamorelin',
        amount: '4mg',
        sequence: 'Trans-3-hexenoic acid-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2',
        molecularWeight: '5135.9 Da',
        description: '44-amino acid GHRH analog with trans-3-hexenoic acid modification. Extensively studied for visceral fat reduction.',
        biochemicalCharacteristics: 'Tesamorelin is a full-length GHRH(1-44) analog with trans-3-hexenoic acid N-terminal modification providing enhanced stability. Research demonstrates preferential effect on visceral adipose tissue (VAT) reduction through GH-stimulated hormone-sensitive lipase (HSL) activation. The peptide increases adiponectin levels while reducing inflammatory adipokines. Studies show improved lipid profiles with decreased triglycerides and increased HDL. Tesamorelin activates hepatic IGF-1 production through JAK2/STAT5 signaling while maintaining physiological pulsatile GH patterns.'
      },
      {
        name: 'Ipamorelin',
        amount: '4mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Most selective GH secretagogue with minimal impact on cortisol, prolactin, and appetite.',
        biochemicalCharacteristics: 'Ipamorelin demonstrates exquisite selectivity for GH release without activating HPA axis or prolactin secretion. The Aib (α-aminoisobutyric acid) N-terminus provides proteolytic resistance. Research shows Gq/11-mediated signaling amplifying GHRH-induced cAMP elevation through receptor cross-talk. The peptide maintains normal negative feedback sensitivity to IGF-1 and somatostatin. Studies indicate absence of GHS-R1a desensitization with repeated administration, preserving long-term pituitary responsiveness.'
      }
    ],
    researchApplications: [
      'Visceral adipose tissue metabolism and lipolysis research',
      'Hormone-sensitive lipase (HSL) activation studies',
      'Adiponectin and adipokine signaling research',
      'Lipid metabolism and dyslipidemia studies',
      'GH-mediated body composition regulation',
      'JAK2/STAT5 hepatic signaling investigation',
      'Metabolic syndrome and insulin sensitivity research',
      'Selective GH elevation without HPA axis activation'
    ]
  },
  'mod-grf-ipamorelin': {
    description_en: 'The Mod GRF (1-29) and Ipamorelin blend combines Modified Growth Releasing Factor with the most selective GH secretagogue. This combination mimics physiological pulsatile GH secretion patterns through coordinated GHRH-R and GHS-R1a activation with rapid clearance kinetics.',
    overview: 'This popular research combination pairs Mod GRF 1-29 (also known as CJC-1295 without DAC) with Ipamorelin. Unlike CJC-1295 with DAC, Mod GRF has a shorter half-life (~30 minutes) allowing for more precise pulsatile GH release research that closely mimics natural circadian secretion patterns.',
    components: [
      {
        name: 'Mod GRF 1-29',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Modified GHRH(1-29) with amino acid substitutions for increased stability. Shorter acting than CJC-1295 DAC.',
        biochemicalCharacteristics: 'Mod GRF 1-29 (Tetrasubstituted GHRH) contains four modifications: D-Ala2 (DPP-IV resistance), Gln8 (asparagine deamidation prevention), Ala15 (oxidation resistance), Leu27 (aggregation prevention). The peptide activates GHRH-R with rapid onset and ~30-minute plasma half-life. Research shows Gs-coupled adenylate cyclase activation and cAMP elevation. The transient receptor occupation allows natural somatostatin-mediated GH pulse termination, preserving physiological pulsatility patterns.'
      },
      {
        name: 'Ipamorelin',
        amount: '5mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Highly selective pentapeptide GHRP with clean GH release profile.',
        biochemicalCharacteristics: 'Ipamorelin selectively activates GHS-R1a without significant ACTH, cortisol, or prolactin elevation. The pentapeptide structure with Aib and D-amino acids provides proteolytic stability. Research demonstrates Gq/11 signaling triggering PLC-β and IP3-mediated calcium release. The peptide lowers somatotroph activation threshold, potentiating GHRH effects. Studies show preserved somatostatin sensitivity maintaining physiological feedback and natural pulse termination.'
      }
    ],
    researchApplications: [
      'Physiological pulsatile GH secretion modeling',
      'Circadian GH rhythm and sleep-related release studies',
      'Somatostatin negative feedback mechanism research',
      'GHRH-R and GHS-R1a receptor cross-talk investigation',
      'cAMP/PKA transient activation studies',
      'Natural GH pulse width and amplitude research',
      'Age-related somatopause and GH decline studies',
      'Clean GH elevation without HPA axis perturbation'
    ]
  },
  'mod-grf-ghrp-2': {
    description_en: 'The Mod GRF (1-29) and GHRP-2 blend combines Modified Growth Releasing Factor with a potent growth hormone releasing peptide for robust GH stimulation through synergistic dual receptor activation producing strong, discrete GH pulses.',
    overview: 'This combination pairs Mod GRF 1-29 (short-acting GHRH analog) with GHRP-2 (potent GH secretagogue). Research demonstrates synergistic amplification through simultaneous adenylate cyclase and phospholipase C pathway activation, producing strong pulsatile GH release patterns.',
    components: [
      {
        name: 'Mod GRF 1-29',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Short-acting GHRH analog optimized for pulsatile GH research.',
        biochemicalCharacteristics: 'Mod GRF 1-29 provides transient GHRH receptor activation with preserved pulsatility. The four amino acid substitutions prevent enzymatic degradation while maintaining full receptor affinity. Research shows rapid cAMP elevation and PKA activation in somatotrophs. The short half-life ensures discrete pulse initiation followed by natural somatostatin-mediated termination. Studies demonstrate synergistic effect when combined with GHS-R1a agonists through receptor heterodimerization.'
      },
      {
        name: 'GHRP-2',
        amount: '5mg',
        sequence: 'D-Ala-D-βNal-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '817.9 Da',
        description: 'Potent GH secretagogue with strong GH release properties.',
        biochemicalCharacteristics: 'GHRP-2 demonstrates high GHS-R1a affinity with Gq/11 coupling generating IP3 and DAG second messengers. Research shows potent calcium mobilization from intracellular stores. The peptide exhibits moderate ACTH stimulation (~50% of GHRP-6) through cross-reactivity. Studies indicate strong GH pulse amplitude enhancement when combined with GHRH analogs. GHRP-2 partially resists receptor desensitization through biased agonism and β-arrestin pathway modulation.'
      }
    ],
    researchApplications: [
      'Synergistic cAMP and IP3/DAG pathway studies',
      'GHRH-R/GHS-R1a heterodimerization research',
      'GH pulse amplitude maximization studies',
      'Intracellular calcium signaling investigation',
      'β-arrestin biased agonism research',
      'Muscle protein synthesis and IGF-1 studies',
      'Pituitary somatotroph capacity research',
      'Potent pulsatile GH release mechanisms'
    ]
  },
  'mod-grf-ghrp-6': {
    description_en: 'The Mod GRF (1-29) and GHRP-6 blend combines Modified Growth Releasing Factor with the original GHRP for comprehensive GH release research alongside ghrelin-mediated appetite and gastric motility signaling.',
    overview: 'This blend combines Mod GRF 1-29 with GHRP-6, known for both GH release and strong appetite stimulation through hypothalamic NPY/AgRP neuron activation. Valuable for research into growth hormone effects alongside orexigenic pathways, gastric function, and the gut-brain axis.',
    components: [
      {
        name: 'Mod GRF 1-29',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Modified GHRH fragment for pituitary GH stimulation.',
        biochemicalCharacteristics: 'Mod GRF 1-29 activates pituitary GHRH receptors triggering Gs-coupled adenylate cyclase signaling. The tetrasubstituted structure provides DPP-IV resistance and enhanced stability while preserving native receptor binding. Research shows discrete pulse kinetics enabling physiological GH pattern research. The peptide primes somatotrophs for amplified response to subsequent GHS-R1a stimulation through cAMP-mediated calcium channel sensitization.'
      },
      {
        name: 'GHRP-6',
        amount: '5mg',
        sequence: 'His-D-Trp-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '873.0 Da',
        description: 'First-generation GHRP with strong appetite stimulation via ghrelin receptor.',
        biochemicalCharacteristics: 'GHRP-6 is a potent GHS-R1a agonist with pronounced orexigenic effects through hypothalamic NPY and AgRP neuron activation. Research demonstrates Gq/11 signaling with strong IP3-mediated calcium release. The peptide activates vagal afferents enhancing gastric motility and acid secretion. Studies show cardiac GHS-R1a activation with nitric oxide release providing cardioprotective effects. GHRP-6 stimulates moderate ACTH/cortisol elevation and prolactin release.'
      }
    ],
    researchApplications: [
      'Orexigenic NPY/AgRP pathway activation studies',
      'Ghrelin receptor signaling and appetite regulation',
      'Gastric motility and vagal nerve activation research',
      'Gut-brain axis communication studies',
      'Combined GH and appetite stimulation research',
      'Cardiac GHS-R1a and nitric oxide studies',
      'Energy homeostasis and metabolic regulation',
      'Enteric nervous system modulation research'
    ]
  },
  'mod-grf-hexarelin': {
    description_en: 'The Mod GRF (1-29) and Hexarelin blend combines Modified Growth Releasing Factor with the most potent GH secretagogue for maximum pulsatile GH release alongside GH-independent cardioprotective mechanisms through cardiac CD36 receptor activation.',
    overview: 'This high-potency combination pairs Mod GRF 1-29 with Hexarelin, the strongest GHRP. Hexarelin provides unique research value through direct cardiac protection via CD36 scavenger receptor activation, PI3K/Akt survival signaling, and mitochondrial protection independent of systemic GH release.',
    components: [
      {
        name: 'Mod GRF 1-29',
        amount: '5mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Modified GHRH for enhanced pituitary stimulation.',
        biochemicalCharacteristics: 'Mod GRF 1-29 provides pulsatile GHRH receptor stimulation with rapid clearance. The peptide activates Gs signaling with cAMP elevation and CREB phosphorylation for GH gene transcription. Research shows synergistic enhancement when combined with potent GHS-R1a agonists. Studies demonstrate maintained pituitary sensitivity without desensitization during repeated pulsatile administration.'
      },
      {
        name: 'Hexarelin',
        amount: '5mg',
        sequence: 'His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '887.0 Da',
        description: 'Most potent GHRP with unique cardioprotective properties.',
        biochemicalCharacteristics: 'Hexarelin demonstrates highest GHS-R1a binding affinity among synthetic GHRPs with additional cardiac CD36 receptor activity. Research shows direct myocardial protection through PI3K/Akt pathway activation independent of GH. The peptide inhibits cardiomyocyte apoptosis via Bcl-2/Bax ratio modulation and caspase-3 inhibition. Studies demonstrate protection against ischemia-reperfusion injury through mPTP (mitochondrial permeability transition pore) regulation. Hexarelin improves cardiac contractility through SERCA2a and phospholamban modulation.'
      }
    ],
    researchApplications: [
      'Maximum pulsatile GH secretion studies',
      'Cardiac CD36 receptor and cardioprotection research',
      'PI3K/Akt myocardial survival pathway studies',
      'Mitochondrial permeability transition pore research',
      'Bcl-2/Bax apoptotic balance investigation',
      'Ischemia-reperfusion injury protection studies',
      'SERCA2a calcium handling and contractility research',
      'GH-independent cardiac protective mechanisms'
    ]
  },
  'sermorelin-ipamorelin': {
    description_en: 'The Sermorelin and Ipamorelin blend combines the natural GHRH(1-29) sequence with the most selective GH secretagogue for clean, physiological GH release research. Both peptides preserve normal hypothalamic-pituitary feedback mechanisms, producing GH release patterns closely mimicking endogenous secretion.',
    overview: 'This blend pairs Sermorelin (the native 29-amino acid bioactive region of GHRH) with Ipamorelin (the most selective GHRP). Both peptides are known for producing physiological GH release patterns with minimal side effects on cortisol, prolactin, or appetite, making this ideal for natural GH rhythm and age-related decline research.',
    components: [
      {
        name: 'Sermorelin',
        amount: '5mg',
        sequence: 'Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3357.9 Da',
        description: 'Natural GHRH(1-29) sequence. First GH-releasing peptide to be clinically studied.',
        biochemicalCharacteristics: 'Sermorelin is the native GHRH(1-29) sequence representing the minimum bioactive fragment. The peptide binds GHRH receptors activating Gs-coupled adenylate cyclase signaling. Research shows preserved physiological negative feedback sensitivity to somatostatin and IGF-1. The shorter half-life (~10-20 min) allows discrete pulsatile release patterns. Studies indicate maintained pituitary responsiveness with age-appropriate GH secretion profiles and restoration of nocturnal GH peaks.'
      },
      {
        name: 'Ipamorelin',
        amount: '5mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Cleanest GH secretagogue with no effect on cortisol or prolactin.',
        biochemicalCharacteristics: 'Ipamorelin is the most selective GHS-R1a agonist with unique lack of ACTH/cortisol and prolactin stimulation. Research demonstrates specific Gq/11 signaling in somatotrophs without cross-reactivity with corticotrophs or lactotrophs. The peptide preserves hypothalamic-pituitary feedback loops and somatostatin sensitivity. Studies show potentiation of GHRH effects through somatotroph threshold lowering without receptor desensitization.'
      }
    ],
    researchApplications: [
      'Physiological GH secretion pattern research',
      'Age-related somatopause and GH decline studies',
      'Nocturnal GH pulse restoration research',
      'Hypothalamic-pituitary axis preservation studies',
      'Clean GH elevation without HPA perturbation',
      'Somatostatin sensitivity and feedback research',
      'Sleep-related GH secretion studies',
      'Anti-aging and longevity mechanism research'
    ]
  },
  'sermorelin-ghrp-2': {
    description_en: 'The Sermorelin and GHRP-2 blend combines natural GHRH(1-29) with a potent GH secretagogue for enhanced GH release through synergistic dual receptor activation combining Gs-coupled and Gq/11-coupled signaling pathways.',
    overview: 'This combination pairs Sermorelin (natural GHRH sequence providing physiological receptor activation) with GHRP-2 (potent synthetic GHRP). The dual mechanism approach amplifies GH release beyond either peptide alone through synergistic cAMP and calcium signaling pathway convergence.',
    components: [
      {
        name: 'Sermorelin',
        amount: '5mg',
        sequence: 'Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3357.9 Da',
        description: 'Natural GHRH sequence for physiological pituitary stimulation.',
        biochemicalCharacteristics: 'Sermorelin activates the class B GPCR GHRH receptor with native binding kinetics. The peptide triggers Gs-mediated adenylate cyclase activation, increasing cAMP and PKA activity. Research demonstrates CREB phosphorylation and GH gene transcription upregulation. The native sequence maintains natural receptor dynamics and desensitization patterns. Studies show enhanced response when combined with GHS-R1a agonists through intracellular signaling convergence.'
      },
      {
        name: 'GHRP-2',
        amount: '5mg',
        sequence: 'D-Ala-D-βNal-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '817.9 Da',
        description: 'Potent GH secretagogue for amplified GH release.',
        biochemicalCharacteristics: 'GHRP-2 activates GHS-R1a triggering Gq/11-mediated PLC-β signaling with IP3 and DAG generation. Research shows calcium mobilization from intracellular stores and PKC activation. The peptide demonstrates moderate ACTH stimulation and mild cortisol elevation. Studies indicate GH pulse amplitude enhancement of 50-100% when combined with GHRH analogs. GHRP-2 shows reduced orexigenic effects compared to GHRP-6 while maintaining potent GH release.'
      }
    ],
    researchApplications: [
      'Synergistic Gs and Gq/11 pathway convergence studies',
      'cAMP/PKA and IP3/calcium signaling integration',
      'GH pulse amplitude amplification research',
      'Natural GHRH receptor activation kinetics',
      'Combined receptor synergy mechanisms',
      'Metabolic substrate utilization studies',
      'IGF-1 axis amplification research',
      'Pituitary secretory capacity investigation'
    ]
  },
  'sermorelin-ghrp-6': {
    description_en: 'The Sermorelin and GHRP-6 blend combines natural GHRH(1-29) with the original GH releasing peptide for comprehensive GH release research alongside ghrelin-mediated appetite signaling, gastric motility, and gut-brain axis communication.',
    overview: 'This blend pairs Sermorelin (native GHRH sequence) with GHRP-6 (first synthetic ghrelin mimetic), combining natural GHRH activity with strong ghrelin-mimetic effects. Valuable for research into GH release alongside orexigenic pathways, gastric function, and metabolic regulation.',
    components: [
      {
        name: 'Sermorelin',
        amount: '5mg',
        sequence: 'Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3357.9 Da',
        description: 'Natural GHRH sequence for pituitary GH stimulation.',
        biochemicalCharacteristics: 'Sermorelin represents the bioactive GHRH(1-29) fragment with preserved native receptor binding. The peptide activates adenylate cyclase through GHRH-R Gs coupling, elevating intracellular cAMP. Research shows PKA-mediated L-type calcium channel phosphorylation increasing calcium influx. The native sequence maintains physiological feedback sensitivity to somatostatin and IGF-1. Studies demonstrate pituitary responsiveness restoration in GH-deficient states.'
      },
      {
        name: 'GHRP-6',
        amount: '5mg',
        sequence: 'His-D-Trp-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '873.0 Da',
        description: 'Original GHRP with strong ghrelin-mimetic effects.',
        biochemicalCharacteristics: 'GHRP-6 is the first synthetic GHS-R1a agonist with strong ghrelin-mimetic activity. Research demonstrates potent hypothalamic NPY/AgRP neuron activation producing pronounced appetite stimulation. The peptide enhances gastric motility through vagal efferent activation and motilin pathway modulation. Studies show cardiac protection through myocardial GHS-R1a activation and NO release. GHRP-6 stimulates significant ACTH/cortisol and prolactin elevation alongside GH release.'
      }
    ],
    researchApplications: [
      'Native GHRH and ghrelin pathway integration',
      'Hypothalamic NPY/AgRP appetite circuit studies',
      'Gastric motility and vagal signaling research',
      'Motilin pathway and GI function studies',
      'GH and orexigenic hormone correlation research',
      'Cardiac GHS-R1a protective mechanisms',
      'Energy homeostasis and feeding behavior studies',
      'Gut-brain axis signaling research'
    ]
  },
  'sermorelin-ghrp-6-ghrp-2': {
    description_en: 'The Sermorelin, GHRP-6, and GHRP-2 triple blend combines natural GHRH with two potent GH secretagogues for maximum GH release research through triple receptor activation providing GHRH-R stimulation alongside dual GHS-R1a occupancy with different agonist profiles.',
    overview: 'This triple-peptide combination pairs Sermorelin with both GHRP-6 and GHRP-2, creating a comprehensive GH release system. GHRP-6 provides strong orexigenic and gastric effects while GHRP-2 offers more potent GH release with less appetite stimulation, allowing research into differential GHS-R1a signaling profiles.',
    components: [
      {
        name: 'Sermorelin',
        amount: '3mg',
        sequence: 'Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3357.9 Da',
        description: 'Natural GHRH fragment for baseline pituitary stimulation.',
        biochemicalCharacteristics: 'Sermorelin provides native GHRH receptor activation with Gs-coupled adenylate cyclase signaling. The peptide elevates intracellular cAMP and PKA activity in somatotrophs. Research shows physiological receptor kinetics with natural desensitization patterns. The native sequence primes pituitary cells for amplified response to subsequent GHS-R1a agonists through calcium channel sensitization.'
      },
      {
        name: 'GHRP-6',
        amount: '3mg',
        sequence: 'His-D-Trp-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '873.0 Da',
        description: 'First-generation GHRP with appetite stimulation.',
        biochemicalCharacteristics: 'GHRP-6 demonstrates high orexigenic potency through hypothalamic NPY/AgRP neuron activation. Research shows Gq/11 signaling with strong IP3-mediated calcium release. The peptide activates gastric motility through vagal pathways and motilin release. Studies indicate cardiac protection through direct GHS-R1a activation and NO production. The peptide provides broad GH axis stimulation with significant ACTH/cortisol effects.'
      },
      {
        name: 'GHRP-2',
        amount: '3mg',
        sequence: 'D-Ala-D-βNal-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '817.9 Da',
        description: 'Potent GHRP with cleaner release profile than GHRP-6.',
        biochemicalCharacteristics: 'GHRP-2 shows higher GH release potency per unit with reduced appetite stimulation compared to GHRP-6. Research demonstrates efficient Gq/11 coupling and calcium signaling. The peptide exhibits biased agonism with different β-arrestin recruitment patterns. Studies show approximately 50% lower orexigenic effects while maintaining or exceeding GH release potency. The combination allows research into differential GHS-R1a signaling profiles.'
      }
    ],
    researchApplications: [
      'Triple receptor activation and signaling convergence',
      'Differential GHS-R1a agonist profile research',
      'Biased agonism and β-arrestin signaling studies',
      'Maximum GH pulse amplitude investigation',
      'Combined orexigenic pathway modulation',
      'Multi-receptor synergy mechanism research',
      'Comparative GHRP efficacy studies',
      'Comprehensive GH axis activation research'
    ]
  },
  'cjc-1295-ipamorelin-ghrp-2': {
    description_en: 'The CJC-1295, Ipamorelin, and GHRP-2 triple blend combines long-acting GHRH with two complementary GH secretagogues for comprehensive GH research through sustained GHRH-R activation combined with selective and potent GHS-R1a stimulation.',
    overview: 'This advanced triple combination pairs CJC-1295 (providing sustained baseline GHRH-R stimulation via DAC-mediated albumin binding) with both Ipamorelin (most selective GH secretagogue) and GHRP-2 (potent GH secretagogue). The combination offers sustained GH elevation through continuous somatotroph priming with amplified pulse amplitude through dual GHS-R1a agonism.',
    components: [
      {
        name: 'CJC-1295',
        amount: '4mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Extended-release GHRH for sustained pituitary stimulation.',
        biochemicalCharacteristics: 'CJC-1295 provides continuous GHRH-R occupation through DAC-albumin conjugation (t½ ~8 days). Research shows sustained cAMP elevation and persistent somatotroph priming. The peptide maintains elevated GH storage pools and increased sensitivity to secretagogue stimulation. Studies demonstrate enhanced IGF-1 production through sustained JAK2/STAT5 hepatic pathway activation.'
      },
      {
        name: 'Ipamorelin',
        amount: '4mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Selective GHRP for clean GH release.',
        biochemicalCharacteristics: 'Ipamorelin provides selective GHS-R1a activation without ACTH/cortisol or prolactin elevation. Research shows specific Gq/11 coupling in somatotrophs with preserved hypothalamic feedback. The peptide lowers somatotroph activation threshold, potentiating CJC-1295 priming effects. Studies indicate absence of receptor desensitization allowing sustained responsiveness.'
      },
      {
        name: 'GHRP-2',
        amount: '4mg',
        sequence: 'D-Ala-D-βNal-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '817.9 Da',
        description: 'Potent GHRP for amplified GH pulses.',
        biochemicalCharacteristics: 'GHRP-2 adds potent GHS-R1a stimulation with strong calcium mobilization. Research demonstrates enhanced IP3/DAG generation and PKC activation. The peptide provides GH pulse amplitude amplification when combined with GHRH priming. Studies show moderate ACTH effects while maximizing GH release, creating complementary profile with selective Ipamorelin.'
      }
    ],
    researchApplications: [
      'Sustained GHRH-R priming with pulsatile GHS-R1a activation',
      'Complementary selective and potent GH secretagogue profiles',
      'Continuous somatotroph sensitization research',
      'Maximum IGF-1 axis activation studies',
      'Dual GHS-R1a agonist synergy investigation',
      'Long-term GH elevation without desensitization',
      'Advanced body composition optimization research',
      'Comprehensive anti-aging mechanism studies'
    ]
  },
  'mod-grf-ipamorelin-ghrp-2': {
    description_en: 'The Mod GRF, Ipamorelin, and GHRP-2 triple blend combines short-acting GHRH with two complementary GH secretagogues for pulsatile GH research with maximum discrete pulse amplitude through coordinated transient receptor activation.',
    overview: 'This triple combination pairs Mod GRF 1-29 (providing discrete pulsatile GHRH stimulation with ~30-minute half-life) with both Ipamorelin and GHRP-2. Unlike CJC-1295 versions, this creates strong, discrete GH pulses closely mimicking physiological nocturnal secretion patterns with enhanced amplitude.',
    components: [
      {
        name: 'Mod GRF 1-29',
        amount: '4mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Short-acting GHRH for discrete pulse stimulation.',
        biochemicalCharacteristics: 'Mod GRF 1-29 provides transient GHRH-R activation with rapid clearance (~30 min t½). The tetrasubstituted structure prevents DPP-IV degradation while preserving native kinetics. Research shows discrete cAMP pulses enabling natural somatostatin-mediated GH pulse termination. The peptide provides pulsatile somatotroph priming for amplified GHS-R1a responses.'
      },
      {
        name: 'Ipamorelin',
        amount: '4mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Selective GHRP for clean pulse amplification.',
        biochemicalCharacteristics: 'Ipamorelin provides selective GH release without cortisol/prolactin perturbation. Research demonstrates preserved somatostatin sensitivity allowing natural pulse termination. The peptide lowers somatotroph activation threshold during Mod GRF priming phase. Studies show maintained feedback sensitivity for physiological GH pulse patterns.'
      },
      {
        name: 'GHRP-2',
        amount: '4mg',
        sequence: 'D-Ala-D-βNal-Ala-Trp-D-Phe-Lys-NH2',
        molecularWeight: '817.9 Da',
        description: 'Potent GHRP for strong pulse amplitude.',
        biochemicalCharacteristics: 'GHRP-2 provides potent GH pulse amplitude enhancement through strong calcium mobilization. Research shows efficient Gq/11 coupling maximizing GH vesicle exocytosis. The peptide complements selective Ipamorelin with more potent release profile. Studies indicate synergistic amplification when combined with GHRH-primed somatotrophs.'
      }
    ],
    researchApplications: [
      'Physiological pulsatile GH secretion research',
      'Maximum discrete pulse amplitude studies',
      'Nocturnal GH pattern mimicking research',
      'Somatostatin sensitivity and pulse termination',
      'Triple receptor transient activation studies',
      'Natural circadian GH rhythm investigation',
      'Sleep-related GH release research',
      'Discrete pulse kinetics and timing studies'
    ]
  },
  'fragment-176-191-cjc-1295-ipamorelin': {
    description_en: 'The Fragment 176-191, CJC-1295, and Ipamorelin blend combines a fat-metabolism peptide with GH-releasing peptides for comprehensive metabolic research examining lipolytic fragment effects alongside sustained GH-IGF-1 axis activation.',
    overview: 'This unique triple blend combines HGH Fragment 176-191 (the C-terminal lipolytic region of growth hormone) with CJC-1295 and Ipamorelin. Fragment 176-191 activates β3-adrenergic receptor-mediated lipolysis and hormone-sensitive lipase without affecting blood glucose, while the GH-releasing combination provides IGF-1 axis activation.',
    components: [
      {
        name: 'HGH Fragment 176-191',
        amount: '4mg',
        sequence: 'Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe',
        molecularWeight: '1817.1 Da',
        description: 'C-terminal fragment of HGH responsible for fat metabolism without affecting blood sugar.',
        biochemicalCharacteristics: 'HGH Fragment 176-191 represents the lipolytic region of growth hormone without anabolic or diabetogenic effects. Research demonstrates β3-adrenergic receptor activation triggering adenylate cyclase and PKA signaling in adipocytes. The peptide activates hormone-sensitive lipase (HSL) promoting triglyceride hydrolysis. Studies show no effect on IGF-1 levels or glucose metabolism. The fragment inhibits lipogenesis through ACC (acetyl-CoA carboxylase) phosphorylation while promoting fatty acid oxidation.'
      },
      {
        name: 'CJC-1295',
        amount: '4mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Extended-release GHRH analog for GH stimulation.',
        biochemicalCharacteristics: 'CJC-1295 provides sustained GHRH-R stimulation through DAC-albumin binding. Research shows continuous somatotroph priming and elevated IGF-1 production. The peptide maintains enhanced GH storage pools and secretory capacity. Studies demonstrate complementary metabolic effects with Fragment 176-191 through IGF-1-mediated pathways.'
      },
      {
        name: 'Ipamorelin',
        amount: '4mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Selective GH secretagogue for clean GH release.',
        biochemicalCharacteristics: 'Ipamorelin amplifies GH release without cortisol elevation that could counteract lipolytic effects. Research shows selective GHS-R1a activation preserving metabolic benefits. The peptide provides clean GH pulses without appetite stimulation that could interfere with fat loss research. Studies demonstrate synergistic metabolic effects when combined with sustained GHRH stimulation.'
      }
    ],
    researchApplications: [
      'Adipocyte β3-adrenergic receptor signaling research',
      'Hormone-sensitive lipase activation studies',
      'Lipogenesis inhibition and ACC phosphorylation',
      'Fragment 176-191 and IGF-1 axis interaction',
      'Triglyceride hydrolysis mechanism research',
      'Metabolic rate and energy expenditure studies',
      'Body composition optimization research',
      'Glucose-neutral fat metabolism investigation'
    ]
  },
  'fragment-176-191-mod-grf-ipamorelin': {
    description_en: 'The Fragment 176-191, Mod GRF, and Ipamorelin blend combines the HGH fat-burning fragment with pulsatile GH-releasing peptides for research into lipolytic effects alongside discrete physiological GH pulses.',
    overview: 'This triple combination pairs HGH Fragment 176-191 (activating adipocyte lipolysis through β3-adrenergic/HSL pathway) with Mod GRF 1-29 and Ipamorelin for research into fat metabolism with discrete pulsatile GH release patterns rather than sustained elevation, more closely mimicking natural circadian metabolic rhythms.',
    components: [
      {
        name: 'HGH Fragment 176-191',
        amount: '4mg',
        sequence: 'Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe',
        molecularWeight: '1817.1 Da',
        description: 'Lipolytic HGH fragment for fat metabolism research.',
        biochemicalCharacteristics: 'HGH Fragment 176-191 activates adipocyte lipolysis through β3-adrenergic receptor-cAMP-PKA-HSL cascade. Research shows triglyceride breakdown without insulin resistance or glucose elevation. The peptide inhibits lipogenesis through AMPK activation and ACC inhibition. Studies demonstrate selective fat mobilization with preserved lean mass and no effect on serum IGF-1 levels.'
      },
      {
        name: 'Mod GRF 1-29',
        amount: '4mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Ala-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Short-acting GHRH for pulsatile release.',
        biochemicalCharacteristics: 'Mod GRF 1-29 provides discrete pulsatile GH stimulation with rapid clearance. Research shows transient somatotroph activation mimicking nocturnal GH secretion. The peptide allows natural pulse termination and metabolic cycling. Studies indicate pulsatile IGF-1 patterns more closely matching physiological fat metabolism rhythms.'
      },
      {
        name: 'Ipamorelin',
        amount: '4mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Selective GHRP for clean GH pulses.',
        biochemicalCharacteristics: 'Ipamorelin provides selective GH pulse amplification without appetite stimulation or cortisol elevation. Research demonstrates preserved metabolic benefits through clean GH release profile. The peptide maintains normal feedback sensitivity for physiological pulse patterns. Studies show no interference with Fragment 176-191 lipolytic effects.'
      }
    ],
    researchApplications: [
      'Pulsatile fat metabolism and circadian rhythm research',
      'β3-adrenergic/HSL lipolytic pathway studies',
      'AMPK activation and lipogenesis inhibition',
      'Physiological GH pulse and metabolic cycling',
      'Body recomposition mechanism research',
      'Discrete pulse kinetics and fat mobilization',
      'Glucose-neutral metabolic modulation studies',
      'Nocturnal GH pattern and fat oxidation research'
    ]
  },
  'tesamorelin-cjc-1295-ipamorelin': {
    description_en: 'The Tesamorelin, CJC-1295, and Ipamorelin triple blend combines two GHRH analogs with a selective GH secretagogue for maximum GH axis stimulation through dual GHRH-R activation providing enhanced pituitary priming for comprehensive metabolic and body composition research.',
    overview: 'This premium triple combination combines Tesamorelin (44-amino acid GHRH with documented visceral fat effects) with CJC-1295 (sustained-release GHRH) and Ipamorelin. The dual GHRH approach provides enhanced pituitary receptor saturation and sustained somatotroph priming for maximum GH axis activation research.',
    components: [
      {
        name: 'Tesamorelin',
        amount: '4mg',
        sequence: 'Trans-3-hexenoic acid-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2',
        molecularWeight: '5135.9 Da',
        description: '44-amino acid GHRH analog studied for visceral fat reduction.',
        biochemicalCharacteristics: 'Tesamorelin is the full-length GHRH(1-44) sequence with trans-3-hexenoic acid modification. Research demonstrates preferential visceral adipose tissue reduction through GH-mediated HSL activation. The peptide increases adiponectin and improves lipid profiles. Studies show activation of hepatic IGF-1 production through JAK2/STAT5 pathway. The full-length sequence may provide additional receptor interactions compared to truncated analogs.'
      },
      {
        name: 'CJC-1295',
        amount: '4mg',
        sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
        molecularWeight: '3367.9 Da',
        description: 'Extended-release GHRH analog for sustained stimulation.',
        biochemicalCharacteristics: 'CJC-1295 provides sustained baseline GHRH-R occupation through DAC-albumin conjugation. Research shows continuous cAMP elevation and somatotroph priming. The peptide enhances GH storage pools and maintains elevated secretory capacity. Studies demonstrate complementary kinetics with Tesamorelin for comprehensive GHRH-R activation.'
      },
      {
        name: 'Ipamorelin',
        amount: '4mg',
        sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
        molecularWeight: '711.9 Da',
        description: 'Selective GH secretagogue for clean amplification.',
        biochemicalCharacteristics: 'Ipamorelin provides selective GHS-R1a activation to amplify dual GHRH priming effects. Research shows clean GH release without HPA axis perturbation that could counteract metabolic benefits. The peptide demonstrates synergistic effects when combined with sustained GHRH-R activation. Studies indicate enhanced GH pulse amplitude on top of elevated baseline from dual GHRH approach.'
      }
    ],
    researchApplications: [
      'Dual GHRH analog receptor saturation studies',
      'Maximum pituitary GHRH-R activation research',
      'Visceral adipose tissue and lipid metabolism',
      'Full-length vs truncated GHRH comparison',
      'Adiponectin and adipokine modulation research',
      'JAK2/STAT5 hepatic IGF-1 signaling studies',
      'Comprehensive body composition optimization',
      'Premium anti-aging and metabolic research'
    ]
  }
};

// Peptide information database for detailed info
const peptideInfo: Record<string, {
  description_en: string;
  overview?: string;
  sequence?: string;
  molecularWeight?: string;
  biochemicalCharacteristics?: string;
  researchApplications: string[];
}> = {
  'bpc-157': {
    description_en: 'BPC-157 is a synthetic pentadecapeptide composed of 15 amino acids. It is a partial sequence of body protection compound (BPC) found in human gastric juice. BPC-157 has been extensively studied in research settings for its potential protective effects on the gastrointestinal tract and wound healing properties.',
    overview: 'BPC-157 (Body Protection Compound-157) is a stable gastric pentadecapeptide derived from human gastric juice protein. Research indicates significant cytoprotective and regenerative properties across multiple organ systems. The peptide demonstrates remarkable stability in physiological conditions, resisting hydrolysis and maintaining bioactivity. Studies suggest involvement in growth factor modulation, nitric oxide system regulation, and neurotransmitter pathway interactions.',
    sequence: 'Gly-Glu-Pro-Pro-Pro-Gly-Lys-Pro-Ala-Asp-Asp-Ala-Gly-Leu-Val',
    molecularWeight: '1419.5 Da',
    biochemicalCharacteristics: 'BPC-157 is a stable gastric pentadecapeptide demonstrating resistance to enzymatic hydrolysis in gastric juice conditions. Research indicates modulation of the nitric oxide (NO) system through eNOS and iNOS expression regulation, affecting vasodilation and tissue perfusion. The peptide influences VEGF-A and VEGFR-2 expression, promoting angiogenic processes and neovascularization. Studies show activation of FAK-paxillin-Akt pathway affecting cellular adhesion, migration, and survival signaling. Research demonstrates interaction with dopaminergic, serotonergic, and GABAergic neurotransmitter systems. The peptide promotes growth hormone receptor expression and EGF receptor transactivation. Studies indicate protective effects through upregulation of GAB2 and JAK2 signaling components.',
    researchApplications: [
      'Nitric oxide (NO) system and eNOS/iNOS pathway modulation',
      'VEGF-A/VEGFR-2 signaling and angiogenesis research',
      'FAK-paxillin-Akt cellular adhesion and survival signaling',
      'Dopaminergic and serotonergic neurotransmitter interactions',
      'Growth hormone receptor expression modulation',
      'Gastrointestinal mucosal integrity and cytoprotection',
      'Musculoskeletal tissue repair mechanism studies',
      'EGF receptor transactivation and wound healing'
    ]
  },
  'tb-500': {
    description_en: 'TB-500 is a synthetic version of Thymosin Beta-4, a naturally occurring 43-amino acid peptide present in most tissues and cell types. It plays a significant role in tissue repair, cell migration, and angiogenesis research.',
    overview: 'TB-500 (Thymosin Beta-4) is a highly conserved, naturally occurring peptide found ubiquitously in most tissues and cell types. As a major G-actin sequestering protein, it plays fundamental roles in cytoskeletal organization, cell motility, and tissue repair. Research demonstrates involvement in wound healing, angiogenesis, and anti-inflammatory processes through multiple signaling pathways.',
    sequence: 'LKKTETQ (active region)',
    molecularWeight: '4963 Da',
    biochemicalCharacteristics: 'TB-500 (Thymosin Beta-4) is a 43-amino acid G-actin sequestering protein containing the central LKKTETQ motif essential for actin binding and polymerization regulation. Research demonstrates promotion of endothelial cell migration and differentiation through PI3K/Akt signaling cascade activation. The peptide modulates inflammatory responses via inhibition of NF-κB nuclear translocation, reducing pro-inflammatory cytokine expression. Studies show upregulation of matrix metalloproteinases (MMP-2, MMP-9) facilitating ECM remodeling for cellular migration. Research indicates activation of Integrin-Linked Kinase (ILK) promoting cardiac and vascular protection. The peptide promotes HIF-1α stabilization under hypoxic conditions and PDGF receptor activation for fibroblast recruitment. Studies demonstrate stem cell differentiation promotion and activation of Notch signaling pathway.',
    researchApplications: [
      'G-actin sequestration and cytoskeletal dynamics research',
      'PI3K/Akt endothelial cell signaling studies',
      'NF-κB pathway inhibition and anti-inflammatory mechanisms',
      'MMP-2/MMP-9 matrix remodeling research',
      'Integrin-Linked Kinase (ILK) cardiac protection studies',
      'HIF-1α hypoxic response and angiogenesis research',
      'PDGF receptor fibroblast recruitment studies',
      'Stem cell differentiation and tissue regeneration'
    ]
  },
  'ipamorelin': {
    description_en: 'Ipamorelin is a pentapeptide and growth hormone secretagogue (GHS). It is a selective agonist of the ghrelin/growth hormone secretagogue receptor and stimulates growth hormone release in a highly specific manner with minimal effect on cortisol and prolactin levels.',
    overview: 'Ipamorelin is distinguished by its remarkable selectivity for growth hormone release without significantly affecting other pituitary hormones. Unlike other GH secretagogues, it demonstrates minimal impact on ACTH, cortisol, and prolactin levels, making it valuable for studying isolated GH pathway effects in research settings.',
    sequence: 'Aib-His-D-2-Nal-D-Phe-Lys-NH2',
    molecularWeight: '711.9 Da',
    biochemicalCharacteristics: 'Ipamorelin is a highly selective GHS-R1a (ghrelin receptor) agonist demonstrating unique selectivity profile among growth hormone secretagogues. The Aib (α-aminoisobutyric acid) N-terminus provides proteolytic resistance and enhanced stability. Research demonstrates specific Gq/11 protein coupling triggering PLC-β activation and IP3-mediated calcium release from intracellular stores. Unlike other GHRPs, it shows no significant activation of ACTH/cortisol axis or prolactin release, indicating specific somatotroph targeting. The peptide potentiates GHRH-induced GH release by lowering somatotroph activation threshold. Studies indicate preserved hypothalamic-pituitary feedback sensitivity and absence of GH receptor desensitization with repeated dosing. Research shows maintained pituitary responsiveness through preserved somatostatin inhibitory mechanisms.',
    researchApplications: [
      'Selective GHS-R1a receptor signaling research',
      'Gq/11 and PLC-β/IP3 pathway studies',
      'Somatotroph-specific activation mechanisms',
      'HPA axis preservation and selectivity studies',
      'GH receptor desensitization resistance research',
      'Hypothalamic-pituitary feedback preservation',
      'IGF-1 axis modulation without cortisol elevation',
      'Age-related somatopause and GH decline research'
    ]
  },
  'cjc-1295': {
    description_en: 'CJC-1295 is a synthetic analog of growth hormone-releasing hormone (GHRH) consisting of 30 amino acids. It has been modified to resist enzymatic degradation and extend its half-life, making it valuable for research into growth hormone secretion.',
    overview: 'CJC-1295 is a modified GHRH(1-29) analog featuring Drug Affinity Complex (DAC) technology enabling covalent binding to serum albumin. This modification extends plasma half-life from minutes to 6-8 days, providing sustained somatotroph stimulation and continuous GH axis activation for extended research protocols.',
    sequence: 'Tyr-D-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-NH2',
    molecularWeight: '3367.9 Da',
    biochemicalCharacteristics: 'CJC-1295 is a synthetic GHRH(1-29) analog with four amino acid substitutions (D-Ala2, Gln8, Ala15, Leu27) providing proteolytic resistance to DPP-IV enzyme degradation. The DAC modification enables covalent binding to serum albumin via reactive maleimide group, extending half-life from minutes to 6-8 days. Research shows activation of adenylate cyclase via GHRH receptor (class B GPCR) binding, increasing intracellular cAMP and PKA phosphorylation. PKA phosphorylates CREB transcription factor, upregulating GH gene expression. Studies demonstrate L-type voltage-gated calcium channel activation causing calcium influx and GH vesicle exocytosis. Research indicates sustained IGF-1 hepatic production through JAK2/STAT5 pathway activation. The extended half-life maintains elevated GH storage pools and enhanced somatotroph sensitivity to subsequent secretagogue stimulation.',
    researchApplications: [
      'GHRH receptor (class B GPCR) signaling research',
      'Adenylate cyclase/cAMP/PKA pathway studies',
      'CREB-mediated GH gene transcription research',
      'L-type calcium channel and vesicle exocytosis',
      'JAK2/STAT5 hepatic IGF-1 signaling',
      'Extended half-life pharmacokinetics research',
      'Sustained somatotroph priming mechanisms',
      'DAC bioconjugation technology studies'
    ]
  },
  'melanotan': {
    description_en: 'Melanotan II is a synthetic analog of alpha-melanocyte stimulating hormone (α-MSH). It is a cyclic lactam heptapeptide that has been studied for its effects on the melanocortin system.',
    overview: 'Melanotan II (MT-II) is a synthetic cyclic lactam analog of α-melanocyte stimulating hormone (α-MSH) with enhanced metabolic stability and receptor binding affinity. The cyclic structure provides resistance to enzymatic degradation while maintaining potent melanocortin receptor activation. Research demonstrates broad melanocortin receptor activity with effects on pigmentation, appetite, and behavior.',
    sequence: 'Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2',
    molecularWeight: '1024.2 Da',
    biochemicalCharacteristics: 'Melanotan II is a cyclic heptapeptide featuring Nle4 substitution (norleucine replacing methionine) and D-Phe7 providing enhanced stability and receptor selectivity. Research demonstrates high-affinity binding to MC1R, MC3R, MC4R, and MC5R melanocortin receptors. MC1R activation in melanocytes triggers cAMP/PKA cascade, phosphorylating CREB and MITF transcription factors to upregulate tyrosinase expression and melanin synthesis. MC4R hypothalamic activation modulates appetite through POMC/AgRP neuronal circuits and influences sexual behavior via oxytocin pathway engagement. Studies indicate activation of ERK1/2 MAPK signaling contributing to cellular proliferation responses. The cyclic lactam structure between Asp and Lys residues provides proteolytic resistance and extended biological half-life.',
    researchApplications: [
      'MC1R/MC3R/MC4R/MC5R melanocortin receptor signaling research',
      'cAMP/PKA/CREB melanocyte signaling pathway studies',
      'MITF and tyrosinase gene expression regulation',
      'Hypothalamic POMC/AgRP appetite circuit research',
      'Oxytocin pathway and behavioral modulation studies',
      'ERK1/2 MAPK proliferation signaling research',
      'UV photoprotection and melanogenesis studies',
      'Cyclic peptide stability and pharmacokinetics'
    ]
  },
  'pt-141': {
    description_en: 'PT-141 (Bremelanotide) is a synthetic peptide analog of alpha-melanocyte stimulating hormone (α-MSH). It is a melanocortin receptor agonist that has been studied for its effects on the central nervous system.',
    overview: 'PT-141 (Bremelanotide) is a cyclic heptapeptide derived from Melanotan II, optimized for central nervous system activity. Unlike phosphodiesterase inhibitors, it acts through melanocortin receptor activation in the brain, representing a unique mechanism for behavioral and arousal research. The peptide demonstrates selective MC3R/MC4R agonism with minimal peripheral melanogenic effects.',
    sequence: 'Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-OH',
    molecularWeight: '1025.2 Da',
    biochemicalCharacteristics: 'PT-141 (Bremelanotide) differs from Melanotan II by a C-terminal carboxylic acid (-OH) instead of amide (-NH2), reducing melanogenic activity while preserving CNS effects. Research demonstrates preferential MC4R and MC3R activation in hypothalamic regions. MC4R activation in paraventricular nucleus triggers oxytocin release through Gq protein coupling and PLC-β/IP3/DAG second messenger cascade. Studies show dopaminergic pathway modulation through mesolimbic circuit activation affecting motivation and reward. The peptide crosses blood-brain barrier via receptor-mediated transcytosis. Research indicates activation of POMC-expressing neurons in arcuate nucleus influencing autonomic arousal responses. Unlike PDE5 inhibitors, mechanism involves central initiation of arousal pathways independent of peripheral vasodilation.',
    researchApplications: [
      'MC3R/MC4R central nervous system signaling research',
      'Oxytocin release and paraventricular nucleus studies',
      'Gq/PLC-β/IP3/DAG second messenger cascade research',
      'Dopaminergic mesolimbic reward circuit studies',
      'Blood-brain barrier peptide transport research',
      'POMC neuron activation and autonomic response',
      'Central arousal pathway mechanisms vs peripheral',
      'Neuroendocrine behavioral modulation studies'
    ]
  },
  'sermorelin': {
    description_en: 'Sermorelin is a synthetic peptide analog of growth hormone-releasing hormone (GHRH) containing the first 29 amino acids of the full 44-amino acid sequence. It stimulates the pituitary gland to produce and release growth hormone.',
    overview: 'Sermorelin (GRF 1-29) represents the biologically active N-terminal fragment of native GHRH, containing the first 29 amino acids essential for full receptor activation. It stimulates physiological GH secretion patterns, preserving pulsatile release and maintaining negative feedback mechanisms. Research indicates restoration of youthful GH axis function without receptor desensitization.',
    sequence: 'Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Leu-Ser-Arg-NH2',
    molecularWeight: '3357.9 Da',
    biochemicalCharacteristics: 'Sermorelin (GRF 1-29 NH2) contains the full biological activity of native 44-amino acid GHRH in its N-terminal 29 residues. Tyr1 is essential for receptor binding while positions 1-27 determine biological activity. Research demonstrates GHRH receptor (class B GPCR) activation triggering Gs protein coupling and adenylate cyclase stimulation. Resultant cAMP accumulation activates PKA, phosphorylating L-type calcium channels and increasing calcium influx for GH vesicle exocytosis. Studies show CREB phosphorylation upregulating GH gene transcription for sustained hormone production. Unlike exogenous GH, sermorelin maintains hypothalamic-pituitary feedback sensitivity and somatostatin inhibitory tone. Research indicates restoration of pulsatile GH release patterns and enhancement of slow-wave sleep-associated GH secretion.',
    researchApplications: [
      'GHRH receptor (class B GPCR) activation research',
      'Gs/adenylate cyclase/cAMP/PKA signaling cascade',
      'L-type calcium channel phosphorylation and GH exocytosis',
      'CREB-mediated GH gene transcription studies',
      'Pulsatile GH secretion pattern restoration',
      'Hypothalamic-pituitary feedback preservation research',
      'Sleep architecture and nocturnal GH release studies',
      'Age-related somatopause and GH axis restoration'
    ]
  },
  'ghrp-6': {
    description_en: 'GHRP-6 (Growth Hormone Releasing Peptide-6) is a synthetic hexapeptide that stimulates growth hormone secretion through the ghrelin receptor. It is one of the first synthetic growth hormone secretagogues to be developed.',
    overview: 'GHRP-6 is a first-generation synthetic hexapeptide GH secretagogue acting primarily through the ghrelin/GHS-R1a receptor. It demonstrates potent GH release combined with notable appetite stimulation and cortisol/prolactin co-release. Research indicates synergistic effects when combined with GHRH analogs for enhanced somatotroph activation.',
    sequence: 'His-D-Trp-Ala-Trp-D-Phe-Lys-NH2',
    molecularWeight: '873.0 Da',
    biochemicalCharacteristics: 'GHRP-6 is a synthetic hexapeptide containing D-Trp2 and D-Phe5 providing proteolytic resistance and GHS-R1a selectivity. Research demonstrates potent ghrelin receptor (GHS-R1a) agonism triggering Gq/11 protein activation and PLC-β signaling. IP3-mediated calcium release from endoplasmic reticulum stores triggers GH vesicle exocytosis. Unlike selective GHRPs, GHRP-6 causes moderate ACTH/cortisol and prolactin release indicating broader pituitary activation. Studies show potent appetite stimulation through hypothalamic NPY/AgRP neuron activation and ghrelin mimetic effects. Research demonstrates cardioprotective signaling through PI3K/Akt pathway activation in cardiomyocytes. The peptide synergizes with GHRH by lowering somatotroph activation threshold and amplifying calcium signaling.',
    researchApplications: [
      'GHS-R1a ghrelin receptor signaling research',
      'Gq/11/PLC-β/IP3 calcium mobilization studies',
      'ACTH/cortisol and prolactin co-release mechanisms',
      'Hypothalamic NPY/AgRP appetite circuit activation',
      'PI3K/Akt cardioprotective signaling research',
      'GHRP-GHRH synergistic somatotroph activation',
      'Ghrelin mimetic metabolic effects studies',
      'First-generation GHS pharmacology research'
    ]
  },
  'ghrp-2': {
    description_en: 'GHRP-2 (Growth Hormone Releasing Peptide-2) is a synthetic hexapeptide growth hormone secretagogue. It is considered more potent than GHRP-6 and has been studied for its effects on growth hormone release.',
    overview: 'GHRP-2 (Pralmorelin) is considered the most potent of the classical hexapeptide GH secretagogues, demonstrating superior GH release with reduced appetite stimulation compared to GHRP-6. The D-βNal substitution provides enhanced receptor binding affinity and improved selectivity profile for somatotroph-specific activation.',
    sequence: 'D-Ala-D-βNal-Ala-Trp-D-Phe-Lys-NH2',
    molecularWeight: '817.9 Da',
    biochemicalCharacteristics: 'GHRP-2 features D-Ala1 and unique D-β-naphthylalanine (D-βNal) at position 2, conferring superior GHS-R1a binding affinity compared to other GHRPs. Research demonstrates the highest GH release potency among hexapeptide GHRPs through optimized receptor-ligand interaction. Gq/11 protein coupling triggers robust PLC-β activation and IP3-mediated calcium mobilization. Studies show reduced but present cortisol and prolactin stimulation (less than GHRP-6), indicating improved selectivity. The peptide demonstrates minimal appetite stimulation due to reduced hypothalamic NPY activation compared to GHRP-6. Research indicates potent synergy with GHRH analogs through complementary signaling pathway activation. Studies show preservation of pituitary GH responsiveness with sustained dosing, avoiding receptor desensitization.',
    researchApplications: [
      'High-potency GHS-R1a receptor activation research',
      'D-β-naphthylalanine structure-activity relationships',
      'Optimized Gq/11/PLC-β signaling studies',
      'Selective somatotroph activation mechanisms',
      'Reduced NPY-mediated appetite response research',
      'GHRP-2/GHRH synergistic protocol studies',
      'GH axis desensitization resistance research',
      'Comparative GHRP potency and selectivity studies'
    ]
  },
  'hexarelin': {
    description_en: 'Hexarelin is a synthetic hexapeptide growth hormone secretagogue. It is one of the most potent synthetic growth hormone releasing peptides and has been extensively studied for cardiovascular protective effects.',
    overview: 'Hexarelin is distinguished by unique cardioprotective properties independent of GH release, acting through both GHS-R1a and cardiac-specific receptors. It demonstrates the strongest GH-releasing potency among hexapeptide GHRPs while also activating protective signaling in cardiomyocytes. Research indicates direct cardiac effects through non-GHS-R1a binding sites.',
    sequence: 'His-D-2-methyl-Trp-Ala-Trp-D-Phe-Lys-NH2',
    molecularWeight: '887.0 Da',
    biochemicalCharacteristics: 'Hexarelin features D-2-methyl-Trp at position 2, providing enhanced receptor binding and unique cardiovascular signaling properties. Research demonstrates dual receptor activation: GHS-R1a for GH release and cardiac-specific CD36 scavenger receptor. GHS-R1a activation triggers potent Gq/11/PLC-β/IP3 signaling for robust GH secretion. CD36 binding in cardiomyocytes activates PI3K/Akt/eNOS cardioprotective cascade independent of GH. Studies show reduction of cardiomyocyte apoptosis through Bcl-2 upregulation and caspase-3 inhibition. Research indicates ERK1/2 MAPK activation promoting cellular survival and preventing ischemia-reperfusion injury. The peptide demonstrates coronary vasodilation through eNOS-derived nitric oxide production.',
    researchApplications: [
      'Dual GHS-R1a and CD36 receptor signaling research',
      'PI3K/Akt/eNOS cardioprotective pathway studies',
      'Bcl-2/caspase-3 apoptosis modulation research',
      'ERK1/2 MAPK cardiac survival signaling',
      'Ischemia-reperfusion injury protection studies',
      'Coronary vasodilation and eNOS activation',
      'GH-independent cardioprotection mechanisms',
      'High-potency GHRP comparative studies'
    ]
  },
  'tesamorelin': {
    description_en: 'Tesamorelin is a synthetic analog of human growth hormone-releasing factor (GRF). It is a 44-amino acid peptide that stimulates the synthesis and pulsatile release of endogenous growth hormone.',
    overview: 'Tesamorelin is the full-length 44-amino acid GHRH analog with trans-3-hexenoic acid modification providing enhanced stability. It represents the complete native GHRH sequence with improved pharmacokinetics. Research demonstrates sustained physiological GH release patterns and has been extensively studied for visceral adipose tissue reduction.',
    sequence: 'Trans-3-hexenoic acid-Tyr-Ala-Asp-Ala-Ile-Phe-Thr-Asn-Ser-Tyr-Arg-Lys-Val-Leu-Gly-Gln-Leu-Ser-Ala-Arg-Lys-Leu-Leu-Gln-Asp-Ile-Met-Ser-Arg-Gln-Gln-Gly-Glu-Ser-Asn-Gln-Glu-Arg-Gly-Ala-Arg-Ala-Arg-Leu-NH2',
    molecularWeight: '5135.9 Da',
    biochemicalCharacteristics: 'Tesamorelin features trans-3-hexenoic acid N-terminal modification providing DPP-IV resistance and extended half-life compared to native GHRH. Full 44-amino acid sequence maintains complete receptor binding epitope and biological activity. Research demonstrates GHRH receptor activation triggering Gs/adenylate cyclase/cAMP/PKA signaling cascade. Studies show specific reduction of visceral adipose tissue through GH-mediated lipolysis activation via β-adrenergic receptor sensitization and hormone-sensitive lipase (HSL) phosphorylation. Research indicates preferential visceral fat reduction through enhanced adipocyte cAMP/PKA signaling. IGF-1 elevation promotes hepatic lipid oxidation through PPARα pathway activation. Studies demonstrate cognitive benefits through IGF-1-mediated neuronal survival and synaptic plasticity enhancement.',
    researchApplications: [
      'Full-length GHRH receptor activation research',
      'Trans-3-hexenoic acid stability modification studies',
      'Visceral adipose tissue lipolysis mechanisms',
      'Hormone-sensitive lipase (HSL) activation research',
      'β-adrenergic receptor sensitization studies',
      'PPARα-mediated hepatic lipid oxidation',
      'IGF-1 cognitive and neuroprotective effects',
      'GH pulsatility and metabolic syndrome research'
    ]
  },
  'aod-9604': {
    description_en: 'AOD-9604 is a modified fragment of human growth hormone comprising amino acids 177-191. It has been studied for its potential effects on fat metabolism without affecting blood sugar or tissue growth.',
    overview: 'AOD-9604 is the C-terminal fragment (amino acids 177-191) of human growth hormone, retaining lipolytic activity without effects on IGF-1 or glucose metabolism. The disulfide-bridged structure mimics the fat-reducing region of GH. Research demonstrates specific metabolic effects without anabolic or diabetogenic properties.',
    sequence: 'Tyr-Leu-Arg-Ile-Val-Gln-Cys-Arg-Ser-Val-Glu-Gly-Ser-Cys-Gly-Phe',
    molecularWeight: '1815.1 Da',
    biochemicalCharacteristics: 'AOD-9604 comprises GH fragment 177-191 with Cys182-Cys189 disulfide bridge mimicking native GH C-terminal loop conformation. Research demonstrates β3-adrenergic receptor (β3-AR) activation promoting adipocyte-specific lipolysis through cAMP/PKA/HSL pathway. Studies show inhibition of lipogenic enzymes including fatty acid synthase (FAS) and acetyl-CoA carboxylase (ACC). The fragment lacks IGF-1 stimulating activity, avoiding anabolic effects on non-adipose tissues. Research indicates no effect on glucose homeostasis or insulin sensitivity, unlike full GH. Studies demonstrate chondrocyte proliferation stimulation and proteoglycan synthesis through unique receptor interactions. The peptide activates peroxisomal β-oxidation promoting fatty acid catabolism.',
    researchApplications: [
      'β3-adrenergic receptor lipolysis research',
      'cAMP/PKA/HSL adipocyte signaling studies',
      'FAS and ACC lipogenic enzyme inhibition',
      'GH fragment structure-activity relationships',
      'IGF-1-independent metabolic effects research',
      'Glucose-neutral fat metabolism studies',
      'Chondrocyte proliferation and cartilage repair',
      'Peroxisomal β-oxidation activation research'
    ]
  },
  'igf-1': {
    description_en: 'IGF-1 (Insulin-like Growth Factor 1) is a hormone with a molecular structure similar to insulin. It plays an important role in childhood growth and continues to have anabolic effects in adults.',
    overview: 'IGF-1 (Somatomedin C) is the primary mediator of growth hormone effects, a 70-amino acid single-chain polypeptide with ~50% structural homology to insulin. Produced primarily in the liver in response to GH, it circulates bound to IGF-binding proteins (IGFBPs). Research demonstrates critical roles in growth, metabolism, and tissue maintenance throughout life.',
    sequence: '70 amino acids with 3 disulfide bridges',
    molecularWeight: '7649 Da',
    biochemicalCharacteristics: 'IGF-1 is a 70-amino acid polypeptide with three intramolecular disulfide bonds maintaining tertiary structure essential for receptor binding. Research demonstrates high-affinity IGF-1R (receptor tyrosine kinase) binding triggering autophosphorylation and IRS-1/2 docking protein recruitment. PI3K/Akt pathway activation promotes protein synthesis through mTORC1/S6K1/4E-BP1 cascade and inhibits proteolysis via FoxO transcription factor suppression. MAPK/ERK pathway activation stimulates cellular proliferation and differentiation. Studies show satellite cell activation and myoblast proliferation through autocrine/paracrine signaling. The peptide circulates bound to IGFBP-3 and acid-labile subunit (ALS), extending half-life from minutes to hours. Research indicates neuroprotective effects through PI3K/Akt-mediated Bcl-2 upregulation and caspase inhibition.',
    researchApplications: [
      'IGF-1R tyrosine kinase signaling research',
      'PI3K/Akt/mTORC1/S6K1 anabolic cascade studies',
      'FoxO transcription factor and proteolysis inhibition',
      'MAPK/ERK proliferation pathway research',
      'Satellite cell and myoblast activation studies',
      'IGFBP-3/ALS pharmacokinetic modulation',
      'Neuronal PI3K/Akt survival signaling',
      'GH-IGF-1 axis and somatotroph feedback research'
    ]
  },
  'mgf': {
    description_en: 'MGF (Mechano Growth Factor) is a splice variant of IGF-1 that is produced in response to mechanical stress. It has been studied for its potential role in muscle repair and growth.',
    overview: 'MGF (Mechano Growth Factor) is a unique splice variant of IGF-1 expressed specifically in response to mechanical stress in muscle tissue. Unlike systemic IGF-1Ea, MGF contains a distinct C-terminal E-peptide that enables autocrine/paracrine signaling. Research demonstrates preferential satellite cell activation over myocyte differentiation.',
    sequence: 'Tyr-Gln-Pro-Pro-Ser-Thr-Asn-Lys-Asn-Thr-Lys-Ser-Gln-Arg-Arg-Lys-Gly-Ser-Thr-Phe-Glu-Glu-Arg-Lys',
    molecularWeight: '2888 Da',
    biochemicalCharacteristics: 'MGF is an alternative splice variant of IGF-1 gene containing unique 24-amino acid E-peptide C-terminus not found in systemic IGF-1Ea. Research demonstrates expression specifically in mechanically loaded muscle through alternative exon 5 splicing. The unique E-peptide enables satellite cell activation independent of IGF-1R, likely through unique receptor binding. Studies show proliferative signaling through ERK1/2 MAPK pathway activation without immediate differentiation promotion. MGF maintains satellite cells in proliferative state, expanding the progenitor pool before differentiation. Research indicates rapid local expression (4-24 hours post-exercise) followed by conversion to IGF-1Ea for differentiation signaling. Studies demonstrate neuroprotective properties through unique receptor interactions in CNS tissue.',
    researchApplications: [
      'IGF-1 alternative splicing and exon 5 research',
      'Satellite cell proliferation vs differentiation signaling',
      'E-peptide unique receptor binding studies',
      'ERK1/2 MAPK proliferative pathway research',
      'Mechanotransduction and muscle adaptation studies',
      'Local autocrine/paracrine growth factor signaling',
      'Exercise-induced gene expression research',
      'MGF-to-IGF-1Ea temporal conversion mechanisms'
    ]
  },
  'epithalon': {
    description_en: 'Epithalon (also known as Epitalon) is a synthetic tetrapeptide that has been studied for its potential effects on telomerase activation and anti-aging properties.',
    overview: 'Epithalon (Epitalon/Epithalone) is a synthetic tetrapeptide based on the pineal gland peptide Epithalamin. It is one of the few compounds demonstrated to activate telomerase in somatic cells. Research focuses on its potential to extend replicative capacity of cells and influence circadian melatonin production.',
    sequence: 'Ala-Glu-Asp-Gly',
    molecularWeight: '390.4 Da',
    biochemicalCharacteristics: 'Epithalon is a synthetic tetrapeptide mimicking the natural pineal gland extract Epithalamin. Research demonstrates activation of telomerase reverse transcriptase (hTERT) gene expression through promoter activation. Telomerase catalyzes TTAGGG repeat addition to chromosome ends, preventing replicative senescence. Studies show restoration of melatonin synthesis rhythm in aging pineal gland through tryptophan hydroxylase and AANAT enzyme modulation. Research indicates activation of antioxidant defense systems including SOD, catalase, and glutathione peroxidase. The peptide demonstrates chromatin decondensation and heterochromatin reduction in senescent cells. Studies show normalization of circadian cortisol patterns and restoration of diurnal hormone rhythms.',
    researchApplications: [
      'hTERT telomerase gene activation research',
      'Telomere elongation and replicative senescence',
      'Pineal gland melatonin synthesis restoration',
      'Tryptophan hydroxylase/AANAT pathway studies',
      'SOD/catalase/glutathione antioxidant activation',
      'Chromatin structure and heterochromatin research',
      'Circadian rhythm and hormone normalization',
      'Cellular aging and longevity pathway studies'
    ]
  },
  'thymosin': {
    description_en: 'Thymosin Alpha-1 is a 28-amino acid peptide that was originally isolated from thymus tissue. It has been studied for its immunomodulatory properties and effects on T-cell function.',
    overview: 'Thymosin Alpha-1 (Tα1) is an N-terminally acetylated acidic peptide originally isolated from thymic tissue. It functions as a critical immunomodulator affecting both innate and adaptive immunity. Research demonstrates enhancement of T-cell function, dendritic cell maturation, and NK cell activity without overstimulation of inflammatory responses.',
    sequence: 'Ac-Ser-Asp-Ala-Ala-Val-Asp-Thr-Ser-Ser-Glu-Ile-Thr-Thr-Lys-Asp-Leu-Lys-Glu-Lys-Lys-Glu-Val-Val-Glu-Glu-Ala-Glu-Asn',
    molecularWeight: '3108 Da',
    biochemicalCharacteristics: 'Thymosin Alpha-1 is a 28-amino acid N-acetylated peptide with acidic isoelectric point (pI 4.2). Research demonstrates activation of Toll-like receptor (TLR) 9 signaling in dendritic cells, triggering MyD88/NF-κB pathway for cytokine production. Studies show enhancement of MHC class I and II expression increasing antigen presentation efficiency. The peptide promotes CD4+ T-helper cell differentiation toward Th1 phenotype through IL-12 and IFN-γ induction. Research indicates augmentation of NK cell cytotoxicity through NKG2D receptor upregulation. Studies demonstrate modulation of regulatory T-cell (Treg) function preventing excessive immunosuppression. The peptide enhances dendritic cell maturation through CD80/CD86 costimulatory molecule upregulation.',
    researchApplications: [
      'TLR9/MyD88/NF-κB dendritic cell signaling',
      'MHC class I/II antigen presentation enhancement',
      'Th1 differentiation and IFN-γ production research',
      'NK cell NKG2D cytotoxicity augmentation',
      'Regulatory T-cell modulation studies',
      'CD80/CD86 dendritic cell maturation research',
      'Innate-adaptive immunity bridge mechanisms',
      'Immunosenescence and thymic involution studies'
    ]
  },
  'ghk-cu': {
    description_en: 'GHK-Cu (Copper Peptide) is a naturally occurring tripeptide with a strong affinity for copper ions. It has been extensively studied for its effects on skin remodeling and wound healing.',
    overview: 'GHK-Cu is a naturally occurring copper-binding tripeptide found in human plasma, saliva, and urine. It functions as a copper delivery vehicle and gene modulator, affecting over 4,000 human genes. Research demonstrates remarkable tissue remodeling capabilities through coordinated ECM synthesis and degradation, anti-inflammatory signaling, and stem cell attraction.',
    sequence: 'Gly-His-Lys',
    molecularWeight: '340.4 Da (403.9 Da with Cu)',
    biochemicalCharacteristics: 'GHK-Cu forms a stable 1:1 complex with copper(II) through imidazole nitrogen of histidine and amino terminus coordination. The copper center enables redox cycling essential for lysyl oxidase and other copper-dependent enzyme activities. Research demonstrates upregulation of collagen I, III, and IV synthesis while simultaneously inducing MMP-2 controlled degradation for ECM remodeling. Studies show activation of TGF-β superfamily signaling promoting fibroblast differentiation and ECM production. The peptide demonstrates potent anti-inflammatory effects through IL-6 and TNF-α suppression. Research indicates stimulation of glycosaminoglycan (GAG) synthesis including decorin and dermatan sulfate. Studies show attraction of mast cells and mesenchymal stem cells to wound sites through chemotactic signaling. The peptide activates VEGF and FGF-2 expression promoting angiogenesis.',
    researchApplications: [
      'Copper(II) coordination chemistry and delivery',
      'Collagen I/III/IV synthesis and MMP-2 remodeling',
      'TGF-β superfamily signaling and fibroblast activation',
      'IL-6/TNF-α anti-inflammatory suppression',
      'Glycosaminoglycan and proteoglycan synthesis',
      'Mesenchymal stem cell chemotaxis research',
      'VEGF/FGF-2 angiogenesis promotion studies',
      'Gene expression modulation (4000+ genes) research'
    ]
  },
  'll-37': {
    description_en: 'LL-37 is the only human cathelicidin antimicrobial peptide. It is a 37-amino acid peptide with broad-spectrum antimicrobial activity and immunomodulatory properties.',
    overview: 'LL-37 (CAP-18/hCAP18) is the sole human cathelicidin antimicrobial peptide, processed from 18-kDa precursor by proteinase 3. It demonstrates broad-spectrum antimicrobial activity against bacteria, fungi, and enveloped viruses. Beyond direct microbicidal effects, LL-37 functions as a crucial immunomodulator bridging innate and adaptive immunity.',
    sequence: 'LLGDFFRKSKEKIGKEFKRIVQRIKDFLRNLVPRTES',
    molecularWeight: '4493.3 Da',
    biochemicalCharacteristics: 'LL-37 is a 37-residue amphipathic α-helical peptide with net +6 charge enabling membrane interactions. Research demonstrates direct antimicrobial activity through membrane permeabilization via carpet or toroidal pore mechanisms. The peptide binds LPS and neutralizes endotoxin activity, preventing septic shock pathway activation. Studies show chemotactic properties for neutrophils, monocytes, and T-cells through FPRL1 (formyl peptide receptor-like 1) activation. Research indicates angiogenesis promotion through FPRL1-mediated VEGF induction. The peptide demonstrates biofilm disruption through matrix penetration and quorum sensing interference. Studies show wound healing acceleration through keratinocyte migration stimulation via EGFR transactivation. Research indicates autophagy induction in infected cells enhancing intracellular pathogen clearance.',
    researchApplications: [
      'Membrane permeabilization and pore formation',
      'LPS binding and endotoxin neutralization',
      'FPRL1 chemotactic receptor signaling',
      'VEGF angiogenesis and wound healing research',
      'Biofilm disruption and quorum sensing',
      'EGFR transactivation and keratinocyte migration',
      'Autophagy induction and pathogen clearance',
      'Innate immunity antimicrobial peptide research'
    ]
  },
  'snap-8': {
    description_en: 'SNAP-8 (Acetyl Octapeptide-3) is a synthetic anti-wrinkle peptide that has been studied for its effects on muscle contraction and potential cosmetic applications.',
    overview: 'SNAP-8 (Acetyl Octapeptide-3) is an elongated analog of Argireline designed for enhanced SNARE complex modulation. It competitively inhibits formation of the protein complex required for neurotransmitter release at the neuromuscular junction. Research indicates improved efficacy over hexapeptide analogs through enhanced SNAP-25 mimicry.',
    sequence: 'Ac-Glu-Glu-Met-Gln-Arg-Arg-Ala-Asp-NH2',
    molecularWeight: '1075.2 Da',
    biochemicalCharacteristics: 'SNAP-8 is an octapeptide mimicking the N-terminal domain of SNAP-25 (synaptosomal-associated protein of 25 kDa). Research demonstrates competitive inhibition of SNARE complex assembly by interfering with SNAP-25/syntaxin/VAMP (synaptobrevin) tripartite interaction. The additional two amino acids (vs Argireline) provide improved binding affinity to the SNARE assembly site. Studies show reduced vesicle fusion efficiency at the neuromuscular junction without complete paralysis. The peptide modulates calcium-triggered exocytosis by destabilizing the four-helix bundle required for membrane fusion. Research indicates dose-dependent reduction in acetylcholine release, providing graduated muscle relaxation. Studies demonstrate improved stability and penetration compared to shorter analogs.',
    researchApplications: [
      'SNARE complex assembly inhibition research',
      'SNAP-25/syntaxin/VAMP interaction studies',
      'Neuromuscular junction modulation research',
      'Calcium-triggered exocytosis mechanisms',
      'Vesicle fusion and membrane dynamics',
      'Structure-activity relationship (SAR) studies',
      'Topical peptide penetration research',
      'Non-paralytic muscle relaxation mechanisms'
    ]
  },
  'argireline': {
    description_en: 'Argireline (Acetyl Hexapeptide-3) is a synthetic peptide that has been studied for its potential effects on reducing facial muscle contractions and the appearance of wrinkles.',
    overview: 'Argireline (Acetyl Hexapeptide-3) is the first commercially successful cosmetic peptide targeting neuromuscular signaling. It mimics the N-terminal sequence of SNAP-25 to modulate SNARE complex formation. Research demonstrates topical efficacy in reducing muscle contraction-associated skin folding without systemic neurotoxic effects.',
    sequence: 'Ac-Glu-Glu-Met-Gln-Arg-Arg-NH2',
    molecularWeight: '888.9 Da',
    biochemicalCharacteristics: 'Argireline is a hexapeptide sequence derived from SNAP-25 N-terminal region essential for SNARE complex formation. The N-acetyl modification provides stability and lipophilicity for topical penetration. Research demonstrates competitive binding to the SNARE assembly site, reducing efficiency of the four-helix bundle formation required for synaptic vesicle fusion. Studies show modulation of catecholamine release from chromaffin cells and reduced acetylcholine exocytosis. The peptide requires repeated topical application for cumulative effect, as mechanism is competitive rather than paralytic. Research indicates synergistic effects with other signal peptides and carrier peptides. Studies demonstrate safety profile superior to neurotoxins while providing gradual, reversible muscle modulation.',
    researchApplications: [
      'SNAP-25 N-terminal mimicry research',
      'SNARE four-helix bundle assembly studies',
      'Catecholamine and acetylcholine release modulation',
      'Topical peptide delivery and penetration',
      'Competitive vs paralytic mechanism comparison',
      'Signal peptide synergy research',
      'Reversible neuromuscular modulation',
      'Cosmetic peptide safety and efficacy studies'
    ]
  },
  'matrixyl': {
    description_en: 'Matrixyl (Palmitoyl Pentapeptide-4) is a lipopeptide that has been studied for its effects on stimulating collagen synthesis in the skin.',
    overview: 'Matrixyl (Palmitoyl Pentapeptide-4) is a matrikine-based cosmetic peptide mimicking collagen breakdown fragments that stimulate dermal repair. The palmitoyl lipid moiety enhances skin penetration while the KTTKS sequence (collagen I fragment) triggers matrix metalloproteinase and collagen synthesis pathways.',
    sequence: 'Pal-Lys-Thr-Thr-Lys-Ser',
    molecularWeight: '802.1 Da',
    biochemicalCharacteristics: 'Matrixyl consists of the KTTKS pentapeptide (procollagen I C-terminal propeptide fragment) conjugated to palmitic acid. Research demonstrates the KTTKS sequence functions as a matrikine, signaling ECM repair through fibroblast activation. The palmitoyl chain provides lipophilicity enabling stratum corneum penetration and sustained dermal delivery. Studies show stimulation of collagen I, III, and IV synthesis through TGF-β pathway activation. Research indicates upregulation of fibronectin and hyaluronic acid production enhancing dermal matrix hydration. The peptide promotes fibroblast proliferation and migration through integrin receptor engagement. Studies demonstrate MMP-1 (collagenase) suppression reducing collagen degradation while activating synthesis. Research indicates glycosaminoglycan synthesis enhancement improving skin elasticity and moisture retention.',
    researchApplications: [
      'Matrikine signaling and ECM repair research',
      'Collagen I/III/IV synthesis stimulation studies',
      'TGF-β pathway activation and fibroblast signaling',
      'Lipopeptide skin penetration and delivery',
      'Fibronectin and hyaluronic acid production',
      'MMP-1 suppression and collagen preservation',
      'Integrin receptor engagement research',
      'Glycosaminoglycan synthesis and skin hydration'
    ]
  },
  'kpv': {
    description_en: 'KPV (Ac-KPV-NH2) is a tripeptide derived from the C-terminal region of alpha-melanocyte stimulating hormone (α-MSH). It has been studied for its potent anti-inflammatory properties and effects on intestinal inflammation.',
    overview: 'KPV is a tripeptide (Lys-Pro-Val) representing the C-terminal fragment of α-MSH that retains significant anti-inflammatory activity. Unlike full-length α-MSH, KPV demonstrates preserved NF-κB inhibition with potentially different receptor engagement mechanisms. Research indicates particular relevance for intestinal inflammation and epithelial barrier studies.',
    sequence: 'Lys-Pro-Val',
    molecularWeight: '342.4 Da',
    biochemicalCharacteristics: 'KPV is the C-terminal tripeptide of α-MSH demonstrating preserved anti-inflammatory activity potentially independent of melanocortin receptor binding. Research indicates potent NF-κB p65 nuclear translocation inhibition, reducing pro-inflammatory cytokine expression (TNF-α, IL-1β, IL-6). Studies show PepT1-mediated intestinal epithelial uptake enabling targeted delivery to inflamed tissue. The peptide demonstrates MAPK/ERK pathway inhibition under inflammatory conditions. Research indicates intestinal epithelial barrier protection through tight junction protein preservation (ZO-1, occludin). Studies show antimicrobial activity through direct peptide-microbe interactions. Receptor-blocking studies suggest anti-inflammatory effects persist despite MC3/MC4 receptor blockade, supporting non-canonical signaling mechanisms. Research indicates collagen and matrix remodeling effects through IL-8 and fibroblast signaling modulation.',
    researchApplications: [
      'NF-κB p65 nuclear translocation inhibition research',
      'PepT1-mediated intestinal epithelial uptake studies',
      'TNF-α/IL-1β/IL-6 cytokine suppression research',
      'MAPK/ERK inflammatory pathway modulation',
      'Tight junction protein preservation (ZO-1/occludin)',
      'Non-canonical anti-inflammatory signaling mechanisms',
      'Intestinal inflammation and IBD model research',
      'Collagen/matrix remodeling pathway studies'
    ]
  },
  'mots-c': {
    description_en: 'MOTS-c is a mitochondrial-derived peptide encoded in the 12S rRNA region of the mitochondrial genome. It has been studied for its effects on metabolic regulation, insulin sensitivity, and as a potential exercise mimetic.',
    overview: 'MOTS-c (Mitochondrial Open Reading Frame of the 12S rRNA type-c) is a 16-amino acid peptide encoded within the mitochondrial genome. It represents a novel class of signaling molecules termed mitochondria-derived peptides (MDPs). Research demonstrates unique retrograde mitochondrial-nuclear signaling and potent metabolic regulatory effects resembling exercise adaptations.',
    sequence: 'Met-Arg-Trp-Gln-Glu-Met-Gly-Tyr-Ile-Phe-Tyr-Pro-Arg-Lys-Leu-Arg',
    molecularWeight: '2174.6 Da',
    biochemicalCharacteristics: 'MOTS-c is a 16-amino acid peptide encoded by mtDNA 12S rRNA small ORF, representing mitochondrial-nuclear crosstalk signaling. Research demonstrates AMPK pathway activation promoting cellular energy homeostasis and metabolic adaptation. Studies show nuclear translocation under metabolic stress conditions, regulating nuclear gene expression directly. The peptide enhances insulin sensitivity through glucose uptake pathway modulation in muscle and adipose tissue. Research indicates promotion of fatty acid β-oxidation and mitochondrial biogenesis through PGC-1α activation. Studies demonstrate exercise-mimetic effects including enhanced endurance capacity and metabolic flexibility. Research shows associations with longevity and healthy aging in population studies. The peptide promotes osteogenic differentiation through TGF-β/Smad signaling pathway activation.',
    researchApplications: [
      'Mitochondrial-derived peptide (MDP) signaling research',
      'AMPK pathway activation and energy homeostasis',
      'Nuclear translocation and gene expression regulation',
      'Insulin sensitivity and glucose metabolism studies',
      'PGC-1α and mitochondrial biogenesis research',
      'Exercise mimetic and metabolic adaptation studies',
      'Longevity and healthy aging pathway research',
      'TGF-β/Smad osteogenic differentiation studies'
    ]
  }
};

// Generate slug from URL
function generateSlug(url: string): string {
  try {
    const urlPath = new URL(url).pathname;
    return urlPath.replace(/^\//, '').replace(/\?.*$/, '') || 'product';
  } catch {
    return 'product';
  }
}

// Match product to peptide info based on name
function matchPeptideInfo(name: string): typeof peptideInfo[string] | null {
  const nameLower = name.toLowerCase();

  for (const [key, info] of Object.entries(peptideInfo)) {
    if (nameLower.includes(key.replace(/-/g, ' ')) || nameLower.includes(key)) {
      return info;
    }
  }
  return null;
}

// Match product to blend info based on URL slug and name
function matchBlendInfo(url: string, name: string): typeof blendInfo[string] | null {
  const slug = url.split('/').pop()?.split('?')[0] || '';
  const nameLower = name.toLowerCase();

  // Direct slug match
  if (blendInfo[slug]) {
    return blendInfo[slug];
  }

  // Partial matches for blend variations (remove size suffix like -10mg, -20mg)
  const baseSlug = slug.replace(/-\d+mg.*$/, '');
  if (blendInfo[baseSlug]) {
    return blendInfo[baseSlug];
  }

  // Try matching with common slug patterns
  for (const [key, info] of Object.entries(blendInfo)) {
    if (slug.includes(key) || key.includes(baseSlug)) {
      return info;
    }
  }

  // Name-based matching for all blend types
  // BPC-157 + TB-500 variants
  if (nameLower.includes('glow blend') || (nameLower.includes('bpc-157') && nameLower.includes('tb-500') && nameLower.includes('ghk-cu') && !nameLower.includes('kpv'))) {
    return blendInfo['bpc-157-tb-500-ghk-cu-glow-blend'];
  }
  if (nameLower.includes('klow blend') || (nameLower.includes('bpc-157') && nameLower.includes('tb-500') && nameLower.includes('kpv') && nameLower.includes('ghk-cu'))) {
    return blendInfo['bpc-157-tb-500-kpv-ghk-cu-klow-blend'];
  }
  if (nameLower.includes('bpc-157') && nameLower.includes('tb-500') && !nameLower.includes('ghk') && !nameLower.includes('kpv')) {
    return blendInfo['bpc-157-tb-500-blend'];
  }

  // Tesamorelin variants
  if (nameLower.includes('tesamorelin') && nameLower.includes('cjc') && nameLower.includes('ipamorelin')) {
    return blendInfo['tesamorelin-cjc-1295-ipamorelin'];
  }
  if (nameLower.includes('tesamorelin') && nameLower.includes('ipamorelin') && !nameLower.includes('cjc')) {
    return blendInfo['tesamorelin-ipamorelin'];
  }

  // Fragment variants
  if ((nameLower.includes('fragment') || nameLower.includes('176-191')) && nameLower.includes('cjc') && nameLower.includes('ipamorelin')) {
    return blendInfo['fragment-176-191-cjc-1295-ipamorelin'];
  }
  if ((nameLower.includes('fragment') || nameLower.includes('176-191')) && (nameLower.includes('mod') || nameLower.includes('grf')) && nameLower.includes('ipamorelin')) {
    return blendInfo['fragment-176-191-mod-grf-ipamorelin'];
  }

  // Triple blends
  if (nameLower.includes('cjc') && nameLower.includes('ipamorelin') && nameLower.includes('ghrp-2')) {
    return blendInfo['cjc-1295-ipamorelin-ghrp-2'];
  }
  if ((nameLower.includes('mod') || nameLower.includes('modified grf')) && nameLower.includes('ipamorelin') && nameLower.includes('ghrp-2')) {
    return blendInfo['mod-grf-ipamorelin-ghrp-2'];
  }
  if (nameLower.includes('sermorelin') && nameLower.includes('ghrp-6') && nameLower.includes('ghrp-2')) {
    return blendInfo['sermorelin-ghrp-6-ghrp-2'];
  }

  // CJC-1295 dual blends
  if (nameLower.includes('cjc') && nameLower.includes('ipamorelin') && !nameLower.includes('ghrp')) {
    return blendInfo['cjc-1295-ipamorelin'];
  }
  if (nameLower.includes('cjc') && nameLower.includes('ghrp-2') && !nameLower.includes('ipamorelin') && !nameLower.includes('ghrp-6')) {
    return blendInfo['cjc-1295-ghrp-2'];
  }
  if (nameLower.includes('cjc') && nameLower.includes('ghrp-6') && !nameLower.includes('ipamorelin') && !nameLower.includes('ghrp-2')) {
    return blendInfo['cjc-1295-ghrp-6'];
  }
  if (nameLower.includes('cjc') && nameLower.includes('hexarelin')) {
    return blendInfo['cjc-1295-hexarelin'];
  }

  // Mod GRF dual blends
  if ((nameLower.includes('mod') || nameLower.includes('modified grf')) && nameLower.includes('ipamorelin') && !nameLower.includes('ghrp')) {
    return blendInfo['mod-grf-ipamorelin'];
  }
  if ((nameLower.includes('mod') || nameLower.includes('modified grf')) && nameLower.includes('ghrp-2') && !nameLower.includes('ipamorelin') && !nameLower.includes('ghrp-6')) {
    return blendInfo['mod-grf-ghrp-2'];
  }
  if ((nameLower.includes('mod') || nameLower.includes('modified grf')) && nameLower.includes('ghrp-6') && !nameLower.includes('ipamorelin') && !nameLower.includes('ghrp-2')) {
    return blendInfo['mod-grf-ghrp-6'];
  }
  if ((nameLower.includes('mod') || nameLower.includes('modified grf')) && nameLower.includes('hexarelin')) {
    return blendInfo['mod-grf-hexarelin'];
  }

  // Sermorelin dual blends
  if (nameLower.includes('sermorelin') && nameLower.includes('ipamorelin') && !nameLower.includes('ghrp')) {
    return blendInfo['sermorelin-ipamorelin'];
  }
  if (nameLower.includes('sermorelin') && nameLower.includes('ghrp-2') && !nameLower.includes('ipamorelin') && !nameLower.includes('ghrp-6')) {
    return blendInfo['sermorelin-ghrp-2'];
  }
  if (nameLower.includes('sermorelin') && nameLower.includes('ghrp-6') && !nameLower.includes('ipamorelin') && !nameLower.includes('ghrp-2')) {
    return blendInfo['sermorelin-ghrp-6'];
  }

  return null;
}

// Generate default research applications based on category
function getDefaultApplications(category: string, name: string): string[] {
  const nameLower = name.toLowerCase();

  if (nameLower.includes('cosmetic') || nameLower.includes('topical') || nameLower.includes('skin')) {
    return ['Skin research', 'Cosmetic peptide studies', 'Anti-aging research', 'Dermatological studies'];
  }
  if (nameLower.includes('blend')) {
    return ['Synergistic peptide research', 'Combined effect studies', 'Peptide interaction research'];
  }
  if (nameLower.includes('capsule')) {
    return ['Oral bioavailability research', 'Peptide stability studies', 'Delivery system research'];
  }
  return ['Peptide research', 'Biochemical studies', 'In vitro research', 'Laboratory studies'];
}

// Add extended info to products
const productsWithSlugs: Product[] = (productsData as ProductsData).products.map((p) => {
  const info = matchPeptideInfo(p.name_en);
  const blend = matchBlendInfo(p.url, p.name_en);
  const slug = generateSlug(p.url);
  const isBlend = p.name_en.toLowerCase().includes('blend') || blend !== null;

  // For blends, use blend info; for single peptides, use peptide info
  if (blend) {
    return {
      ...p,
      slug,
      description_en: blend.description_en,
      overview: blend.overview,
      isBlend: true,
      components: blend.components,
      purity: '>98%',
      form: 'Lyophilized Powder',
      storage: 'Store at -20°C. Protect from light and moisture.',
      researchApplications: blend.researchApplications,
    };
  }

  return {
    ...p,
    slug,
    description_en: info?.description_en || `${p.name_en} is a high-purity research peptide available for laboratory and scientific research purposes only. This peptide has been synthesized to >98% purity standards and undergoes rigorous quality control testing.`,
    overview: info?.overview,
    sequence: info?.sequence,
    molecularWeight: info?.molecularWeight,
    biochemicalCharacteristics: info?.biochemicalCharacteristics,
    purity: '>98%',
    form: p.name_en.toLowerCase().includes('capsule') ? 'Capsules' : 'Lyophilized Powder',
    storage: 'Store at -20°C. Protect from light and moisture.',
    researchApplications: info?.researchApplications || getDefaultApplications(p.category_en, p.name_en),
    isBlend,
  };
});

export const data: ProductsData = {
  ...(productsData as ProductsData),
  products: productsWithSlugs,
};

export function getAllProducts(): Product[] {
  return data.products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return data.products.find((p) => p.slug === slug);
}

export function getProductsByCategory(categoryId: string): Product[] {
  if (categoryId === 'all') return data.products;

  const categoryMap: Record<string, string[]> = {
    popular: ['bpc-157', 'tb-500', 'melanotan', 'ipamorelin', 'pt-141'],
    blends: ['blend'],
    cosmetic: ['topical', 'cosmetic', 'argireline', 'matrixyl', 'snap-8', 'ghk-cu-200', 'pal-'],
    bioregulators: ['bioregulator'],
    igf: ['igf-1', 'igf1'],
    capsules: ['capsule'],
  };

  const keywords = categoryMap[categoryId] || [];
  if (keywords.length === 0) return data.products;

  return data.products.filter((p) =>
    keywords.some((kw) => p.url.toLowerCase().includes(kw) || p.name_en.toLowerCase().includes(kw))
  );
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return data.products.filter(
    (p) =>
      p.name_en.toLowerCase().includes(lowerQuery) ||
      p.name_vi.toLowerCase().includes(lowerQuery) ||
      (p.description_en && p.description_en.toLowerCase().includes(lowerQuery))
  );
}

export function getFeaturedProducts(count: number = 8): Product[] {
  // Return products with prices (most likely to be actual products)
  const withPrices = data.products.filter((p) => p.price && p.price.includes('$'));
  return withPrices.slice(0, count);
}

export function getCategories() {
  return data.categories;
}

export function formatPrice(price: string): string {
  if (!price) return 'Contact for price';
  return price;
}
