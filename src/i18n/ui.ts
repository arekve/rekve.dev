export const locales = ['nn', 'en'] as const;
export type Locale = (typeof locales)[number];
export type Localized = Record<Locale, string>;

const en = {
	/** BCP 47 tag for the html lang attribute */
	htmlLang: 'en',
	languageName: 'English',
	title: 'fullstack developer',
	description: (years: number) =>
		`Asbjørn Rekve is a fullstack developer in Bergen with ${years} years of experience in TypeScript, React, Kotlin and .NET.`,
	lede: 'Fullstack developer in Bergen. Senior consultant at Savvy, currently working with DNB.',
	about: (years: number) =>
		`I’ve been building web applications for ${years} years, mostly in TypeScript and React, with Kotlin, C# or Node on the server and AWS or Azure underneath. I like owning a feature from the data model to the last bit of UI, and working closely with designers to get it right.`,
	work: 'Work',
	education: 'Education',
	contact: 'Contact',
	writeTo: 'Write to me at',
	findMeOn: 'or find me on',
	now: 'now',
};

const nn: typeof en = {
	htmlLang: 'nn',
	languageName: 'Norsk',
	title: 'fullstackutviklar',
	description: (years) =>
		`Asbjørn Rekve er fullstackutviklar i Bergen med ${years} års erfaring med TypeScript, React, Kotlin og .NET.`,
	lede: 'Fullstackutviklar i Bergen. Seniorkonsulent i Savvy, no hos DNB.',
	about: (years) =>
		`Eg har bygd webapplikasjonar i ${years} år, mest i TypeScript og React, med Kotlin, C# eller Node på serveren og AWS eller Azure i botnen. Eg likar å følgje ein feature heile vegen frå datamodell til ferdig grensesnitt, og å jobbe tett med designarar for å få det rett.`,
	work: 'Erfaring',
	education: 'Utdanning',
	contact: 'Kontakt',
	writeTo: 'Skriv til meg på',
	findMeOn: 'eller finn meg på',
	now: 'no',
};

export const ui: Record<Locale, typeof en> = { nn, en };
