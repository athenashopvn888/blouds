import type { ResourceFaq, ResourceLink, ResourcePage, ResourceSection } from "./resourceData.ts";

const published = "2026-09-07";
const flowerHub = "/resources/weed-flower-guides";
const basicsHub = "/resources/cannabis-101";
const resourcesHub = "/resources";

type NewArticle = {
  path: string;
  parent: string;
  label: string;
  title: string;
  seoTitle: string;
  meta: string;
  h1: string;
  intro: string[];
  sections: ResourceSection[];
  faqs: ResourceFaq[];
  links: ResourceLink[];
  related: string[];
};

function article(input: NewArticle): ResourcePage {
  const hasResourceCentre = input.links.some((link) => link.href === resourcesHub);
  return {
    path: input.path,
    kind: "article",
    parent: input.parent,
    categoryLabel: input.label,
    title: input.title,
    seoTitle: input.seoTitle,
    metaDescription: input.meta,
    h1: input.h1,
    excerpt: input.meta,
    primaryKeyword: input.title,
    supportingKeywords: input.title.split(/\s+/).slice(0, 5),
    searchIntent: `Learn about ${input.title.toLowerCase()}.`,
    author: "team",
    datePublished: published,
    dateModified: published,
    image: { src: "/banners/Blouds_Welcome_Banner.webp", alt: `${input.title} guide from Blouds Dispensary` },
    intro: input.intro,
    sections: input.sections,
    faqs: input.faqs,
    commercialLinks: hasResourceCentre ? input.links : [...input.links, { label: "Resource Centre", href: resourcesHub }],
    related: input.related,
  };
}

const faq = (...items: [string, string][]): ResourceFaq[] => items.map(([question, answer]) => ({ question, answer }));
const links = (...items: [string, string][]): ResourceLink[] => items.map(([label, href]) => ({ label, href }));

