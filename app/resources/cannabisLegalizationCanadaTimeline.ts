import type { ResourcePage } from "./resourceData.ts";

const H1 =
  "Eight years of legal cannabis in Canada: what changed on Oct 17, 2018, what was added in 2019, and what the law still requires";

/** Approved BLS01 body, rendered as written. Do not rewrite. */
export const CANNABIS_LEGALIZATION_CANADA_TIMELINE_MARKDOWN = `# Eight years of legal cannabis in Canada: what changed on Oct 17, 2018, what was added in 2019, and what the law still requires

Last checked: September 30, 2026
A common question at the counter sounds simple: when exactly did cannabis become legal in Canada? The short answer is October 17, 2018. The fuller answer is a sequence of dates, because the federal law arrived in stages and a few of its rules have been adjusted since. Here's that sequence, drawn from Canada's Cannabis Act text on Justice Laws and from Ontario's provincial page on cannabis rules, with a note under each date on what it means for an adult in Ontario now.

This is a plain summary for adults 19 and over, not legal advice.

## June 21, 2018: the Cannabis Act receives Royal Assent

The federal Cannabis Act (Statutes of Canada 2018, chapter 16) shows "Assented to 2018-06-21" on Justice Laws. Royal Assent made it law on paper, but most of it did nothing yet: section 226 of the Act left the start date to be "fixed by order of the Governor in Council."

**What it means today:** the Act you hear about is still that 2018 statute, amended over time. When someone cites "the Cannabis Act," this is the document.

## October 17, 2018: legalization takes effect

The Governor in Council order (SI/2018-52) brought most of the Act into force on October 17, 2018. A footnote to section 226 on Justice Laws records that date, and ontario.ca uses it too, referring to "legalization on October 17, 2018."

At that point, the Act's Schedule 4, the list of cannabis classes that authorized sellers could offer, had five entries:

1. dried cannabis
2. cannabis oil
3. fresh cannabis
4. cannabis plants
5. cannabis plant seeds

Ontario set its own age at 19. The provincial page ties buying, possessing, using and growing recreational cannabis to that age, and notes it matches Ontario's age for alcohol and tobacco. (The federal Act's adult possession rule is written for people 18 or older; Ontario's own age is 19.)

**What it means today:** in Ontario, 19 is still the age for buying, possessing, using and growing. Nothing about that has changed since 2018.

## October 17, 2019: three new classes are added

The Act had a second date built in. Section 193.1, which amended Schedule 4, came into force exactly one year after the first date. Comparing the dated versions on Justice Laws makes the change easy to see. The version in force from October 17, 2018 to September 18, 2019 lists five classes. The version that begins October 17, 2019 adds three more:

6. edible cannabis
7. cannabis extracts
8. cannabis topicals

Ontario's page gives the same date for each: edibles "are legal in Canada as of October 17, 2019," and so are extracts and topicals. The same regulation (SOR/2019-207) also repealed "cannabis oil" as a class of its own, but that took effect a year later: the Justice Laws version in force from October 17, 2019 to October 16, 2020 still lists cannabis oil, and the version beginning October 17, 2020 is the first to show that line as repealed.

**What it means today:** the eight-item list now reads as seven classes, with "cannabis oil" no longer a separate one. The federal Cannabis Regulations set out labelling requirements class by class.

## October 2021 onward: the Act orders a look back at itself

Section 151.1 of the Cannabis Act required the federal Minister, three years after that section took effect, to have the Act and "its administration and operation" examined, including its impact on public health and on young people's consumption habits, on Indigenous persons and communities, and on home cultivation. A report with any findings or recommendations had to go before each House of Parliament within 18 months of that work starting.

**What it means today:** the requirement is written into the statute. This page doesn't summarise what the report found. Treat any claim about its conclusions as something to check at the source.

## 2025: label wording changes

A 2025 amendment to the Cannabis Regulations (SOR/2025-43) took away the old stand-alone THC and CBD lines on packages. Packages now print a "Total THC" line and a "Total CBD" line in their place.

**What it means today:** if an older habit has you looking for a plain "THC" line, look for "Total THC".

## Still true today: the short list

Each of these gets one line here; our other resources go deeper.

- **Age:** Ontario's age for buying, having, using or growing is 19.
- **Possession:** the public limit for an adult is 30 g, counted as dried cannabis or its equivalent in other classes.
- **Home growing:** the cap is four plants for each home, however many adults live there, under both the provincial page and the federal dwelling-house limit.
- **Labels:** find the Total THC line first, then the Total CBD line.
- **Driving:** Ontario bars consuming cannabis in any form, whether smoked, vaped or eaten, in a vehicle or boat that's in motion or about to be.
- **Borders:** section 11 of the Cannabis Act says that unless authorized under the Act, "the importation or exportation of cannabis is prohibited."

## Where to read the law yourself

- The *Cannabis Act* on Justice Laws, with its "Previous Versions" list for opening the 2018 and 2019 texts side by side.
- The federal *Cannabis Regulations*, also on Justice Laws.
- Government of Ontario: "Cannabis laws."

For the basics on product types and how to read a menu, our [Cannabis 101 hub](/resources/cannabis-101) is the next stop. Blouds Dispensary is at 117 Queen St W, in downtown Brampton west of Main St; directions are on the [Blouds visit page](/visit). Legal cannabis in Ontario is for adults 19 and over.
`;

const FIRST_PARAGRAPH =
  "A common question at the counter sounds simple: when exactly did cannabis become legal in Canada? The short answer is October 17, 2018. The fuller answer is a sequence of dates, because the federal law arrived in stages and a few of its rules have been adjusted since. Here's that sequence, drawn from Canada's Cannabis Act text on Justice Laws and from Ontario's provincial page on cannabis rules, with a note under each date on what it means for an adult in Ontario now.";

export const CANNABIS_LEGALIZATION_CANADA_TIMELINE: ResourcePage = {
  path: "/resources/cannabis-legalization-canada-timeline",
  kind: "article",
  categoryLabel: "Cannabis law",
  title: H1,
  seoTitle: "Eight years of legal cannabis in Canada: what changed",
  metaDescription: FIRST_PARAGRAPH,
  h1: H1,
  excerpt: "",
  primaryKeyword: "when was cannabis legalized in canada",
  supportingKeywords: ["cannabis legalization canada", "cannabis act 2018"],
  searchIntent: "When cannabis was legalized in Canada, and which rules still apply in Ontario.",
  author: "team",
  datePublished: "2026-09-28",
  dateModified: "2026-09-30",
  image: {
    src: "/banners/Blouds_Welcome_Banner.webp",
    alt: H1,
  },
  intro: [],
  sections: [],
  commercialLinks: [],
  related: [],
  bodyMarkdown: CANNABIS_LEGALIZATION_CANADA_TIMELINE_MARKDOWN,
};
