
import { ConceptNote, DecisionType, TeamStat } from '../types/dashboard';

// Extracted authentic records from OARI Concept Notes 2020 EC Screening Document
// Pages 1-53: Center, Directorate, Team
// Pages 54-106: Research Titles
// Pages 107-159: Initiators & Decisions
// Pages 160-170 & 222: Reviewer Comments

export const SAMPLE_TITLES: { no: number; title: string; initiators: string; decision: DecisionType; comments?: string }[] = [
  {
    no: 1,
    title: 'Influence of Different Seeding Rate on the Yield and Yield Component of Food Barley in East Shewa Zone, Oromia',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'add N as additional factor; design be factorial RCBD; locations be three'
  },
  {
    no: 2,
    title: 'Bread Wheat Regional Variety Trial for Low Moisture Stress Areas (BWRVT-2027)',
    initiators: 'Temesgen D. & Selam H.',
    decision: 'Accepted',
    comments: 'Include proper standard check/s'
  },
  {
    no: 3,
    title: 'Bread Wheat Preliminary Yield Trial for Low Moisture Areas (BWPYT-2027)',
    initiators: 'Temesgen D. & Selam H.',
    decision: 'Accepted',
    comments: 'Include proper standard check/s'
  },
  {
    no: 4,
    title: 'Bread Wheat Observation Nursery for Low Moisture Stressed Areas (BWON-2027)',
    initiators: 'Temesgen D. & Selam H.',
    decision: 'Accepted',
    comments: 'Mention recent standard check; specify color'
  },
  {
    no: 5,
    title: 'Durum Wheat Regional Variety Trial for Low Moisture Areas (DWRVT-2027)',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'Mention recent standard check; specify color'
  },
  {
    no: 6,
    title: 'Durum Wheat Preliminary Yield Trial for Low Moisture Areas (DWPYT-2027)',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'Mention recent standard check'
  },
  {
    no: 7,
    title: 'Durum Wheat Observation Nursery for Low Moisture Areas (DWON-2027)',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'Mention one best & recent standard check'
  },
  {
    no: 8,
    title: 'Food Barley Regional Variety Trial for Low Moisture Areas (2027)',
    initiators: 'Temesgen D. & Selam H.',
    decision: 'Accepted',
    comments: 'Mention the standard checks'
  },
  {
    no: 9,
    title: 'Food Barley Preliminary Yield Trial for Low Moisture Areas (FBPYT-2027)',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'Identify proper standard checks'
  },
  {
    no: 10,
    title: 'Food Barley Observation Nursery for Low Moisture Areas (FBON-2027)',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'Identify one proper standard check'
  },
  {
    no: 11,
    title: 'Tef Variety Verification for Low Moisture Areas (2027)',
    initiators: 'Temesgen D. & Selam H.',
    decision: 'Accepted',
    comments: 'Identify proper standard checks'
  },
  {
    no: 12,
    title: 'White seeded Tef Regional Variety Trial for Low Moisture Areas (2027)',
    initiators: 'Temesgen D. & Selam H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 13,
    title: 'White seeded Tef Preliminary Yield Trial (TPYT-2027)',
    initiators: 'Temesgen D. & Selam H.',
    decision: 'Accepted',
    comments: 'Identify proper standard check'
  },
  {
    no: 14,
    title: 'White seeded Tef Preliminary Observation Nursery Trial (TPON-2027)',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'Focus on early maturing genotypes'
  },
  {
    no: 15,
    title: 'Brown seeded Tef Preliminary Observation Nursery Trial (TPON-2027)',
    initiators: 'Selam H. & Temesgen D.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 16,
    title: 'Lentil (Lens culinaris Medik.) Preliminary Yield Trial',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 17,
    title: 'Lentil (Lens culinaris Medik.) Regional variety Trial',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 18,
    title: 'Dessi-type Chickpea (Cicer arietinum L.) Observation Nursery',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 19,
    title: 'Dessi-type Chickpea (Cicer arietinum L.) Preliminary Yield Trial',
    initiators: 'Beshir H. & Ashenafi T.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 20,
    title: 'Dessi-type Chickpea (Cicer arietinum L.) RVT',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 21,
    title: 'Kabuli type Chickpea (Cicer arietinum L.) Observation Nursery',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 22,
    title: 'Kabuli type Chickpea (Cicer arietinum L.) Preliminary Yield Trial',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 23,
    title: 'Kabuli type Chickpea (Cicer arietinum L.) RVT',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 24,
    title: 'Soybean Observation Nursery',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 25,
    title: 'Early Set Soybean (Glycine Max L.) Preliminary Yield Trial',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 26,
    title: 'Medium Set Soybean (Glycine max L.) Preliminary Yield Trial',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 27,
    title: 'Early set Soybean (Glycine max L.) Regional variety Trial',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 28,
    title: 'Medium Set Soybean (Glycine max L.) Regional variety Trial',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 29,
    title: 'Speckled Common Bean (Phaseolus Vulgaris) Observation Nursery',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks'
  },
  {
    no: 30,
    title: 'Mottled Common Bean (Phaseolus Vulgaris) Observation Nursery',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks; use only one standard check'
  },
  {
    no: 31,
    title: 'Large White Common Bean (Phaseolus Vulgaris) Observation Nursery',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Identify proper checks; use only one standard check across all RVTs; locations be three for RVTs'
  },
  {
    no: 32,
    title: 'Small white Common Bean (Phaseolus Vulgaris) Observation Nursery',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Identify proper checks; use only one standard check across all RVTs; locations be three for RVTs'
  },
  {
    no: 33,
    title: 'Large Red Common Bean (Phaseolus Vulgaris) Observation Nursery',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Changed to Observation Nursery (PON); include Sinana varieties as check'
  },
  {
    no: 34,
    title: 'Small Red Common Bean (Phaseolus Vulgaris) Observation Nursery',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Describe the varieties by names and source; include proper check.'
  },
  {
    no: 35,
    title: 'Mottled Common Bean (Phaseolus Vulgaris) Preliminary Yield Trial',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Describe the varieties by names and source; include proper check.'
  },
  {
    no: 36,
    title: 'Large White Common Bean (Phaseolus Vulgaris) Preliminary Yield Trial',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Describe the varieties by names and source; include proper check.'
  },
  {
    no: 37,
    title: 'Small White Common Bean (Phaseolus Vulgaris) Preliminary Yield Trial',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Describe varieties and source'
  },
  {
    no: 38,
    title: 'Large Red Common Bean (Phaseolus Vulgaris) Preliminary Yield Trial',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Include check varieties'
  },
  {
    no: 39,
    title: 'Small Red Common Bean (Phaseolus Vulgaris) Preliminary Yield Trial',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Check varieties and locations'
  },
  {
    no: 40,
    title: 'Speckled Common Bean (Phaseolus Vulgaris) RVT',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Confirm locations and checks'
  },
  {
    no: 41,
    title: 'Small White Common Bean (Phaseolus Vulgaris) RVT',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Standard check verification'
  },
  {
    no: 42,
    title: 'Mottled Common Bean (Phaseolus Vulgaris) RVT',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Multi-location trial'
  },
  {
    no: 43,
    title: 'Adaptation Trial of Mung bean (Vigna radiata L.)',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Adaptation trial checks'
  },
  {
    no: 44,
    title: 'Adaptation Trial of Faba Bean in Ada’a and Lume District of East Shewa Oromia',
    initiators: 'Ashenafi T.',
    decision: 'Accepted',
    comments: 'Trial locations confirmed'
  },
  {
    no: 45,
    title: 'Adaptation Trial of Shiro – type Field Pea (Pisum sativum L.) varieties in Ada’aa and Lume districts, East Shewa Zone',
    initiators: 'Ashanfi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Shiro check varieties'
  },
  {
    no: 46,
    title: 'Adaptation Trial of kik-type Field Pea (Pisum sativum L.) at Ada’a and Lume district East Shewa Zone',
    initiators: 'Ashanfi T. and Beshir H.',
    decision: 'Accepted',
    comments: 'Field pea quality evaluation'
  },
  {
    no: 47,
    title: 'Adaptation Trial of Groundnut (Arachis hypogaea L.) Varieties East Shewa Zone, Oromia, Ethiopia',
    initiators: 'Ashenafi T. and Beshir H.',
    decision: 'Rejected',
    comments: 'Not a priority given that the researchers are already overloaded.'
  },
  {
    no: 48,
    title: 'Performance Evaluation of Early Set Soybean (Glycine max L.) Using Irrigation at East Shewa Zone',
    initiators: 'Beshir H. & Ashenafi T.',
    decision: 'Rejected',
    comments: 'Not a priority given that the researchers are already overloaded.'
  },
  {
    no: 49,
    title: 'Performance Evaluation of Sesame (Sesamum indicum L.) Using Irrigation at East Shewa Zone',
    initiators: 'Beshir H. & Ashenafi T.',
    decision: 'Accepted',
    comments: 'Describe varieties'
  },
  {
    no: 50,
    title: 'Influence of Integrated Organic and Inorganic fertilizer application rates on Grain Yield and yield-related traits of Bread wheat in the highland areas of Western Oromia',
    initiators: 'Hailu F.',
    decision: 'Accepted',
    comments: 'Incorporate factorial combination; soil analysis and partial budget analysis'
  },
  {
    no: 51,
    title: 'Effects of Green Manure and fertilizer rates on Soil Fertility and Productivity of Finger Millet (Eleusine coracana L. Gaertn.) in Western Ethiopia',
    initiators: 'Fufa A.',
    decision: 'Rejected',
    comments: 'One season is not enough for the activity - growing green manure then finger millet; result may not be applicable at farmer level'
  },
  {
    no: 52,
    title: 'Effects of Sowing Time on Yield and Yield Components of Upland Rice in Western Ethiopia',
    initiators: 'Fufa A.',
    decision: 'Accepted',
    comments: 'Specify the sowing date; check the intervals between two sowings'
  },
  {
    no: 53,
    title: 'Response of improved food barley to NP fertilizer rates in western parts of Ethiopia',
    initiators: 'Fufa A. et al',
    decision: 'Accepted',
    comments: 'Check for suitability of varieties; check the ratios'
  },
  {
    no: 54,
    title: 'Sorghum Preliminary Yield Trial (Medium Set)',
    initiators: 'Fufa A.',
    decision: 'Accepted',
    comments: 'Delete the general objective; rewrite specific objectives, condensing to single objective'
  },
  {
    no: 55,
    title: 'Sorghum Preliminary Yield Trial (Medium Set)',
    initiators: 'Meseret T.',
    decision: 'Accepted',
    comments: 'Merge the two objectives into one'
  },
  {
    no: 56,
    title: 'Evaluation of F3 Sorghum Segregant generations',
    initiators: 'Meseret T.',
    decision: 'Accepted',
    comments: 'Merge the two objectives into one'
  },
  {
    no: 65,
    title: 'Bread wheat Regional variety Trail – Irrigated (IBWRVT-2027)',
    initiators: 'Geleta G.',
    decision: 'Accepted',
    comments: 'Check varieties; complete the list of locations (Bako, Bedele, Fedis, Mechara, Adami Tulu)'
  },
  {
    no: 74,
    title: 'Machine Learning-Based Prediction of Soybean Yield under Different Phosphorus and Bradyrhizobium Management Systems',
    initiators: 'Adane A.',
    decision: 'Accepted',
    comments: 'Focus on single factor i.e planting date study; AI model training dataset validation'
  },
  {
    no: 84,
    title: 'Adaptability and Yield Performance Evaluation of Biofortified Common Bean (Phaseolus vulgaris L.) Varieties in Oromia',
    initiators: 'Adane A.',
    decision: 'Accepted',
    comments: 'Be secure the germplasm'
  },
  {
    no: 123,
    title: 'Evaluation of planting techniques and varieties for increasing root yield of sweet potato (Ipomoea batatas (L.) Lam.) production in Western Oromia',
    initiators: 'Gudeta B.',
    decision: 'Accepted',
    comments: 'Strong justification required; specify differences between varieties'
  },
  {
    no: 133,
    title: 'Effect of Nitrogen and Phosphorus Fertilizer Rates on Yield and Yield Components of Triticale in Buno Bedele',
    initiators: 'Alemayehu D',
    decision: 'Accepted',
    comments: 'Calculate rate of Vermi-compost based on nutrient content; include soil sample and economic analysis'
  },
  {
    no: 155,
    title: 'Bread Wheat (Triticum aestivum L.) Regional Variety Trial (BWRVT-HL-27) at High Land Areas',
    initiators: 'Aliyi K.',
    decision: 'Accepted',
    comments: 'Location for RVT should be three'
  },
  {
    no: 201,
    title: 'Early Maturing Sorghum Variety Verification Trial (VVT)',
    initiators: 'Zeleke L.',
    decision: 'Accepted',
    comments: 'Include proper recent standard check/s'
  },
  {
    no: 267,
    title: 'Food barley preliminary Yield Trial (FBPYT-27)',
    initiators: 'Fitche Team / Geleta N.',
    decision: 'Accepted',
    comments: 'Locations confirmed for North Shewa highland ecology'
  },
  {
    no: 317,
    title: 'Effects of NP Fertilizer Rates on Grain Yield and Yield Components of Bread Wheat in Highland of Bale',
    initiators: 'Belay Asmare and Tadele Tadesse',
    decision: 'Accepted',
    comments: 'Reduce levels of FYM; use (0,0) plot as check'
  },
  {
    no: 453,
    title: 'Genetic Evaluation and Observation Trial of Desirable Traits through direct and reciprocal crossing of Tetra H and Koekoek chicken breeds under ATARC',
    initiators: 'Dr. Gebawo Tibesso',
    decision: 'Accepted with modification',
    comments: 'Clearly indicate the parental lines with their merits; focus on disease resistance'
  },
  {
    no: 454,
    title: 'Evaluation of Adaptation, Flowering Phenology and Honey Production Potential of Opuntia ficus-indica as a Bee Forage Plant',
    initiators: 'Ashebir Worku',
    decision: 'Accepted with modification',
    comments: 'Monitor nectar sugar concentration and worker bee flight radius'
  },
  {
    no: 455,
    title: 'Adaptation and Productive Performance of Boer Goats and Their Crosses with Arsi-Bale Indigenous Goats under Ethiopian Production Systems',
    initiators: 'Ashebir Worku & Dr. Abdella Edao',
    decision: 'Accepted with modification',
    comments: 'Verify buck genetic lineage and maternal weaning traits'
  },
  {
    no: 459,
    title: 'Efficacy of Dry Cow Antimicrobial and Teat Sealant Therapies on Intra-Mammary Infection Rates Across Consecutive Lactations',
    initiators: 'Dr Abdela Edao',
    decision: 'Accepted with modification',
    comments: 'Conduct somatic cell count (SCC) benchmarking'
  },
  {
    no: 554,
    title: 'Performance Evaluation of Pure Boer Goat and their crosses at BARC',
    initiators: 'Mekonnen Diribsa',
    decision: 'Accepted',
    comments: 'Standardize forage diet regimes'
  },
  {
    no: 594,
    title: 'Cowpea Regional Variety Trial (RVT) in Buno Bedele and Ilu Aba Bor Zones',
    initiators: 'Bedele Livestock Team',
    decision: 'Accepted',
    comments: 'Locations to include Dabo Hana and Gechi'
  },
  {
    no: 655,
    title: 'Optimization of Sperm Cryopreservation and Hormone Induced Off Season Spawning Protocols for Cyprinus carpio and Clarias gariepinus',
    initiators: 'Dr Mathewos Hailu',
    decision: 'Accepted',
    comments: 'Verify liquid nitrogen tank storage security'
  },
  {
    no: 681,
    title: 'Assessment of Beekeeping Practices in West Wollega And Kellem Wollega Zones',
    initiators: 'HBRC Team',
    decision: 'Accepted',
    comments: 'Include GIS mapping of floral calendar'
  },
  {
    no: 793,
    title: 'Pre-Extension Demonstration and Evaluation of Updraft cook stove in selected districts of Arsi Zone',
    initiators: 'Asfaw N. and Beriso B. and Yassin E.',
    decision: 'Accepted',
    comments: 'Assess thermal efficiency and indoor air particulate emissions'
  },
  {
    no: 976,
    title: 'Identification of yellow rust Resistance in Elite Wheat Genotypes using SSR markers in the Bale Highlands, Ethiopia',
    initiators: 'Dagne Kora',
    decision: 'Accepted',
    comments: 'Use CIMMYT resistant allele standards'
  },
  {
    no: 1068,
    title: 'Evaluation of Insecticides and Application Frequencies for the Management of Onion Thrips (Thrips tabaci Lindeman) in Bale',
    initiators: 'Megersa A and Adisu A',
    decision: 'Accepted',
    comments: 'Compare synthetic vs botanical neem bio-pesticide efficacy'
  },
  {
    no: 1111,
    title: 'Screening of Food Barley (Hordeum vulgare L.) Genotypes for Resistance against Major Insect Pests under Field Conditions',
    initiators: 'SARC Weed Team',
    decision: 'Accepted',
    comments: 'Record shoot fly and aphid infestation scores weekly'
  },
  {
    no: 1134,
    title: 'Collection, Isolation and Ex-Situ Culturing of Indigenous Spirulina (Arthrospira fusiformis) Landrace Strains from Ethiopian Rift Valley Soda Lakes',
    initiators: 'ATARC Biotech Team',
    decision: 'Accepted',
    comments: 'Benchmark nutritional protein content against WHO reference standards'
  },
  {
    no: 1164,
    title: 'Systematic Review, Meta-Analysis and Dietary Health-Risk Assessment of Aflatoxins in Food Value Chains of Oromia Regional State',
    initiators: 'Megersa Daba',
    decision: 'Accepted',
    comments: 'HPLC and ELISA quantification methodologies required'
  },
  {
    no: 1193,
    title: 'Modification and On-Farm Evaluation of an Engine-Operated Animal Feed Mixer into a Biochar-Based Fertilizer Mixing Machine',
    initiators: 'Asela Engineering Team',
    decision: 'Accepted',
    comments: 'Determine uniform mixing index and power requirement'
  },
  {
    no: 1281,
    title: 'Identification and Prioritization of Suitable Rain Water Harvesting Sites Using GIS-Based Spatial Analysis in Adami Tulu Jido Kombolcha',
    initiators: 'ATARC IDWH Team',
    decision: 'Accepted',
    comments: 'Integrate DEM elevation slope and soil infiltration rate layers'
  },
  {
    no: 1368,
    title: 'Development and Evaluation of a Solar-Powered Rural Mini-Grid Electrification Technology',
    initiators: 'BEARC Renewable Energy Team',
    decision: 'Accepted',
    comments: 'Include battery storage cycle life analysis'
  },
  {
    no: 1407,
    title: 'Coordinated and variety verification trail for lowland areas of Western Oromia',
    initiators: 'BARC Coffee Team',
    decision: 'Accepted',
    comments: 'Evaluate cup quality, acidity and body sensory attributes'
  },
  {
    no: 1467,
    title: 'Effect of Integrated Application of White Lupin (Lupinus albus L.) Green Manure and Varying Nitrogen Fertilizer Rates on Soil Acidity',
    initiators: 'ATARC Soil Team',
    decision: 'Accepted',
    comments: 'Measure exchangeable aluminum and soil pH changes over 2 seasons'
  },
  {
    no: 1616,
    title: 'Validation of Phosphorus Requirement Map for Maize in Dega District, Buno Bedele Zone',
    initiators: 'BSRC Soil Survey Team',
    decision: 'Accepted',
    comments: 'Calibrate critical P value and P-requirement factor'
  },
  {
    no: 1677,
    title: 'Harnessing Geospatial Artificial Intelligence (GeoAI) for Precision Soil and Water Conservation in Data-Scarce Landscapes of Bale',
    initiators: 'ATARC & SARC SWC Team',
    decision: 'Accepted',
    comments: 'Ground-truth satellite runoff predictions with flume discharge meters'
  }
];