export const ADC_V2_NEW_PAGES: ResourcePage[] = [
  article({
    path: basicsHub,
    parent: resourcesHub,
    label: "Cannabis Basics",
    title: "Cannabis 101",
    seoTitle: "Cannabis 101 Brampton | Blouds Dispensary",
    meta: "A practical Cannabis 101 guide to flower, pre-rolls, edibles, THC vapes, Weed tiers, THC, genetics and common cannabis terms for adults 19+.",
    h1: "Cannabis 101: Start With the Product Category",
    intro: ["A cannabis menu is much easier when you begin with one simple question: What type of product are you actually looking at?", "Blouds Dispensary already separates the menu into different categories. Learn the category first. Then read the current product information inside it."],
    sections: [
      { heading: "Flower", body: ["Flower, bud and Weed are common ways adults refer to dried cannabis flower.", "Blouds Dispensary organizes flower into five established Weed categories: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed.", "Those categories help narrow the menu. They are not one universal Canadian government grading system."] },
      { heading: "Pre-Rolls", body: ["Pre-rolls are prepared cannabis rolls. Compare them as their own format.", "Useful details can include pack count, total weight, product name, package details and current price.", "Loose-flower tier language does not need to be forced onto every pre-roll."] },
      { heading: "Edibles", body: ["Edibles are cannabis-containing foods or beverages. Read the actual product and package information because format and serving information differ from flower."] },
      { heading: "THC Vapes", body: ["THC vapes are cannabis products. They must remain separate from nicotine vapes.", "Do not use nicotine-vape product terminology as if it describes THC vape products."] },
      { heading: "Concentrates", body: ["Cannabis concentrates contain cannabis constituents in a more concentrated format than dried flower. The product format and current label should guide the comparison."] },
      { heading: "Nicotine Pouches and Cigarettes Are Separate", body: ["Nicotine pouches and commercial cigarettes are nicotine/tobacco products. They are not cannabis categories.", "Blouds already has separate education lanes for those products. Keep them separate."] },
      { heading: "Weed, Cannabis, Bud and Flower Are Not Grades", body: ["Cannabis is the formal term. Weed is everyday language. Bud and flower commonly describe dried cannabis flower. Nug or nugs is informal language for pieces of flower.", "None of those words tells you the product's quality or potency."] },
      { heading: "The Five Weed Categories Are Menu Navigation", body: ["Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed help adults narrow the flower browse.", "Use the category as a starting point. Use the current product listing for the specific product details."] },
      { heading: "THC Is Important but Not the Whole Flower", body: ["THC is important regulated product information.", "It does not directly describe aroma, trim, cure, moisture, visible trichomes, bud structure, freshness or personal preference.", "A bigger THC number should not automatically become the whole quality decision."] },
      { heading: "Indica, Sativa and Hybrid Are Familiar Starting Labels", body: ["These labels remain common on cannabis menus. Modern commercial cannabis has extensive crossbreeding.", "Use the label as one clue, not a guaranteed effect prediction."] },
      { heading: "Translate the Slang", body: ["Gas usually refers to a fuel-like aroma. Loud means the aroma is pronounced. Frosty points toward visible trichomes.", "Fire means someone considers the product very good. Mids suggests middle-of-the-road quality in that person's opinion. Quads is common Canadian slang for AAAA. Zaza is newer slang often associated with premium or exotic-positioned Weed."] },
    ],
    faqs: faq(
      ["Is Weed the same thing as cannabis?", "Weed is common informal language for cannabis."],
      ["Are the five Blouds Weed categories official government grades?", "No. They are store browsing categories, not one universal government grading system."],
      ["Does higher THC automatically mean better flower?", "No. THC is one important measurement and does not describe every flower characteristic."],
      ["Are THC vapes and nicotine vapes the same thing?", "No. THC vapes are cannabis products, while nicotine vapes belong in a separate nicotine category."],
      ["Where should I check current products and prices?", "Use the current category and product pages."]
    ),
    links: links(["Menu Guide", "/resources/menu-guide"], ["Weed & Flower Guides", flowerHub], ["Indica, Sativa and Hybrid", `${basicsHub}/indica-sativa-hybrid`], ["Strain vs Cultivar", `${basicsHub}/strain-vs-cultivar`], ["Landrace vs Hybrid", `${basicsHub}/landrace-vs-hybrid`], ["Weed Slang Glossary", `${basicsHub}/weed-slang-glossary`], ["Queen Street Visit Guide", "/resources/local-guides/queen-street-brampton-visit-guide"], ["Cannabis Dispensary vs Weed Dispensary", "/resources/cannabis-dispensary-vs-weed-dispensary"]),
    related: [flowerHub, "/resources/menu-guide", "/resources/local-guides/queen-street-brampton-visit-guide"],
  }),
  article({
    path: `${flowerHub}/what-does-good-weed-mean`, parent: flowerHub, label: "Flower Quality", title: "What Does Good Weed Mean?", seoTitle: "What Does Good Weed Mean? | Blouds Dispensary", meta: "Learn how aroma, cure, trichomes, freshness, structure, value and preference can all shape what adults mean by “good Weed.”", h1: "What Does “Good Weed” Actually Mean?",
    intro: ["“Good Weed” is not one official grade.", "Adults often use the phrase to combine aroma, appearance, trichomes, cure, freshness, genetics, value and personal preference.", "The more useful question is: What characteristic is making the flower good to you?"],
    sections: [
      { heading: "Aroma", body: ["A strong or distinctive aroma can shape the first impression of flower. Common words include gas, citrus, fruit, pine, earth, skunk and sweet. Aroma alone does not prove potency."] },
      { heading: "Trichomes", body: ["Visible trichomes can make flower look frosty. They are one useful visual characteristic. They are not an exact THC meter."] },
      { heading: "Trim and Structure", body: ["Bud shape, density and trim affect presentation. Those visual details do not tell the entire product story."] },
      { heading: "Cure and Freshness", body: ["Drying, curing, packaging and storage influence how finished flower feels and smells. A well-grown flower can still lose desirable qualities through poor handling."] },
      { heading: "THC", body: ["THC matters to intoxicating potency. It does not directly score aroma, trim, moisture, cure, trichome appearance, bud size or personal preference."] },
      { heading: "Value", body: ["A lower-priced product is not automatically bad. A higher-priced product is not automatically better. Price is one part of a value decision."] },
    ],
    faqs: faq(["Does high THC mean good Weed?", "Not by itself."], ["What does fire Weed mean?", "It is slang for cannabis someone considers very good."], ["Does frosty Weed automatically mean stronger Weed?", "No. Visible frost does not provide an exact potency reading."], ["Is expensive Weed always better?", "No."], ["What should adults compare?", "Use the product information together with aroma, trim, structure, trichomes, cure, freshness and personal preference."]),
    links: links(["Weed & Flower Guides", flowerHub], ["THC vs Weed Quality", `${flowerHub}/thc-vs-weed-quality`], ["Bag Appeal", `${flowerHub}/bag-appeal`], ["Frosty Weed & Trichomes", `${flowerHub}/trichomes-frosty-weed`], ["Drying, Curing & Freshness", `${flowerHub}/drying-curing-freshness`], ["Premium Weed", "/premium-weed"]),
    related: [`${flowerHub}/thc-vs-weed-quality`, `${flowerHub}/bag-appeal`, `${flowerHub}/drying-curing-freshness`],
  }),
  article({
    path: `${flowerHub}/top-shelf-mids-quads`, parent: flowerHub, label: "Weed Grades", title: "Top Shelf, Mids and Quads", seoTitle: "Top Shelf vs Mids vs Quads | Weed Grades Explained", meta: "Learn how top shelf, mids, quads, AAAA, AAA+, AA, Premium and Exotic fit into common Canadian Weed terminology.", h1: "Top Shelf, Mids, Quads, AAAA, AAA+ and AA Explained",
    intro: ["Cannabis has a long history of informal grade language.", "Adults may hear top shelf, mids, quads, AAAA, AAA, AAA+, AA, Premium and Exotic.", "These terms can help people communicate quickly. They do not come from one universal government grading system."],
    sections: [
      { heading: "Top Shelf", body: ["Top shelf generally means premium positioning. Someone may be reacting to genetics, aroma, trim, cure, presentation or scarcity."] },
      { heading: "Mids", body: ["Mids means cannabis someone considers middle-of-the-road. It is subjective. One person may mean ordinary aroma. Another may mean average appearance or value."] },
      { heading: "Quads / AAAA", body: ["Quads is common Canadian slang for AAAA. It usually signals premium positioning. It does not require one exact THC percentage."] },
      { heading: "AAA and AAA+", body: ["AAA is familiar retail shorthand. AAA+ suggests a higher-positioned lane than basic AAA terminology. At Blouds Dispensary, AAA+ Weed is a dedicated menu category."] },
      { heading: "AA", body: ["AA is another familiar retail grade term. At Blouds Dispensary, AA Weed is its own category."] },
      { heading: "Premium and Exotic", body: ["Premium and Exotic can both signal higher-positioned flower. They are not identical terms. Exotic often carries stronger associations with distinctive genetics, rarity, aroma or presentation."] },
      { heading: "THC Is Not the Grade", body: ["Do not turn informal grade terms into fixed THC brackets. THC and grade terminology are different pieces of information."] },
    ],
    faqs: faq(["What are quads?", "Quads is common Canadian slang for AAAA."], ["What does mids mean?", "It is informal language for cannabis someone considers middle-tier."], ["Is top shelf the same as Exotic Weed?", "Not necessarily."], ["Does AAAA require a certain THC level?", "No universal rule ties AAAA to one THC percentage."], ["Are Blouds Dispensary's Weed categories changing?", "No. Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed remain the established categories."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Exotic Weed", "/exotic-weed"], ["Premium Weed", "/premium-weed"], ["AAA+ Weed", "/aaa-weed"], ["AA Weed", "/aa-weed"], ["Budget Weed", "/budget-weed"], ["Weed Slang Glossary", `${basicsHub}/weed-slang-glossary`]),
    related: [`${basicsHub}/weed-slang-glossary`, `${flowerHub}/thc-vs-weed-quality`],
  }),
  article({
    path: `${flowerHub}/thc-vs-weed-quality`, parent: flowerHub, label: "Flower Quality", title: "THC vs Weed Quality", seoTitle: "THC vs Weed Quality | Blouds Dispensary", meta: "THC matters, but it is not a complete cannabis flower-quality score. Learn what other characteristics adults may compare.", h1: "Does Higher THC Mean Better Weed?",
    intro: ["THC is one of the easiest cannabis numbers to compare. That makes it useful. It also makes it easy to give the number too much importance."],
    sections: [
      { heading: "What THC Tells You", body: ["THC is relevant to intoxicating potency. Use the legal product information for the specific product."] },
      { heading: "What THC Does Not Tell You", body: ["THC does not directly describe aroma, trim, moisture, cure, freshness, bud structure, visible trichomes or personal preference."] },
      { heading: "Aroma and THC Are Different", body: ["Strong aroma does not automatically mean high THC. High THC does not automatically mean strong aroma."] },
      { heading: "Appearance and THC Are Different", body: ["A frosty-looking product can have visible trichomes. A photograph cannot tell you the exact THC amount."] },
      { heading: "Storage and Cure Are Different", body: ["A THC number cannot tell you whether flower has become too dry or lost aroma."] },
      { heading: "Maximum Potency Is Not Automatically Best", body: ["Higher-potency cannabis may increase the likelihood of unwanted effects. The biggest number should not automatically be presented as the best choice."] },
    ],
    faqs: faq(["Does higher THC mean stronger cannabis?", "THC is relevant to intoxicating potency."], ["Does higher THC automatically mean a higher Weed tier?", "No."], ["Can products with similar THC still be different?", "Yes."], ["Should someone automatically choose the highest THC?", "No."], ["Where is the real THC amount shown?", "Use the legal product information for the specific product."]),
    links: links(["Cannabis 101", basicsHub], ["Weed & Flower Guides", flowerHub], ["What Does Good Weed Mean?", `${flowerHub}/what-does-good-weed-mean`], ["Gas, Loud & Terpy", `${flowerHub}/terpenes-gas-loud-aroma`], ["Budget Weed", "/budget-weed"]),
    related: [`${flowerHub}/what-does-good-weed-mean`, `${flowerHub}/terpenes-gas-loud-aroma`],
  }),
  article({
    path: `${flowerHub}/bag-appeal`, parent: flowerHub, label: "Flower Quality", title: "Cannabis Bag Appeal", seoTitle: "Cannabis Bag Appeal Explained | Blouds Dispensary", meta: "Learn what bag appeal means, what adults notice when looking at cannabis flower and why appearance alone cannot prove quality.", h1: "Bag Appeal: What the First Look Tells You",
    intro: ["Bag appeal is Weed slang for visual first impression.", "Adults may notice bud size, shape, trim, colour, visible trichomes and how intact the flower looks."],
    sections: [
      { heading: "Colour Is Not a Grade", body: ["Purple, green and orange tones can come from genetics and plant pigments. Colour alone does not prove potency or quality."] },
      { heading: "Frost Looks Different Under Different Lighting", body: ["Close-up photography and bright light can make trichomes look more dramatic. Photos are presentation tools, not potency tests."] },
      { heading: "Trim Affects Presentation", body: ["A tighter trim can make bud structure look cleaner. A looser trim may leave more small leaf material. Neither provides an exact THC reading."] },
      { heading: "Big Buds Have More Visual Impact", body: ["Large buds can look impressive. Smalls can still come from the same plant or batch."] },
      { heading: "Photos Cannot Show Everything", body: ["A photo cannot reliably tell you moisture, brittleness, package age or full storage history."] },
    ],
    faqs: faq(["What is bag appeal?", "The visual first impression of cannabis flower."], ["Do purple buds automatically mean better Weed?", "No."], ["Are large buds automatically stronger?", "No."], ["Does more visible frost mean higher THC?", "Not necessarily."], ["Can lighting change how flower appears?", "Yes."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Frosty Weed & Trichomes", `${flowerHub}/trichomes-frosty-weed`], ["Smalls vs Big Buds", `${flowerHub}/smalls-vs-big-buds`], ["Drying, Curing & Freshness", `${flowerHub}/drying-curing-freshness`], ["Exotic Weed", "/exotic-weed"]),
    related: [`${flowerHub}/trichomes-frosty-weed`, `${flowerHub}/smalls-vs-big-buds`],
  }),
  article({
    path: `${flowerHub}/trichomes-frosty-weed`, parent: flowerHub, label: "Flower Quality", title: "Frosty Weed and Trichomes", seoTitle: "Frosty Weed & Trichomes Explained | Blouds Dispensary", meta: "Learn what cannabis trichomes are, why some flower looks frosty and why visible resin is only one quality clue.", h1: "Frosty Weed: What Are Those Crystals?",
    intro: ["When adults describe Weed as frosty, they are usually talking about visible trichomes.", "Trichomes are tiny resin-producing structures on the cannabis plant."],
    sections: [
      { heading: "Why Trichomes Get Attention", body: ["They are visible. They photograph well. They are associated with compounds people care about in cannabis."] },
      { heading: "Frost Is Only One Clue", body: ["A frosty bud still has genetics, a producer, a cure, moisture, storage history and regulated THC/CBD information."] },
      { heading: "Handling Matters", body: ["Processing and handling can damage or remove some trichomes."] },
      { heading: "A Photo Is Not a THC Test", body: ["Visible frost does not provide an exact THC measurement."] },
      { heading: "Trichomes and Aroma", body: ["Aromatic compounds including terpenes are associated with glandular structures. That does not mean the frostiest-looking flower must have the strongest aroma."] },
    ],
    faqs: faq(["What are cannabis trichomes?", "Small resin-producing structures on the cannabis plant."], ["Does frosty Weed always have higher THC?", "No."], ["Can handling damage trichomes?", "Yes."], ["Do trichomes relate to aroma?", "They are connected to resin-producing structures, but aroma depends on the whole product."], ["How do I know the actual THC amount?", "Read the legal product information."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Bag Appeal", `${flowerHub}/bag-appeal`], ["Gas, Loud & Terpy", `${flowerHub}/terpenes-gas-loud-aroma`], ["THC vs Weed Quality", `${flowerHub}/thc-vs-weed-quality`], ["Exotic Weed", "/exotic-weed"]),
    related: [`${flowerHub}/bag-appeal`, `${flowerHub}/terpenes-gas-loud-aroma`],
  }),
  article({
    path: `${flowerHub}/terpenes-gas-loud-aroma`, parent: flowerHub, label: "Cannabis Aroma", title: "Gas, Loud and Terpy Weed", seoTitle: "Gas, Loud & Terpy Weed | Cannabis Aroma Explained", meta: "Learn what adults mean by gas, loud, skunky, fruity and terpy when describing cannabis aroma.", h1: "Gas, Loud and Terpy: Understanding Cannabis Aroma",
    intro: ["Cannabis aroma has both technical words and everyday Weed vocabulary.", "Adults may talk about terpenes, gas, loud, skunk, fruit, pine or earth."],
    sections: [
      { heading: "Terpenes", body: ["Terpenes are aromatic compounds found in many plants, including cannabis. They contribute to aroma and flavour. Use actual product information when exact terpene details matter."] },
      { heading: "Gas", body: ["Gas usually means a fuel-like, diesel-like or sharp pungent aroma. It is an aroma description. It is not a THC grade."] },
      { heading: "Loud", body: ["Loud usually means the cannabis smell is pronounced. A loud flower can smell fruity, gassy, skunky, earthy or sweet."] },
      { heading: "Terpy", body: ["Terpy is slang for a noticeable aroma or flavour profile associated with terpenes. It does not prove exact terpene content."] },
      { heading: "Common Aroma Descriptions", body: ["Citrus, fruity, skunky, earthy, pine, sweet and floral are sensory descriptions. They do not guarantee effects."] },
      { heading: "Aroma Can Change", body: ["Drying, curing, packaging, air, heat and time can influence aroma."] },
      { heading: "Strong Smell Does Not Equal High THC", body: ["Aroma intensity and THC are different characteristics."] },
    ],
    faqs: faq(["What does gas mean?", "Usually a fuel-like or pungent aroma."], ["What does loud mean?", "Usually that the aroma is pronounced."], ["What does terpy mean?", "Slang for a noticeable aroma or flavour profile."], ["Does stronger smell mean higher THC?", "No."], ["Do terpene names guarantee an effect?", "No."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Drying, Curing & Freshness", `${flowerHub}/drying-curing-freshness`], ["Frosty Weed & Trichomes", `${flowerHub}/trichomes-frosty-weed`], ["Weed Slang Glossary", `${basicsHub}/weed-slang-glossary`], ["Premium Weed", "/premium-weed"]),
    related: [`${flowerHub}/drying-curing-freshness`, `${basicsHub}/weed-slang-glossary`],
  }),
  article({
    path: `${flowerHub}/drying-curing-freshness`, parent: flowerHub, label: "Flower Quality", title: "Drying, Curing and Freshness", seoTitle: "Drying, Curing & Cannabis Freshness | Blouds Dispensary", meta: "Learn how drying, curing, moisture, packaging, storage and time can influence cannabis flower after harvest.", h1: "Drying, Curing and Freshness: What Happens After Harvest",
    intro: ["Flower quality does not stop when the plant is harvested.", "Drying, curing, packaging and storage all influence the finished product."],
    sections: [
      { heading: "Drying", body: ["Freshly harvested cannabis contains substantial moisture. Drying reduces that moisture so flower can be handled and stored appropriately."] },
      { heading: "Curing", body: ["Curing is a broad term for controlled conditioning after initial drying. Exact methods vary."] },
      { heading: "Too Dry", body: ["Overly dry flower can become brittle and lose aroma more quickly."] },
      { heading: "Too Much Moisture", body: ["Fresh does not mean wet. Excess moisture creates different storage concerns."] },
      { heading: "Aroma Changes Over Time", body: ["Heat, oxygen, light and time can influence volatile aromatic compounds."] },
      { heading: "Packaging and Storage", body: ["Storage conditions continue to matter after packaging. Adults should follow storage instructions and keep cannabis secured away from children and pets."] },
      { heading: "A Photo Cannot Show Freshness", body: ["A photograph cannot reliably show moisture, brittleness, package age or complete storage history."] },
    ],
    faqs: faq(["What is cannabis drying?", "The post-harvest process of reducing moisture."], ["What is curing?", "Controlled post-drying conditioning."], ["Can drying affect aroma?", "Yes."], ["Does fresh Weed mean wet Weed?", "No."], ["Can a photo prove freshness?", "No."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Gas, Loud & Terpy", `${flowerHub}/terpenes-gas-loud-aroma`], ["Bag Appeal", `${flowerHub}/bag-appeal`], ["Growing Methods", `${flowerHub}/bc-grown-indoor-hydro-outdoor`], ["Premium Weed", "/premium-weed"]),
    related: [`${flowerHub}/terpenes-gas-loud-aroma`, `${flowerHub}/bc-grown-indoor-hydro-outdoor`],
  }),
  article({
    path: `${flowerHub}/smalls-vs-big-buds`, parent: flowerHub, label: "Flower Quality", title: "Smalls vs Big Buds", seoTitle: "Smalls vs Big Buds | Does Weed Bud Size Matter?", meta: "Smalls and larger buds can come from the same plant or batch. Learn what size can tell you and what it cannot.", h1: "Smalls vs Big Buds: Does Size Decide Quality?",
    intro: ["Big buds make a stronger visual impression. Smalls are less dramatic.", "That does not make bud size a complete quality grade."],
    sections: [
      { heading: "Why Bud Size Varies", body: ["Size can be influenced by genetics, plant position, light exposure, cultivation, trimming, handling and packaging."] },
      { heading: "Smalls Can Come From the Same Plant", body: ["Smaller and larger buds can come from the same plant, cultivar or batch."] },
      { heading: "Big Buds Have More Bag Appeal", body: ["Larger buds often display flower structure clearly. That is a presentation advantage, not proof of potency."] },
      { heading: "Small Buds Can Still Be Frosty", body: ["Bud size and trichome coverage are different characteristics."] },
      { heading: "Big Buds Can Still Be Too Dry", body: ["Size does not tell you moisture or storage history."] },
      { heading: "Price Is Separate", body: ["Current pricing can differ by product and package. Use the current listing for current price and package details."] },
    ],
    faqs: faq(["Are small buds weaker?", "Bud size alone does not prove potency."], ["Can smalls come from the same plant as large buds?", "Yes."], ["Are big buds automatically Premium or Exotic?", "No."], ["Can small buds still have visible trichomes?", "Yes."], ["Where should I check current smalls prices?", "Use the current product/category page."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Bag Appeal", `${flowerHub}/bag-appeal`], ["Frosty Weed & Trichomes", `${flowerHub}/trichomes-frosty-weed`], ["Value Guides", "/resources/value-guides"], ["Budget Weed", "/budget-weed"]),
    related: [`${flowerHub}/bag-appeal`, "/resources/value-guides"],
  }),
  article({
    path: `${flowerHub}/bc-grown-indoor-hydro-outdoor`, parent: flowerHub, label: "Cultivation", title: "BC Grown, Indoor, Hydro, Greenhouse and Outdoor Weed", seoTitle: "BC Grown vs Indoor, Hydro, Greenhouse & Outdoor Weed", meta: "Learn the difference between cannabis origin, growing environment and hydroponic cultivation terminology.", h1: "BC Grown, Indoor, Hydro, Greenhouse and Outdoor Weed Explained",
    intro: ["These cannabis terms answer different questions.", "BC grown describes origin. Indoor, outdoor and greenhouse describe growing environments. Hydroponic describes a cultivation method."],
    sections: [
      { heading: "BC Grown", body: ["BC-grown cannabis means cannabis grown in British Columbia. It does not automatically tell you the growing environment, THC level, cure or tier."] },
      { heading: "Indoor", body: ["Indoor cultivation occurs inside a controlled building. Growers can manage light, temperature, humidity and airflow."] },
      { heading: "Outdoor", body: ["Outdoor cultivation uses natural sunlight and outdoor environmental conditions. Outdoor does not automatically mean lower quality."] },
      { heading: "Greenhouse", body: ["Greenhouse cultivation uses a protected structure and usually natural light. Some operations also use supplemental lighting."] },
      { heading: "Hydroponic", body: ["Hydroponic cultivation uses managed water/nutrient systems rather than traditional field soil. Hydroponic systems can be used indoors or in greenhouses."] },
      { heading: "Indoor Does Not Automatically Mean Hydro", body: ["Indoor growers can use soil, soilless media or hydroponic systems."] },
      { heading: "No Method Automatically Wins", body: ["The finished flower also depends on genetics, plant health, harvest timing, drying, curing and storage."] },
    ],
    faqs: faq(["Is BC bud always indoor?", "No."], ["Can hydroponic cannabis be grown indoors?", "Yes."], ["Is outdoor Weed automatically lower quality?", "No."], ["Is greenhouse the same as indoor?", "No."], ["What matters besides cultivation method?", "Genetics, cultivation quality and post-harvest handling all matter."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Craft vs Commercial Cannabis", `${flowerHub}/craft-vs-commercial-cannabis`], ["Drying, Curing & Freshness", `${flowerHub}/drying-curing-freshness`], ["AAA+ Weed", "/aaa-weed"]),
    related: [`${flowerHub}/craft-vs-commercial-cannabis`, `${flowerHub}/drying-curing-freshness`],
  }),
  article({
    path: `${flowerHub}/craft-vs-commercial-cannabis`, parent: flowerHub, label: "Cultivation", title: "Craft vs Commercial Cannabis", seoTitle: "Craft vs Commercial Cannabis | Blouds Dispensary", meta: "Craft and commercial can describe production scale and process, but neither is automatically a quality grade.", h1: "Craft vs Commercial Cannabis: What the Labels Really Describe",
    intro: ["Craft and commercial are often treated like quality grades.", "They are better understood as broad descriptions of production scale and approach."],
    sections: [
      { heading: "Craft Cannabis", body: ["Craft often suggests smaller-scale production, closer batch attention, hands-on cultivation and producer branding centred on growing detail. The term is broad. It does not automatically prove a specific licence class."] },
      { heading: "Commercial Cannabis", body: ["Commercial usually suggests larger-scale production and distribution. Larger operations may emphasize repeatability and standardized processes."] },
      { heading: "Small Does Not Automatically Mean Better", body: ["A small producer can make excellent flower or inconsistent flower. A large producer can make ordinary flower or consistent high-quality flower."] },
      { heading: "Craft Is Not the Same as Exotic", body: ["Craft describes production context. Exotic and Premium describe retail positioning. They may overlap, but they are not synonyms."] },
      { heading: "Compare the Actual Product", body: ["Adults can compare producer, cultivar, THC/CBD, aroma information, trim, structure, trichomes and freshness."] },
    ],
    faqs: faq(["Does craft cannabis always mean a micro licence?", "No."], ["Is commercial cannabis automatically lower quality?", "No."], ["Is craft the same as Premium or Exotic?", "No."], ["What should adults compare?", "Use actual product information and flower characteristics."], ["Can large producers make consistent cannabis?", "Yes."]),
    links: links(["Weed & Flower Guides", flowerHub], ["Growing Methods", `${flowerHub}/bc-grown-indoor-hydro-outdoor`], ["What Does Good Weed Mean?", `${flowerHub}/what-does-good-weed-mean`], ["Exotic Weed", "/exotic-weed"]),
    related: [`${flowerHub}/bc-grown-indoor-hydro-outdoor`, `${flowerHub}/what-does-good-weed-mean`],
  }),
  article({
    path: `${basicsHub}/indica-sativa-hybrid`, parent: basicsHub, label: "Cannabis Genetics", title: "Indica vs Sativa vs Hybrid", seoTitle: "Indica vs Sativa vs Hybrid | Blouds Dispensary", meta: "Indica, Sativa and Hybrid remain familiar cannabis labels, but modern cannabis genetics are heavily crossed.", h1: "Indica vs Sativa vs Hybrid: Useful Labels With Limits",
    intro: ["Indica, Sativa and Hybrid remain familiar cannabis labels. They are useful for navigation.", "They are less useful when treated as guaranteed effect predictions."],
    sections: [
      { heading: "Why the Labels Remain Common", body: ["Adults recognize them quickly. That makes menus easier to scan."] },
      { heading: "Modern Cannabis Is Heavily Crossed", body: ["Commercial cannabis has been bred and crossed extensively. Mixed ancestry is common."] },
      { heading: "Effect Promises Are Too Strong", body: ["Statements such as “Indica always makes you sleepy” or “Sativa always gives energy” are too absolute. Individual response varies."] },
      { heading: "Hybrid Is Normal", body: ["Hybrid ancestry is common in modern cannabis. Hybrid is not a lesser or vague category."] },
      { heading: "Read the Product Beside the Label", body: ["When available, compare product name, producer, cultivar, THC/CBD, format and aroma information."] },
    ],
    faqs: faq(["Are Indica and Sativa exact modern genetic categories?", "Not in a simple retail sense."], ["Is much modern cannabis hybridized?", "Yes, mixed ancestry is common."], ["Does Indica always mean sleepy?", "No."], ["Does Sativa always mean energetic?", "No."], ["What should I read besides the label?", "Use the actual product information."]),
    links: links(["Cannabis 101", basicsHub], ["Strain vs Cultivar", `${basicsHub}/strain-vs-cultivar`], ["Landrace vs Hybrid", `${basicsHub}/landrace-vs-hybrid`], ["THC vs Weed Quality", `${flowerHub}/thc-vs-weed-quality`]),
    related: [`${basicsHub}/strain-vs-cultivar`, `${basicsHub}/landrace-vs-hybrid`],
  }),
  article({
    path: `${basicsHub}/strain-vs-cultivar`, parent: basicsHub, label: "Cannabis Genetics", title: "Strain vs Cultivar", seoTitle: "Strain vs Cultivar | Cannabis Names Explained", meta: "Strain is common cannabis language; cultivar is a horticultural term. Learn why a familiar name does not guarantee identical flower.", h1: "Strain vs Cultivar: Why the Name Is Only Part of the Story",
    intro: ["Cannabis shoppers commonly use the word strain. Growers and horticulture writers may use cultivar. Both can be useful."],
    sections: [
      { heading: "Strain Is Normal Cannabis Vocabulary", body: ["“Strain” is deeply established in cannabis culture. Adults understand it."] },
      { heading: "Cultivar Is a Horticultural Term", body: ["Cultivar means cultivated variety. It focuses attention on the plant line rather than a guaranteed effect."] },
      { heading: "Familiar Names Can Appear Across Different Producers", body: ["Different producers may use different selections, cuts, cultivation methods and growing conditions. Products with similar names may still differ."] },
      { heading: "The Finished Flower Depends on More Than the Name", body: ["Genetics, cultivation, harvest, drying, curing and storage all influence the final product."] },
      { heading: "Names Do Not Guarantee Effects", body: ["A familiar cultivar or strain name should not be used as a guaranteed effect claim."] },
    ],
    faqs: faq(["Is “strain” the wrong word?", "No."], ["What does cultivar mean?", "A cultivated plant variety."], ["Does the same strain name guarantee identical genetics?", "No."], ["Can different producers grow the same named cultivar differently?", "Yes."], ["Does the name guarantee an effect?", "No."]),
    links: links(["Cannabis 101", basicsHub], ["Indica, Sativa and Hybrid", `${basicsHub}/indica-sativa-hybrid`], ["Landrace vs Hybrid", `${basicsHub}/landrace-vs-hybrid`], ["Weed Slang Glossary", `${basicsHub}/weed-slang-glossary`]),
    related: [`${basicsHub}/indica-sativa-hybrid`, `${basicsHub}/landrace-vs-hybrid`],
  }),
  article({
    path: `${basicsHub}/landrace-vs-hybrid`, parent: basicsHub, label: "Cannabis Genetics", title: "Landrace vs Hybrid Cannabis", seoTitle: "Landrace vs Hybrid Cannabis | Genetics Explained", meta: "Learn what landrace and hybrid mean in cannabis genetics and why much modern cannabis has mixed ancestry.", h1: "Landrace vs Hybrid: A Simple Cannabis Genetics Guide",
    intro: ["Landrace and hybrid describe parts of cannabis breeding history. Neither is a quality grade."],
    sections: [
      { heading: "Landrace", body: ["Landrace generally refers to cannabis populations historically associated with long-term adaptation to particular geographic regions."] },
      { heading: "Hybrid", body: ["A hybrid is produced by crossing genetic lines. Breeders may select for characteristics such as structure, aroma, flowering time or cannabinoid profile."] },
      { heading: "Modern Cannabis Has Mixed Ancestry", body: ["Decades of breeding have mixed many cannabis lineages."] },
      { heading: "Landrace Does Not Automatically Mean Better", body: ["Regional history does not automatically mean stronger, safer, more aromatic or more premium."] },
      { heading: "Hybrid Does Not Mean Lower Quality", body: ["Hybrid describes breeding history, not quality."] },
    ],
    faqs: faq(["What is landrace cannabis?", "Cannabis populations historically associated with long-term adaptation to particular regions."], ["Is landrace cannabis “pure”?", "“Pure” is too strong."], ["What is a hybrid cultivar?", "A cultivar created through crossing genetic lines."], ["Is hybrid cannabis lower quality?", "No."], ["Why are so many modern cultivars hybrids?", "Because cannabis has been extensively bred and crossed."]),
    links: links(["Cannabis 101", basicsHub], ["Indica, Sativa and Hybrid", `${basicsHub}/indica-sativa-hybrid`], ["Strain vs Cultivar", `${basicsHub}/strain-vs-cultivar`], ["Growing Methods", `${flowerHub}/bc-grown-indoor-hydro-outdoor`]),
    related: [`${basicsHub}/indica-sativa-hybrid`, `${basicsHub}/strain-vs-cultivar`],
  }),
  article({
    path: `${basicsHub}/weed-slang-glossary`, parent: basicsHub, label: "Cannabis Terms", title: "Weed Slang Glossary", seoTitle: "Weed Slang Glossary | Gas, Loud, Fire, Mids & Quads", meta: "Learn common Weed slang including gas, loud, fire, dank, mids, quads, top shelf, zaza and frosty.", h1: "Weed Slang Explained: Gas, Loud, Fire, Dank, Mids, Quads and More",
    intro: ["Cannabis has formal product vocabulary and everyday Weed slang. Slang becomes useful when it points toward something specific."],
    sections: [
      { heading: "Weed", body: ["Common informal language for cannabis."] },
      { heading: "Bud / Flower / Nugs", body: ["Bud and flower usually refer to dried cannabis flower. Nugs means individual pieces of flower."] },
      { heading: "Fire", body: ["Fire means someone thinks the cannabis is very good. It is subjective."] },
      { heading: "Dank", body: ["Dank is older slang often used positively for strong-smelling or desirable Weed."] },
      { heading: "Gas", body: ["Gas usually describes a fuel-like or diesel-like aroma."] },
      { heading: "Loud", body: ["Loud means the aroma is pronounced."] },
      { heading: "Terpy", body: ["Terpy suggests a noticeable aroma or flavour profile associated with terpenes."] },
      { heading: "Frosty", body: ["Frosty describes visible trichome coverage."] },
      { heading: "Bag Appeal", body: ["Bag appeal means visual first impression."] },
      { heading: "Mids", body: ["Mids means someone considers the Weed middle-of-the-road."] },
      { heading: "Top Shelf", body: ["Top shelf suggests premium positioning."] },
      { heading: "Quads / AAAA", body: ["Quads is common Canadian slang for AAAA."] },
      { heading: "AAA / AAA+", body: ["AAA and AAA+ are common retail grade terms. Blouds uses AAA+ Weed as a dedicated menu category."] },
      { heading: "AA", body: ["AA is another familiar grade shorthand. Blouds uses AA Weed as a dedicated category."] },
      { heading: "Exotic", body: ["Exotic can suggest distinctive genetics, aroma, rarity or high-end presentation."] },
      { heading: "Zaza / Za", body: ["Zaza or za is newer slang often associated with premium or exotic-positioned Weed. It is not an official grade."] },
    ],
    faqs: faq(["Is Weed the same as cannabis?", "Weed is informal language for cannabis."], ["What does gas mean?", "Usually a fuel-like or pungent aroma."], ["What does loud mean?", "Usually that the aroma is pronounced."], ["What are quads?", "Common Canadian slang for AAAA."], ["What is zaza?", "Newer slang often associated with premium or exotic-positioned cannabis."]),
    links: links(["Cannabis 101", basicsHub], ["Top Shelf, Mids & Quads", `${flowerHub}/top-shelf-mids-quads`], ["Gas, Loud & Terpy", `${flowerHub}/terpenes-gas-loud-aroma`], ["Frosty Weed & Trichomes", `${flowerHub}/trichomes-frosty-weed`]),
    related: [`${flowerHub}/top-shelf-mids-quads`, `${flowerHub}/terpenes-gas-loud-aroma`],
  }),
  article({
    path: "/resources/native-smokes/native-cigarettes-guide", parent: "/resources/native-smokes", label: "Native Smokes", title: "Native Cigarettes in Ontario", seoTitle: "Native Cigarettes in Ontario | Blouds Dispensary Guide", meta: "Learn what “Native cigarettes” can mean in Ontario and why manufacturer identity, tax status and retail terminology are separate questions.", h1: "Native Cigarettes in Ontario: Terms, Brands and What to Know",
    intro: ["“Native cigarettes” is a common consumer phrase.", "It can refer to several different ideas involving Indigenous-associated manufacturers, retailers or tobacco supply channels. It is not one single legal cigarette category."],
    sections: [
      { heading: "The Phrase Can Mean Different Things", body: ["Depending on context, an adult may mean cigarettes manufactured by an Indigenous company, cigarettes sold through an Indigenous retailer, cigarettes associated with reserve retail, tax-exempt allocation cigarettes or a familiar commercial brand associated with Native-smokes retail.", "Those ideas can overlap. They are not automatically the same."] },
      { heading: "Manufacturer Identity and Tax Status Are Different Questions", body: ["Who manufactured a cigarette brand is one question. Whether a particular sale qualifies for tax-exempt treatment is another.", "Do not assume Indigenous-manufactured automatically means tax-free, or that a tax-exempt sale proves manufacturer ownership. Those details need to be confirmed separately."] },
      { heading: "Ontario Tax-Exempt Allocation Cigarettes", body: ["Ontario has a specific tax-exempt cigarette allocation framework for eligible First Nations consumers. That framework should not be generalized to every cigarette informally described as Native."] },
      { heading: "Peach-Coloured Federal Stamp", body: ["Ontario tax-exempt allocation cigarettes use a federal peach-coloured tobacco stamp. The stamp relates to the applicable distribution/tax framework. It does not identify the full ownership history of a brand."] },
      { heading: "Commercial Cigarettes and Traditional Tobacco Are Different", body: ["Traditional or sacred tobacco practices have cultural and ceremonial meaning. Modern commercial cigarettes are a different subject.", "Commercial cigarette smoking is addictive and causes serious health risks, including cancer, heart disease and lung disease."] },
      { heading: "Brand Names Do Not Prove Manufacturer or Ownership", body: ["Blouds Dispensary may display cigarette brand names on current product pages. A current store listing shows how a product is presented for retail browsing.", "A store menu does not by itself prove that a brand is Indigenous-owned, Indigenous-manufactured, tax-exempt, reserve-only, or legal or illegal in every context. Manufacturer and ownership details should be confirmed from reliable information about the exact brand."] },
      { heading: "Existing Native-Smokes Categories", body: ["Blouds already has separate information covering Native smokes, Backwoods, grabba, nicotine pouches and cigarettes. Keep those categories distinct. Do not infer current assortment from educational pages."] },
      { heading: "Check Current Product Pages for Prices and Availability", body: ["This guide is not a live cigarette price list. Prices, package formats, brands and availability can change. Use current product/category pages for current retail details."] },
    ],
    faqs: faq(["Are all “Native cigarettes” tax-free?", "No. The phrase is broad consumer language, not one single tax category."], ["Does Indigenous manufacturing automatically make a cigarette tax-exempt?", "No."], ["Does a Blouds menu listing prove who owns or manufactures a cigarette brand?", "No. Ownership and manufacturer details need to be confirmed separately."], ["Are traditional tobacco and commercial cigarettes the same thing?", "No."], ["Where should I check current cigarette prices or availability?", "Use the current cigarette product/category page or confirm current information at the store."]),
    links: links(["Native Smokes", "/resources/native-smokes"], ["Backwoods and Grabba Guide", "/resources/native-smokes/backwoods-grabba-guide"], ["Nicotine Pouches", "/resources/nicotine-pouches"], ["Cigarettes", "/items/cigarettes"], ["Resource Centre", resourcesHub], ["Blouds Dispensary Brampton", "/weed-dispensary-brampton"]),
    related: ["/resources/native-smokes", "/resources/native-smokes/backwoods-grabba-guide", "/resources/nicotine-pouches"],
  }),
];

const flowerChildren = ADC_V2_NEW_PAGES.filter((page) => page.parent === flowerHub).map((page) => page.path);

export function applyAdcV2Expansions(page: ResourcePage): ResourcePage {
  if (page.path === "/resources/cannabis-dispensary-vs-weed-dispensary") {
    return {
      ...page,
      title: "Cannabis Dispensary vs Weed Dispensary",
      seoTitle: "Cannabis vs Weed Dispensary Brampton | Blouds Dispensary",
      metaDescription: "Learn how cannabis dispensary, weed dispensary, cannabis store and local dispensary wording relate when adults are looking around Queen Street and Brampton.",
      h1: "Cannabis Dispensary vs Weed Dispensary: Different Words, Same Kind of Local Stop",
      excerpt: "Different words can describe the same kind of local adult-use cannabis stop.",
      dateModified: published,
      intro: ["Adults do not all use the same word when they are looking for a cannabis store.", "One person says cannabis dispensary. Another says weed dispensary. Someone else says cannabis store, weed store, or simply dispensary.", "Around Queen Street and Brampton, those phrases can lead to the same practical goal: identify the correct store, confirm the visit information and choose the right menu category."],
      sections: [
        { heading: "Cannabis Is the Formal Term", body: ["“Cannabis” is the formal word used in Canadian law, regulated product information and most health guidance. It is the clearest term when discussing product labels, regulated product information, cannabis laws and general cannabis education."] },
        { heading: "Weed Is Everyday Language", body: ["“Weed” is common conversational language. Adults use it because it is familiar and direct. A useful store website can use both words naturally without pretending they describe two different types of businesses."] },
        { heading: "Dispensary and Cannabis Store Often Describe the Same Retail Visit", body: ["In ordinary conversation, a cannabis dispensary and cannabis store can describe the same kind of adult-use retail destination.", "Once someone finds Blouds Dispensary, the useful questions become whether this is the Queen Street location, what the current store details are, which product category to open, what the Weed tiers mean and where to read current product information."] },
        { heading: "Local Wording Changes, the Business Identity Does Not", body: ["An adult may say weed dispensary Brampton, cannabis dispensary Brampton, cannabis store on Queen Street or weed store near Queen Street. The wording can change while the business remains Blouds Dispensary."] },
        { heading: "Use the Right Guide for the Question", body: ["For visit planning, use the Queen Street Brampton Visit Guide. For product basics, use Cannabis 101. For flower tiers and quality terminology, use the Weed & Flower Guides. For changing product information, use the current category and product pages."] },
      ],
      faqs: faq(["Is a weed dispensary different from a cannabis dispensary?", "Usually the main difference is wording. Cannabis is the formal term, while Weed is common everyday language."], ["Is a cannabis store the same as a dispensary?", "In ordinary adult-use cannabis retail conversation, those phrases can describe the same kind of store."], ["Why do people use different words for the same store?", "Cannabis has both formal and informal vocabulary. Different adults use whichever wording feels most familiar."], ["Does Blouds Dispensary need a different business name for every phrase?", "No. Blouds Dispensary remains the business name."], ["Where should I check current visit information?", "Use the Blouds Dispensary Brampton store page for current store information."]),
      commercialLinks: links(["Blouds Dispensary Brampton", "/weed-dispensary-brampton"], ["Queen Street Brampton Visit Guide", "/resources/local-guides/queen-street-brampton-visit-guide"], ["Cannabis 101", basicsHub], ["Weed & Flower Guides", flowerHub], ["Resource Centre", resourcesHub]),
      related: ["/resources/local-guides/queen-street-brampton-visit-guide", basicsHub, flowerHub],
    };
  }

  if (page.path === "/resources/local-guides/queen-street-brampton-visit-guide") {
    return {
      ...page,
      seoTitle: "First Cannabis Store Visit on Queen Street Brampton | Blouds",
      metaDescription: "A practical first-visit guide to Blouds Dispensary at 117 Queen St W, including menu basics, Weed tiers and current store information.",
      h1: "First Visit to Blouds Dispensary on Queen Street in Brampton",
      excerpt: "A practical first-visit guide for adults 19+ planning a Queen Street stop.",
      dateModified: published,
      intro: ["Blouds Dispensary is located at 117 Queen St W, Brampton, ON L6Y 1M3.", "The store's current listed hours are open 24 hours daily.", "Call +1 (437) 371-5377 if you need to confirm a specific product before travelling.", "A first cannabis-store visit does not require memorizing every strain or product name. Confirm the store information, choose the product category, then understand one or two menu terms that matter to you."],
      sections: [
        { heading: "Adults 19+", body: ["Ontario's legal age for recreational cannabis is 19. Adults should be prepared to show valid identification."] },
        { heading: "Pick the Product Category First", body: ["For flower, start with Exotic Weed, Premium Weed, AAA+ Weed, AA Weed or Budget Weed, then compare current products inside that category.", "Use the pre-roll category for prepared cannabis rolls, the edibles category for edible package information and the cannabis vape category for THC products.", "Commercial cigarettes, nicotine pouches and nicotine vapes belong in separate nicotine/tobacco categories."] },
        { heading: "You Do Not Need to Know Every Strain Name", body: ["Useful questions include what a Weed category means, what gas means, what Hybrid tells you, where to find current product details and how flower differs from pre-rolls."] },
        { heading: "THC Is Only One Part of Flower", body: ["THC matters. It does not directly describe aroma, cure, trim, freshness, bud structure or personal preference."] },
        { heading: "Queen Street and Brampton Context", body: ["Blouds Dispensary is on Queen Street West in Brampton. For changing traffic, transit, construction or parking conditions, check current local information before travelling."] },
        { heading: "Current Listings Handle Changing Details", body: ["Products, prices, package formats and availability can change. Use the current menu and product pages for those details."] },
      ],
      faqs: faq(["Where is Blouds Dispensary?", "Blouds Dispensary is at 117 Queen St W, Brampton, ON L6Y 1M3."], ["What is the phone number?", "Call +1 (437) 371-5377."], ["What are the listed hours?", "Blouds Dispensary is listed as open 24 hours daily."], ["How old do I need to be to buy recreational cannabis in Ontario?", "Adults must be 19 or older."], ["Do I need to know which strain I want before visiting?", "No. Starting with the product category and current menu is enough."], ["Where should I check current product information?", "Use the current category and product pages."]),
      commercialLinks: links(["Store Page", "/weed-dispensary-brampton"], ["Cannabis 101", basicsHub], ["Menu Guide", "/resources/menu-guide"], ["Weed & Flower Guides", flowerHub], ["Pre-Roll Guides", "/resources/pre-roll-guides"], ["Edibles Guides", "/resources/edibles-guides"], ["Vape Guides", "/resources/vape-guides"], ["Resource Centre", resourcesHub]),
      related: ["/resources/local-guides", basicsHub, flowerHub],
    };
  }

  if (page.path === flowerHub) {
    return {
      ...page,
      seoTitle: "Weed & Cannabis Flower Quality Guides | Blouds Dispensary",
      metaDescription: "Learn how Blouds Dispensary's Exotic, Premium, AAA+, AA and Budget Weed categories relate to flower quality language.",
      h1: "Blouds Dispensary Weed & Flower Guides",
      excerpt: "Understand the language behind Blouds Dispensary's five established Weed categories.",
      dateModified: published,
      intro: ["Blouds Dispensary organizes flower into five established Weed categories: Exotic Weed, Premium Weed, AAA+ Weed, AA Weed and Budget Weed.", "Those category names make the menu easier to browse. This guide explains the language behind the categories without pretending that one word can describe every part of flower quality."],
      sections: [
        { heading: "Five Categories, Five Starting Points", body: ["The five categories are menu navigation. They are not one universal Canadian government grading system. A category helps narrow the browse. The actual product listing supplies the specific product details."] },
        { heading: "Flower Quality Has Several Parts", body: ["Adults may compare producer, cultivar, aroma, trim, trichomes, bud structure, moisture, cure, freshness, value and personal preference. Two products in the same broad category can still look and smell different."] },
        { heading: "Genetics", body: ["Genetics influence the plant. A cultivar name helps identify the product. It does not guarantee that every producer's version of the same familiar name is identical."] },
        { heading: "Cultivation", body: ["Indoor, outdoor, greenhouse and hydroponic describe different parts of growing. None automatically guarantees better flower."] },
        { heading: "Drying and Curing", body: ["Flower keeps changing after harvest. Drying reduces moisture. Curing is part of post-harvest conditioning. Storage and handling still matter after packaging."] },
        { heading: "Trichomes", body: ["Trichomes are resin-producing structures on cannabis plants. Visible trichomes create the frosty appearance many adults notice. Frost is a visual clue, not an exact THC measurement."] },
        { heading: "Aroma", body: ["Adults may describe cannabis as gassy, skunky, fruity, citrusy, earthy, piney, sweet or floral. Those are aroma descriptions. They are not quality grades."] },
        { heading: "THC Is Not the Tier", body: ["THC is important product information. Do not turn Exotic, Premium, AAA+, AA and Budget into fixed THC ranges. A larger THC number does not automatically determine the category."] },
      ],
      faqs: faq(["Are Exotic, Premium, AAA+, AA and Budget official government grades?", "No. They are store browsing categories."], ["Does Exotic always mean the highest THC?", "No. The category does not guarantee one THC range."], ["What are quads?", "Quads is common Canadian slang for AAAA and usually suggests premium positioning."], ["Can Budget Weed still have a high THC number?", "Yes. Category position and product-specific THC are different information."], ["What should I compare besides the category name?", "Adults may compare producer, cultivar, THC/CBD, aroma, trim, structure, trichomes, moisture, cure and freshness where information is available."]),
      commercialLinks: links(["Exotic Weed", "/exotic-weed"], ["Premium Weed", "/premium-weed"], ["AAA+ Weed", "/aaa-weed"], ["AA Weed", "/aa-weed"], ["Budget Weed", "/budget-weed"], ["Cannabis 101", basicsHub], ["Value Guides", "/resources/value-guides"], ["Resource Centre", resourcesHub]),
      related: flowerChildren,
    };
  }

  if (page.path === resourcesHub) {
    return {
      ...page,
      dateModified: published,
      intro: [
        "Blouds Dispensary resource pages explain stable menu and product terminology. Use the current category and product pages for changing details such as product names, prices, package formats and availability.",
      ],
      sections: [
        {
          heading: "Cannabis Basics",
          body: [],
          links: links(
            ["Cannabis Dispensary vs Weed Dispensary", "/resources/cannabis-dispensary-vs-weed-dispensary"],
            ["Cannabis 101", basicsHub],
            ["First Visit on Queen Street", "/resources/local-guides/queen-street-brampton-visit-guide"],
            ["Menu Guide", "/resources/menu-guide"],
          ),
        },
        {
          heading: "Weed & Flower Guides",
          body: [],
          links: links(
            ["Weed & Flower Guides", flowerHub],
            ["What Does Good Weed Mean?", `${flowerHub}/what-does-good-weed-mean`],
            ["Top Shelf, Mids & Quads", `${flowerHub}/top-shelf-mids-quads`],
            ["THC vs Weed Quality", `${flowerHub}/thc-vs-weed-quality`],
            ["Bag Appeal", `${flowerHub}/bag-appeal`],
            ["Frosty Weed & Trichomes", `${flowerHub}/trichomes-frosty-weed`],
            ["Gas, Loud & Terpy", `${flowerHub}/terpenes-gas-loud-aroma`],
            ["Drying, Curing & Freshness", `${flowerHub}/drying-curing-freshness`],
            ["Smalls vs Big Buds", `${flowerHub}/smalls-vs-big-buds`],
            ["BC Grown, Indoor, Hydro, Greenhouse & Outdoor", `${flowerHub}/bc-grown-indoor-hydro-outdoor`],
            ["Craft vs Commercial Cannabis", `${flowerHub}/craft-vs-commercial-cannabis`],
          ),
        },
        {
          heading: "Genetics & Cannabis Terms",
          body: [],
          links: links(
            ["Indica vs Sativa vs Hybrid", `${basicsHub}/indica-sativa-hybrid`],
            ["Strain vs Cultivar", `${basicsHub}/strain-vs-cultivar`],
            ["Landrace vs Hybrid", `${basicsHub}/landrace-vs-hybrid`],
            ["Weed Slang Glossary", `${basicsHub}/weed-slang-glossary`],
          ),
        },
        {
          heading: "Native Smokes & Nicotine Education",
          body: ["Use these guides to understand cigarette, Native-smokes, Backwoods, grabba and nicotine-pouch terminology. Current prices, brands and availability belong on current product pages."],
          links: links(
            ["Native Smokes", "/resources/native-smokes"],
            ["Native Cigarettes in Ontario", "/resources/native-smokes/native-cigarettes-guide"],
            ["Backwoods and Grabba Guide", "/resources/native-smokes/backwoods-grabba-guide"],
            ["Nicotine Pouches", "/resources/nicotine-pouches"],
          ),
        },
        {
          heading: "Current Product Information",
          body: ["Blouds Dispensary resource pages explain stable menu and product terminology. Use the current category and product pages for changing details such as product names, prices, package formats and availability."],
        },
      ],
      related: [basicsHub, flowerHub, "/resources/cannabis-dispensary-vs-weed-dispensary", "/resources/local-guides/queen-street-brampton-visit-guide", "/resources/native-smokes/native-cigarettes-guide"],
    };
  }

  if (page.path === "/resources/menu-guide") {
    return { ...page, dateModified: published, sections: [...page.sections, { heading: "Learn the Language Behind the Menu", body: ["Once you know which menu category you want, the Cannabis 101 and Weed & Flower Guides explain the terminology behind flower tiers, THC, genetics, aroma and everyday Weed slang."], links: links(["Cannabis 101", basicsHub], ["Weed & Flower Guides", flowerHub], ["Weed Slang Glossary", `${basicsHub}/weed-slang-glossary`]) }] };
  }

  if (page.path === "/resources/value-guides") {
    return { ...page, dateModified: published, sections: [...page.sections, { heading: "Value and Quality Are Different Questions", body: ["Budget and price position are useful shopping filters. They do not automatically decide flower quality. Use current product pages for current pricing and the Weed & Flower Guides for aroma, cure, THC, trichomes and other quality language."], links: links(["Budget Weed", "/budget-weed"], ["AA Weed", "/aa-weed"], ["Weed & Flower Guides", flowerHub], ["THC vs Weed Quality", `${flowerHub}/thc-vs-weed-quality`]) }] };
  }

  if (page.path === "/resources/local-guides") {
    return { ...page, dateModified: published, commercialLinks: [...page.commercialLinks, ...links(["Cannabis 101", basicsHub], ["Cannabis Dispensary vs Weed Dispensary", "/resources/cannabis-dispensary-vs-weed-dispensary"], ["Weed & Flower Guides", flowerHub])] };
  }

  if (page.path === "/resources/native-smokes") {
    return { ...page, dateModified: published, intro: ["Use this section for cigarette, Native-smokes, Backwoods and grabba terminology. For Ontario context around the phrase “Native cigarettes,” manufacturer identity and tax status, use the Native Cigarettes in Ontario guide."], commercialLinks: [...page.commercialLinks, ...links(["Native Cigarettes in Ontario", "/resources/native-smokes/native-cigarettes-guide"], ["Backwoods and Grabba Guide", "/resources/native-smokes/backwoods-grabba-guide"], ["Nicotine Pouches", "/resources/nicotine-pouches"])] };
  }

  return page;
}
