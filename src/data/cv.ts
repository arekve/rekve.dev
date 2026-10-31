import type { Localized } from '../i18n/ui';

export interface Period {
	/** YYYY-MM */
	start: string;
	/** YYYY-MM, omitted while ongoing */
	end?: string;
}

export interface Project extends Period {
	client: string;
	name: Localized;
	description: Localized;
}

export interface Employer extends Period {
	name: string;
	url?: string;
	role: Localized;
	projects: Project[];
}

export const profile = {
	name: 'Asbjørn Rekve',
	givenName: 'Asbjørn',
	familyName: 'Rekve',
	city: 'Bergen',
	country: 'NO',
	email: 'asbjorn@rekve.dev',
	github: 'https://github.com/arekve',
	linkedin: 'https://www.linkedin.com/in/arekve',
	careerStart: '2016-08',
	school: 'Høgskolen i Bergen',
	education: {
		nn: 'Bachelor i informasjonsteknologi, Høgskolen i Bergen',
		en: 'Bachelor in Information Technology, Høgskolen i Bergen',
	} satisfies Localized,
	skills: ['TypeScript', 'React', 'Kotlin', 'Node.js', '.NET', 'C#', 'AWS', 'Azure', 'Nx'],
};

export const employers: Employer[] = [
	{
		name: 'Savvy',
		url: 'https://savvy.no',
		role: { nn: 'Seniorkonsulent', en: 'Senior consultant' },
		start: '2022-08',
		projects: [
			{
				client: 'DNB',
				name: { nn: 'Digital selskapsetablering', en: 'Corporate customer onboarding' },
				start: '2023-04',
				description: {
					nn: 'Éin stad for alt nye bedriftskundar treng, der DNB etablerer selskapet i Brønnøysund for deg. Me har bygd heile flyten frå grunnen av.',
					en: 'A one-stop shop for new business customers, where DNB registers the company in Brønnøysund for you. We have built the whole flow from scratch.',
				},
			},
			{
				client: 'DNB',
				name: { nn: 'Ny nettbank', en: 'New online bank' },
				start: '2022-11',
				end: '2023-03',
				description: {
					nn: 'La grunnlaget for den nye nettbanken til DNB og bygde innboks, oppgåver og arkiv.',
					en: 'Laid the foundation for DNB’s new web bank, building the inbox, tasks and archive.',
				},
			},
			{
				client: 'Guilty AS',
				name: { nn: 'Quala', en: 'Quala' },
				start: '2022-08',
				end: '2022-10',
				description: {
					nn: 'Ein opplæringsplattform for butikktilsette. Eg bygde kursbyggjaren og designa databasen.',
					en: 'A training platform for retail staff. I built the course builder and designed the database.',
				},
			},
		],
	},
	{
		name: 'Bouvet',
		role: { nn: 'Konsulent', en: 'Consultant' },
		start: '2019-06',
		end: '2022-07',
		projects: [
			{
				client: 'Equinor',
				name: { nn: 'Dokumentsøk', en: 'Document search' },
				start: '2021-07',
				end: '2022-07',
				description: {
					nn: 'Fritekstsøk med KI i dokumentarkiva til Equinor, bygd på Azure AI Search.',
					en: 'AI-enriched free-text search across Equinor’s document archives, on Azure AI Search.',
				},
			},
			{
				client: 'Forsvaret',
				name: { nn: 'Nasjonal ressursdatabase', en: 'National resource database' },
				start: '2020-05',
				end: '2021-07',
				description: {
					nn: 'Rekvirering av utstyr til Heimevernet, basert på data frå nasjonale register.',
					en: 'Requisitioning equipment for the Home Guard, using data from national registers.',
				},
			},
			{
				client: 'Sbanken',
				name: { nn: 'Alma', en: 'Alma' },
				start: '2019-06',
				end: '2020-01',
				description: {
					nn: 'Eit internt verktøy som saksbehandlarar brukar til å handsame bustadlånssøknader.',
					en: 'An internal tool caseworkers use to process mortgage applications.',
				},
			},
		],
	},
	{
		name: 'Powerzeek',
		role: { nn: 'Utviklar, seinare CTO', en: 'Developer, then CTO' },
		start: '2016-08',
		end: '2019-05',
		projects: [
			{
				client: 'Powerzeek',
				name: { nn: 'Drivstoffplattform', en: 'Fuel platform' },
				start: '2016-08',
				end: '2019-05',
				description: {
					nn: 'Ein marknadsplass for marint drivstoff. Eg byrja som utviklar og vart CTO.',
					en: 'A marketplace for marine fuel. I joined as a developer and became CTO.',
				},
			},
		],
	},
];

export const monthIndex = (yearMonth: string) => {
	const [year, month] = yearMonth.split('-').map(Number);
	return year * 12 + month - 1;
};

export const formatYears = ({ start, end }: Period, now: string) => {
	const from = start.slice(0, 4);
	const to = end ? end.slice(0, 4) : now;
	return from === to ? from : `${from}–${to}`;
};