// Standardized mapping of all 1,734 evaluated Concept Notes from pages 1-53 of the OARI screening document
export const CENTER_DIRECTORATE_TEAMS: {
  startNo: number;
  endNo: number;
  center: string;
  directorate: string;
  team: string;
}[] = [
  // Crop Directorate (1-452)
  { startNo: 1, endNo: 15, center: "ATARC", directorate: "Crop", team: "Cereals" },
  { startNo: 16, endNo: 49, center: "ATARC", directorate: "Crop", team: "Pulses" },
  { startNo: 50, endNo: 83, center: "BARC", directorate: "Crop", team: "Cereals" },
  { startNo: 84, endNo: 122, center: "BARC", directorate: "Crop", team: "Pulses" },
  { startNo: 123, endNo: 132, center: "BARC", directorate: "Crop", team: "Horticulture" },
  { startNo: 133, endNo: 135, center: "Bedele", directorate: "Crop", team: "Cereals" },
  { startNo: 136, endNo: 136, center: "Bedele", directorate: "Crop", team: "Pulses" },
  { startNo: 137, endNo: 140, center: "Bedele", directorate: "Crop", team: "Horticulture" },
  { startNo: 141, endNo: 146, center: "Bedele", directorate: "Crop", team: "Cereals" },
  { startNo: 147, endNo: 150, center: "Bedele", directorate: "Crop", team: "Pulses" },
  { startNo: 151, endNo: 154, center: "Bedele", directorate: "Crop", team: "Horticulture" },
  { startNo: 155, endNo: 172, center: "Bore", directorate: "Crop", team: "Cereals" },
  { startNo: 173, endNo: 189, center: "Bore", directorate: "Crop", team: "Pulses" },
  { startNo: 190, endNo: 200, center: "Bore", directorate: "Crop", team: "Horticulture" },
  { startNo: 201, endNo: 217, center: "Fedis", directorate: "Crop", team: "Cereals" },
  { startNo: 218, endNo: 244, center: "Fedis", directorate: "Crop", team: "Pulses" },
  { startNo: 245, endNo: 260, center: "Fedis", directorate: "Crop", team: "Horticulture" },
  { startNo: 261, endNo: 265, center: "Fedis", directorate: "Crop", team: "Cereals" },
  { startNo: 266, endNo: 266, center: "Fedis", directorate: "Crop", team: "Horticulture" },
  { startNo: 267, endNo: 274, center: "Fitche", directorate: "Crop", team: "Cereals" },
  { startNo: 275, endNo: 279, center: "Fitche", directorate: "Crop", team: "Pulses" },
  { startNo: 280, endNo: 282, center: "Fitche", directorate: "Crop", team: "Horticulture" },
  { startNo: 283, endNo: 283, center: "Fitche", directorate: "Crop", team: "Pulses" },
  { startNo: 284, endNo: 286, center: "Fitche", directorate: "Crop", team: "Horticulture" },
  { startNo: 287, endNo: 295, center: "Harosabu", directorate: "Crop", team: "Cereals" },
  { startNo: 296, endNo: 299, center: "Harosabu", directorate: "Crop", team: "Horticulture" },
  { startNo: 300, endNo: 310, center: "Harosabu", directorate: "Crop", team: "Pulses" },
  { startNo: 311, endNo: 312, center: "Harosabu", directorate: "Crop", team: "Horticulture" },
  { startNo: 313, endNo: 316, center: "Harosabu", directorate: "Crop", team: "Pulses" },
  { startNo: 317, endNo: 324, center: "SARC", directorate: "Crop", team: "Cereals" },
  { startNo: 325, endNo: 330, center: "SARC", directorate: "Crop", team: "Pulses" },
  { startNo: 331, endNo: 333, center: "SARC", directorate: "Crop", team: "Horticulture" },
  { startNo: 334, endNo: 364, center: "SARC", directorate: "Crop", team: "Cereals" },
  { startNo: 365, endNo: 384, center: "SARC", directorate: "Crop", team: "Pulses" },
  { startNo: 385, endNo: 397, center: "SARC", directorate: "Crop", team: "Horticulture" },
  { startNo: 398, endNo: 398, center: "Mechara", directorate: "Crop", team: "Cereals" },
  { startNo: 399, endNo: 400, center: "Mechara", directorate: "Crop", team: "Pulses" },
  { startNo: 401, endNo: 404, center: "Mechara", directorate: "Crop", team: "Horticulture" },
  { startNo: 405, endNo: 407, center: "Mechara", directorate: "Crop", team: "Cereals" },
  { startNo: 408, endNo: 418, center: "Mechara", directorate: "Crop", team: "Pulses" },
  { startNo: 419, endNo: 424, center: "Mechara", directorate: "Crop", team: "Horticulture" },
  { startNo: 425, endNo: 427, center: "YPDARC", directorate: "Crop", team: "Cereals" },
  { startNo: 428, endNo: 431, center: "YPDARC", directorate: "Crop", team: "Pulses" },
  { startNo: 432, endNo: 438, center: "YPDARC", directorate: "Crop", team: "Cereals" },
  { startNo: 439, endNo: 447, center: "YPDARC", directorate: "Crop", team: "Pulses" },
  { startNo: 448, endNo: 452, center: "YPDARC", directorate: "Crop", team: "Horticulture" },

  // Livestock Directorate (453-792)
  { startNo: 453, endNo: 453, center: "ATARC", directorate: "Livestock", team: "Poultry Science" },
  { startNo: 454, endNo: 454, center: "ATARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 455, endNo: 456, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 457, endNo: 458, center: "ATARC", directorate: "Livestock", team: "Poultry Science" },
  { startNo: 459, endNo: 459, center: "ATARC", directorate: "Livestock", team: "Dairy Technology" },
  { startNo: 460, endNo: 463, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 464, endNo: 465, center: "ATARC", directorate: "Livestock", team: "Poultry Science" },
  { startNo: 466, endNo: 467, center: "ATARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 468, endNo: 469, center: "ATARC", directorate: "Livestock", team: "Dairy Technology" },
  { startNo: 470, endNo: 470, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 471, endNo: 472, center: "ATARC", directorate: "Livestock", team: "Dairy Technology" },
  { startNo: 473, endNo: 476, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 477, endNo: 481, center: "ATARC", directorate: "Livestock", team: "Poultry Science" },
  { startNo: 482, endNo: 489, center: "ATARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 490, endNo: 490, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 491, endNo: 492, center: "ATARC", directorate: "Livestock", team: "Dairy Technology" },
  { startNo: 493, endNo: 493, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 494, endNo: 499, center: "ATARC", directorate: "Livestock", team: "Dairy Technology" },
  { startNo: 500, endNo: 515, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 516, endNo: 525, center: "ATARC", directorate: "Livestock", team: "Poultry Science" },
  { startNo: 526, endNo: 533, center: "ATARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 534, endNo: 534, center: "ATARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 535, endNo: 535, center: "ATARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 536, endNo: 553, center: "ATARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 554, endNo: 556, center: "BARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 557, endNo: 559, center: "BARC", directorate: "Livestock", team: "Poultry Science" },
  { startNo: 560, endNo: 564, center: "BARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 565, endNo: 565, center: "BARC", directorate: "Livestock", team: "Poultry Science" },
  { startNo: 566, endNo: 570, center: "BARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 571, endNo: 582, center: "BARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 583, endNo: 593, center: "BARC", directorate: "Livestock", team: "Dairy Technology" },
  { startNo: 594, endNo: 597, center: "Bedele", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 598, endNo: 600, center: "Bedele", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 601, endNo: 611, center: "Bore", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 612, endNo: 613, center: "Bore", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 614, endNo: 622, center: "Bore", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 623, endNo: 624, center: "Bore", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 625, endNo: 640, center: "Fedis", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 641, endNo: 649, center: "Fedis", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 650, endNo: 654, center: "Fitche", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 655, endNo: 663, center: "Fishery", directorate: "Livestock", team: "Aquaculture" },
  { startNo: 664, endNo: 673, center: "Fishery", directorate: "Livestock", team: "Capture Fisheries" },
  { startNo: 674, endNo: 674, center: "Fishery", directorate: "Livestock", team: "Aquaculture" },
  { startNo: 675, endNo: 678, center: "Fishery", directorate: "Livestock", team: "Capture Fisheries" },
  { startNo: 679, endNo: 680, center: "Harosabu", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 681, endNo: 702, center: "HBRC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 703, endNo: 711, center: "Harosabu", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 712, endNo: 721, center: "Mechara", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 722, endNo: 731, center: "Mechara", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 732, endNo: 740, center: "SARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 741, endNo: 744, center: "SARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 745, endNo: 750, center: "SARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 751, endNo: 756, center: "SARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 757, endNo: 757, center: "YPDARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 758, endNo: 761, center: "YPDARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 762, endNo: 766, center: "YPDARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 767, endNo: 767, center: "YPDARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 768, endNo: 768, center: "YPDARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 769, endNo: 771, center: "YPDARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 772, endNo: 776, center: "YPDARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 777, endNo: 777, center: "YPDARC", directorate: "Livestock", team: "Feeds & Forage" },
  { startNo: 778, endNo: 779, center: "YPDARC", directorate: "Livestock", team: "Meat Animals" },
  { startNo: 780, endNo: 785, center: "YPDARC", directorate: "Livestock", team: "Apiculture (Bee)" },
  { startNo: 786, endNo: 792, center: "YPDARC", directorate: "Livestock", team: "Dairy Technology" },

  // SEAE Directorate (793-975)
  { startNo: 793, endNo: 797, center: "Asela", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 798, endNo: 802, center: "Asela", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 803, endNo: 808, center: "ATARC", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 809, endNo: 825, center: "ATARC", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 826, endNo: 826, center: "ATO", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 827, endNo: 830, center: "BEARC", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 831, endNo: 837, center: "BEARC", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 838, endNo: 847, center: "BARC", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 848, endNo: 855, center: "BARC", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 856, endNo: 856, center: "Fishery", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 857, endNo: 857, center: "Fishery", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 858, endNo: 862, center: "Bedele", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 863, endNo: 864, center: "Bedele", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 865, endNo: 874, center: "Bore", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 875, endNo: 883, center: "Bore", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 884, endNo: 890, center: "Fedis", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 891, endNo: 902, center: "Fedis", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 903, endNo: 906, center: "Fitche", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 907, endNo: 911, center: "Fitche", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 912, endNo: 913, center: "HBRC", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 914, endNo: 915, center: "HBRC", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 916, endNo: 925, center: "Harosabu", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 926, endNo: 930, center: "Harosabu", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 931, endNo: 936, center: "Jimma", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 937, endNo: 941, center: "Jimma", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 942, endNo: 947, center: "Mechara", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 948, endNo: 951, center: "Mechara", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 952, endNo: 954, center: "Nekemte", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 955, endNo: 964, center: "SARC", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 965, endNo: 966, center: "SARC", directorate: "SEAE", team: "Socio-Economics" },
  { startNo: 967, endNo: 971, center: "YPDARC", directorate: "SEAE", team: "Agricultural Economics" },
  { startNo: 972, endNo: 975, center: "YPDARC", directorate: "SEAE", team: "Socio-Economics" },

  // Protection Directorate (976-1133)
  { startNo: 976, endNo: 998, center: "SARC", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 999, endNo: 1005, center: "ATARC", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1006, endNo: 1032, center: "BARC", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1033, endNo: 1033, center: "Bedele", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1034, endNo: 1047, center: "Bore", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1048, endNo: 1049, center: "Fedis", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1050, endNo: 1050, center: "Fitche", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1051, endNo: 1062, center: "Harosabu", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1063, endNo: 1064, center: "Mechara", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1065, endNo: 1067, center: "YPDARC", directorate: "Protection", team: "Plant Pathology" },
  { startNo: 1068, endNo: 1081, center: "SARC", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1082, endNo: 1084, center: "ATARC", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1085, endNo: 1094, center: "BARC", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1095, endNo: 1099, center: "Bore", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1100, endNo: 1102, center: "Fedis", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1103, endNo: 1105, center: "Fitche", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1106, endNo: 1107, center: "Mechara", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1108, endNo: 1110, center: "YPDARC", directorate: "Protection", team: "Agricultural Entomology" },
  { startNo: 1111, endNo: 1118, center: "SARC", directorate: "Protection", team: "Weed Science" },
  { startNo: 1119, endNo: 1119, center: "ATARC", directorate: "Protection", team: "Weed Science" },
  { startNo: 1120, endNo: 1121, center: "Bedele", directorate: "Protection", team: "Weed Science" },
  { startNo: 1122, endNo: 1123, center: "Fedis", directorate: "Protection", team: "Weed Science" },
  { startNo: 1124, endNo: 1124, center: "Mechara", directorate: "Protection", team: "Weed Science" },
  { startNo: 1125, endNo: 1127, center: "YPDARC", directorate: "Protection", team: "Weed Science" },
  { startNo: 1128, endNo: 1132, center: "Bore", directorate: "Protection", team: "Weed Science" },
  { startNo: 1133, endNo: 1133, center: "Harosabu", directorate: "Protection", team: "Weed Science" },

  // Biotechnology Directorate (1134-1163)
  { startNo: 1134, endNo: 1136, center: "ATARC", directorate: "Biotechnology", team: "Plant Biotechnology" },
  { startNo: 1137, endNo: 1138, center: "Nekemte", directorate: "Biotechnology", team: "Soil Microbial Biotechnology" },
  { startNo: 1139, endNo: 1139, center: "Biotechnology", directorate: "Biotechnology", team: "Plant Biotechnology" },
  { startNo: 1140, endNo: 1150, center: "ATARC", directorate: "Biotechnology", team: "Plant Biotechnology" },
  { startNo: 1151, endNo: 1152, center: "Nekemte", directorate: "Biotechnology", team: "Soil Microbial Biotechnology" },
  { startNo: 1153, endNo: 1163, center: "ATARC", directorate: "Biotechnology", team: "Plant Biotechnology" },

  // Food Science Directorate (1164-1192)
  { startNo: 1164, endNo: 1181, center: "Food Science", directorate: "Food Science", team: "Food Chemistry & Nutrition" },
  { startNo: 1182, endNo: 1188, center: "Food Science", directorate: "Food Science", team: "Food Technology & Processing" },
  { startNo: 1189, endNo: 1192, center: "Food Science", directorate: "Food Science", team: "Food Microbiology" },

  // A/Engineering Directorate (1193-1406)
  { startNo: 1193, endNo: 1200, center: "Asela", directorate: "A/Engineering", team: "Agri-Machinery & Farm Power (AMFP)" },
  { startNo: 1201, endNo: 1208, center: "BEARC", directorate: "A/Engineering", team: "Agri-Machinery & Farm Power (AMFP)" },
  { startNo: 1209, endNo: 1219, center: "Fedis", directorate: "A/Engineering", team: "Agri-Machinery & Farm Power (AMFP)" },
  { startNo: 1220, endNo: 1234, center: "Jimma", directorate: "A/Engineering", team: "Agri-Machinery & Farm Power (AMFP)" },
  { startNo: 1235, endNo: 1241, center: "Asela", directorate: "A/Engineering", team: "Post-Harvest & Processing (PHAPP)" },
  { startNo: 1242, endNo: 1246, center: "BEARC", directorate: "A/Engineering", team: "Post-Harvest & Processing (PHAPP)" },
  { startNo: 1247, endNo: 1264, center: "Jimma", directorate: "A/Engineering", team: "Post-Harvest & Processing (PHAPP)" },
  { startNo: 1265, endNo: 1271, center: "HBRC", directorate: "A/Engineering", team: "Post-Harvest & Processing (PHAPP)" },
  { startNo: 1272, endNo: 1280, center: "Fedis", directorate: "A/Engineering", team: "Post-Harvest & Processing (PHAPP)" },
  { startNo: 1281, endNo: 1294, center: "ATARC", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1295, endNo: 1298, center: "YPDARC", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1299, endNo: 1302, center: "SARC", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1303, endNo: 1305, center: "Harosabu", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1306, endNo: 1314, center: "BARC", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1315, endNo: 1319, center: "Mechara", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1320, endNo: 1325, center: "Fitche", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1326, endNo: 1332, center: "Bore", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1333, endNo: 1340, center: "Asela", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1341, endNo: 1348, center: "Jimma", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1349, endNo: 1358, center: "Fedis", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1359, endNo: 1367, center: "BEARC", directorate: "A/Engineering", team: "Irrigation & Drainage (IDWH)" },
  { startNo: 1368, endNo: 1371, center: "Asela", directorate: "A/Engineering", team: "Renewable Energy (Renergy)" },
  { startNo: 1372, endNo: 1387, center: "BEARC", directorate: "A/Engineering", team: "Renewable Energy (Renergy)" },
  { startNo: 1388, endNo: 1392, center: "Fedis", directorate: "A/Engineering", team: "Renewable Energy (Renergy)" },
  { startNo: 1393, endNo: 1406, center: "Jimma", directorate: "A/Engineering", team: "Renewable Energy (Renergy)" },

  // Coffee and Tea Directorate (1407-1466)
  { startNo: 1407, endNo: 1412, center: "BARC", directorate: "Coffee and Tea", team: "Coffee & Tea Improvement" },
  { startNo: 1413, endNo: 1415, center: "Bore", directorate: "Coffee and Tea", team: "Coffee & Tea Improvement" },
  { startNo: 1416, endNo: 1420, center: "Bore", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },
  { startNo: 1421, endNo: 1423, center: "Bedele", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },
  { startNo: 1424, endNo: 1425, center: "Bedele", directorate: "Coffee and Tea", team: "Coffee & Tea Improvement" },
  { startNo: 1426, endNo: 1426, center: "Bedele", directorate: "Coffee and Tea", team: "Coffee & Tea Quality" },
  { startNo: 1427, endNo: 1431, center: "Harosabu", directorate: "Coffee and Tea", team: "Coffee & Tea Improvement" },
  { startNo: 1432, endNo: 1432, center: "Harosabu", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },
  { startNo: 1433, endNo: 1448, center: "Mechara", directorate: "Coffee and Tea", team: "Coffee & Tea Improvement" },
  { startNo: 1449, endNo: 1450, center: "Mechara", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },
  { startNo: 1451, endNo: 1451, center: "Mechara", directorate: "Coffee and Tea", team: "Coffee & Tea Management & Protection" },
  { startNo: 1452, endNo: 1453, center: "Mechara", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },
  { startNo: 1454, endNo: 1454, center: "Mechara", directorate: "Coffee and Tea", team: "Coffee & Tea Management & Protection" },
  { startNo: 1455, endNo: 1458, center: "Mechara", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },
  { startNo: 1459, endNo: 1460, center: "SARC", directorate: "Coffee and Tea", team: "Coffee & Tea Improvement" },
  { startNo: 1461, endNo: 1461, center: "SARC", directorate: "Coffee and Tea", team: "Coffee & Tea Management & Protection" },
  { startNo: 1462, endNo: 1462, center: "SARC", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },
  { startNo: 1463, endNo: 1463, center: "SARC", directorate: "Coffee and Tea", team: "Coffee & Tea Management & Protection" },
  { startNo: 1464, endNo: 1466, center: "SARC", directorate: "Coffee and Tea", team: "Coffee & Tea Management" },

  // Natural Resource Directorate (1467-1734)
  { startNo: 1467, endNo: 1476, center: "ATARC", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1477, endNo: 1492, center: "BARC", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1493, endNo: 1505, center: "BSRC", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1506, endNo: 1509, center: "BEARC", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1510, endNo: 1517, center: "Bore", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1518, endNo: 1529, center: "Fedis", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1530, endNo: 1538, center: "Fitche", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1539, endNo: 1540, center: "Harosabu", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1541, endNo: 1545, center: "Mechara", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1546, endNo: 1561, center: "Nekemte", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1562, endNo: 1574, center: "SARC", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1575, endNo: 1579, center: "YPDARC", directorate: "Natural Resource", team: "Soil Fertility Improvement (SFI)" },
  { startNo: 1580, endNo: 1588, center: "SARC", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1589, endNo: 1596, center: "YPDARC", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1597, endNo: 1612, center: "ATARC", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1613, endNo: 1615, center: "Fitche", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1616, endNo: 1624, center: "BSRC", directorate: "Natural Resource", team: "Soil Resource Survey (SRS)" },
  { startNo: 1625, endNo: 1631, center: "Bedele", directorate: "Natural Resource", team: "Soil Resource Survey (SRS)" },
  { startNo: 1632, endNo: 1633, center: "Fitche", directorate: "Natural Resource", team: "Soil Resource Survey (SRS)" },
  { startNo: 1634, endNo: 1638, center: "Nekemte", directorate: "Natural Resource", team: "Soil Resource Survey (SRS)" },
  { startNo: 1639, endNo: 1656, center: "Fedis", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1657, endNo: 1662, center: "Harosabu", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1663, endNo: 1676, center: "Mechara", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1677, endNo: 1683, center: "ATARC", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1684, endNo: 1686, center: "BEARC", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1687, endNo: 1693, center: "Fitche", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1694, endNo: 1698, center: "Fedis", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1699, endNo: 1702, center: "Mechara", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1703, endNo: 1705, center: "Nekemte", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1706, endNo: 1713, center: "SARC", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1714, endNo: 1715, center: "YPDARC", directorate: "Natural Resource", team: "Soil & Water Conservation (SWC)" },
  { startNo: 1716, endNo: 1724, center: "BARC", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1725, endNo: 1731, center: "Bore", directorate: "Natural Resource", team: "Agroforestry (AF)" },
  { startNo: 1732, endNo: 1734, center: "BEARC", directorate: "Natural Resource", team: "Agroforestry (AF)" }
];

// Exact authentic decision quotas per (Center x Directorate) cell derived from Table 1 & Table 2
const EXACT_CELL_ALLOCATION: Record<string, { mod: number; cond: number; rej: number; pended: number; merged: number; acc: number }> = {
  "ATARC___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 13,
    "pended": 1,
    "merged": 0,
    "acc": 35
  },
  "BARC___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 83
  },
  "Bedele___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 22
  },
  "Bore___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 46
  },
  "Fedis___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 66
  },
  "Fitche___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 20
  },
  "Harosabu___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 30
  },
  "SARC___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 81
  },
  "Mechara___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 27
  },
  "YPDARC___Crop": {
    "mod": 0,
    "cond": 0,
    "rej": 12,
    "pended": 0,
    "merged": 0,
    "acc": 16
  },
  "ATARC___Livestock": {
    "mod": 14,
    "cond": 2,
    "rej": 47,
    "pended": 1,
    "merged": 0,
    "acc": 37
  },
  "BARC___Livestock": {
    "mod": 6,
    "cond": 0,
    "rej": 34,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Bedele___Livestock": {
    "mod": 0,
    "cond": 0,
    "rej": 7,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Bore___Livestock": {
    "mod": 0,
    "cond": 0,
    "rej": 24,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Fedis___Livestock": {
    "mod": 1,
    "cond": 0,
    "rej": 20,
    "pended": 0,
    "merged": 0,
    "acc": 4
  },
  "Fitche___Livestock": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 5
  },
  "Fishery___Livestock": {
    "mod": 0,
    "cond": 0,
    "rej": 3,
    "pended": 0,
    "merged": 0,
    "acc": 21
  },
  "Harosabu___Livestock": {
    "mod": 1,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 10
  },
  "HBRC___Livestock": {
    "mod": 1,
    "cond": 0,
    "rej": 5,
    "pended": 0,
    "merged": 0,
    "acc": 16
  },
  "Mechara___Livestock": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 20
  },
  "SARC___Livestock": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 25
  },
  "YPDARC___Livestock": {
    "mod": 6,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 30
  },
  "Asela___SEAE": {
    "mod": 0,
    "cond": 3,
    "rej": 7,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "ATARC___SEAE": {
    "mod": 0,
    "cond": 2,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 21
  },
  "ATO___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 1
  },
  "BEARC___SEAE": {
    "mod": 0,
    "cond": 8,
    "rej": 3,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "BARC___SEAE": {
    "mod": 0,
    "cond": 10,
    "rej": 5,
    "pended": 0,
    "merged": 0,
    "acc": 3
  },
  "Fishery___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 2,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Bedele___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 1,
    "pended": 0,
    "merged": 0,
    "acc": 6
  },
  "Bore___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 9,
    "pended": 0,
    "merged": 0,
    "acc": 10
  },
  "Fedis___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 6,
    "pended": 0,
    "merged": 0,
    "acc": 13
  },
  "Fitche___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 9
  },
  "HBRC___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 4
  },
  "Harosabu___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 15
  },
  "Jimma___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 11
  },
  "Mechara___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 10
  },
  "Nekemte___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 3
  },
  "SARC___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 12
  },
  "YPDARC___SEAE": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 9
  },
  "SARC___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 37,
    "pended": 2,
    "merged": 0,
    "acc": 6
  },
  "ATARC___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 1,
    "merged": 0,
    "acc": 10
  },
  "BARC___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 37
  },
  "Bedele___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 3
  },
  "Bore___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 24
  },
  "Fedis___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 7
  },
  "Fitche___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 4
  },
  "Harosabu___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 13
  },
  "Mechara___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 5
  },
  "YPDARC___Protection": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 9
  },
  "ATARC___Biotechnology": {
    "mod": 0,
    "cond": 0,
    "rej": 9,
    "pended": 10,
    "merged": 0,
    "acc": 6
  },
  "Nekemte___Biotechnology": {
    "mod": 0,
    "cond": 0,
    "rej": 2,
    "pended": 2,
    "merged": 0,
    "acc": 0
  },
  "Biotechnology___Biotechnology": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 1
  },
  "Food Science___Food Science": {
    "mod": 0,
    "cond": 0,
    "rej": 4,
    "pended": 3,
    "merged": 0,
    "acc": 22
  },
  "Asela___A/Engineering": {
    "mod": 0,
    "cond": 0,
    "rej": 6,
    "pended": 0,
    "merged": 0,
    "acc": 21
  },
  "BEARC___A/Engineering": {
    "mod": 0,
    "cond": 0,
    "rej": 18,
    "pended": 0,
    "merged": 0,
    "acc": 20
  },
  "Fedis___A/Engineering": {
    "mod": 0,
    "cond": 10,
    "rej": 25,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Jimma___A/Engineering": {
    "mod": 0,
    "cond": 7,
    "rej": 36,
    "pended": 0,
    "merged": 0,
    "acc": 12
  },
  "HBRC___A/Engineering": {
    "mod": 0,
    "cond": 2,
    "rej": 5,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "ATARC___A/Engineering": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 14
  },
  "YPDARC___A/Engineering": {
    "mod": 0,
    "cond": 1,
    "rej": 3,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "SARC___A/Engineering": {
    "mod": 0,
    "cond": 4,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Harosabu___A/Engineering": {
    "mod": 0,
    "cond": 0,
    "rej": 3,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "BARC___A/Engineering": {
    "mod": 0,
    "cond": 2,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 7
  },
  "Mechara___A/Engineering": {
    "mod": 0,
    "cond": 1,
    "rej": 2,
    "pended": 0,
    "merged": 0,
    "acc": 2
  },
  "Fitche___A/Engineering": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 6
  },
  "Bore___A/Engineering": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 7
  },
  "BARC___Coffee and Tea": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 2,
    "merged": 0,
    "acc": 4
  },
  "Bore___Coffee and Tea": {
    "mod": 0,
    "cond": 7,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 1
  },
  "Bedele___Coffee and Tea": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 6
  },
  "Harosabu___Coffee and Tea": {
    "mod": 0,
    "cond": 0,
    "rej": 6,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Mechara___Coffee and Tea": {
    "mod": 4,
    "cond": 0,
    "rej": 17,
    "pended": 0,
    "merged": 0,
    "acc": 5
  },
  "SARC___Coffee and Tea": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 8
  },
  "ATARC___Natural Resource": {
    "mod": 0,
    "cond": 0,
    "rej": 11,
    "pended": 0,
    "merged": 0,
    "acc": 22
  },
  "BARC___Natural Resource": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 1,
    "merged": 0,
    "acc": 24
  },
  "BSRC___Natural Resource": {
    "mod": 0,
    "cond": 3,
    "rej": 6,
    "pended": 0,
    "merged": 0,
    "acc": 13
  },
  "BEARC___Natural Resource": {
    "mod": 0,
    "cond": 0,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 10
  },
  "Bore___Natural Resource": {
    "mod": 0,
    "cond": 2,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 13
  },
  "Fedis___Natural Resource": {
    "mod": 0,
    "cond": 0,
    "rej": 2,
    "pended": 0,
    "merged": 0,
    "acc": 33
  },
  "Fitche___Natural Resource": {
    "mod": 0,
    "cond": 6,
    "rej": 12,
    "pended": 0,
    "merged": 0,
    "acc": 3
  },
  "Harosabu___Natural Resource": {
    "mod": 0,
    "cond": 0,
    "rej": 7,
    "pended": 0,
    "merged": 0,
    "acc": 1
  },
  "Mechara___Natural Resource": {
    "mod": 0,
    "cond": 6,
    "rej": 14,
    "pended": 1,
    "merged": 0,
    "acc": 2
  },
  "Nekemte___Natural Resource": {
    "mod": 0,
    "cond": 3,
    "rej": 12,
    "pended": 0,
    "merged": 0,
    "acc": 9
  },
  "SARC___Natural Resource": {
    "mod": 0,
    "cond": 1,
    "rej": 7,
    "pended": 0,
    "merged": 0,
    "acc": 22
  },
  "YPDARC___Natural Resource": {
    "mod": 0,
    "cond": 0,
    "rej": 15,
    "pended": 0,
    "merged": 0,
    "acc": 0
  },
  "Bedele___Natural Resource": {
    "mod": 0,
    "cond": 4,
    "rej": 0,
    "pended": 0,
    "merged": 0,
    "acc": 3
  }
};

export function generateFullConceptNotes(): ConceptNote[] {
  const notes: ConceptNote[] = [];

  // 1. First assign Center, Directorate, Team, and Titles
  const rawNotes: {
    no: number;
    center: string;
    directorate: string;
    team: string;
    title: string;
    initiators: string;
    comments?: string;
  }[] = [];

  for (let i = 1; i <= 1734; i++) {
    const mapping = CENTER_DIRECTORATE_TEAMS.find((m) => i >= m.startNo && i <= m.endNo) || {
      center: "BARC",
      directorate: "Crop",
      team: "Cereals"
    };

    const sample = SAMPLE_TITLES.find((s) => s.no === i);
    const title = sample ? sample.title : `Technical Evaluation on ${mapping.team} Optimization in ${mapping.center} Agroecology (CN-${i})`;
    const initiators = sample ? sample.initiators : `${mapping.center} ${mapping.team} Research Team`;
    const comments = sample?.comments;

    rawNotes.push({
      no: i,
      center: mapping.center,
      directorate: mapping.directorate,
      team: mapping.team,
      title,
      initiators,
      comments
    });
  }

  // 2. Assign decisions matching exact authentic quotas per (center, directorate)
  const cellNotesMap = new Map<string, typeof rawNotes>();
  for (const rn of rawNotes) {
    const k = `${rn.center}___${rn.directorate}`;
    if (!cellNotesMap.has(k)) cellNotesMap.set(k, []);
    cellNotesMap.get(k)!.push(rn);
  }

  for (const [cellKey, cNotes] of cellNotesMap) {
    const alloc = EXACT_CELL_ALLOCATION[cellKey]
      ? { ...EXACT_CELL_ALLOCATION[cellKey] }
      : { mod: 0, cond: 0, rej: 0, pended: 0, merged: 0, acc: cNotes.length };

    for (const rn of cNotes) {
      let decision: DecisionType = "Accepted";
      if (alloc.mod > 0) {
        decision = "Accepted with modification";
        alloc.mod--;
      } else if (alloc.cond > 0) {
        decision = "Conditionally Accepted";
        alloc.cond--;
      } else if (alloc.pended > 0) {
        decision = "Pended";
        alloc.pended--;
      } else if (alloc.rej > 0) {
        decision = "Rejected";
        alloc.rej--;
      } else {
        decision = "Accepted";
        alloc.acc--;
      }

      notes.push({
        no: rn.no,
        center: rn.center,
        directorate: rn.directorate,
        team: rn.team,
        title: rn.title,
        initiators: rn.initiators,
        decision,
        comments: rn.comments || (decision === "Conditionally Accepted" ? "Requires revision of treatments and location checks" : decision === "Accepted with modification" ? "Include parental lines with agronomic traits and verified standard checks" : undefined),
        evaluatedAt: "2026-09-12"
      });
    }
  }

  // Sort back by concept note number 1..1734
  return notes.sort((a, b) => a.no - b.no);
}

// Recalculates exact performance metrics per team dynamically from any array of Concept Notes
export function calculateTeamStats(notes: ConceptNote[]): TeamStat[] {
  const teamMap = new Map<string, {
    name: string;
    directorate: string;
    submitted: number;
    accepted: number;
    acceptedWithMod: number;
    condAccepted: number;
    rejected: number;
    pended: number;
    merged: number;
    centers: Set<string>;
  }>();

  for (const n of notes) {
    const key = `${n.team}___${n.directorate}`;
    if (!teamMap.has(key)) {
      teamMap.set(key, {
        name: n.team,
        directorate: n.directorate,
        submitted: 0,
        accepted: 0,
        acceptedWithMod: 0,
        condAccepted: 0,
        rejected: 0,
        pended: 0,
        merged: 0,
        centers: new Set()
      });
    }
    const t = teamMap.get(key)!;
    t.submitted++;
    t.centers.add(n.center);
    if (n.decision === "Accepted") {
      t.accepted++;
    } else if (n.decision === "Accepted with modification") {
      t.acceptedWithMod++;
    } else if (n.decision === "Conditionally Accepted") {
      t.condAccepted++;
    } else if (n.decision === "Pended") {
      t.pended++;
    } else if (n.decision === "Merged") {
      t.merged++;
    } else {
      t.rejected++;
    }
  }

  return Array.from(teamMap.values())
    .map((t) => {
      const approved = t.accepted + t.acceptedWithMod + t.condAccepted;
      return {
        name: t.name,
        directorate: t.directorate,
        submitted: t.submitted,
        accepted: t.accepted,
        acceptedWithMod: t.acceptedWithMod,
        condAccepted: t.condAccepted,
        rejected: t.rejected,
        pended: t.pended,
        merged: t.merged,
        acceptanceRate: t.submitted > 0 ? Number(((approved / t.submitted) * 100).toFixed(1)) : 0,
        centersCount: t.centers.size
      };
    })
    .sort((a, b) => b.submitted - a.submitted);
}

export const ALL_CONCEPT_NOTES: ConceptNote[] = generateFullConceptNotes();
