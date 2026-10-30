export interface Period {
	/** YYYY-MM */
	start: string;
	/** YYYY-MM, omitted while ongoing */
	end?: string;
}

export interface Project extends Period {
	id: string;
	client: string;
	name: string;
	description: string;
	stack: string[];
}

export interface Employer extends Period {
	id: 'savvy' | 'bouvet' | 'powerzeek';
	name: string;
	role: string;
	projects: Project[];
}

export const profile = {
	name: 'Asbjørn Rekve',
	location: 'Bergen',
	email: 'asbjorn@rekve.dev',
	github: 'https://github.com/arekve',
	careerStart: '2016-08',
	education: 'Bachelor in Information Technology, Høyskolen i Bergen',
};

export const employers: Employer[] = [
	{
		id: 'savvy',
		name: 'Savvy',
		role: 'Senior consultant',
		start: '2022-08',
		projects: [
			{
				id: 'dnb',
				client: 'DNB',
				name: 'New online bank',
				start: '2022-11',
				description:
					"I'm part of the team laying the foundation for DNB's new web bank, built from scratch on AWS. I've built communication services like the inbox, tasks and archive, shared React libraries, and complete features from Kotlin backends to React frontends.",
				stack: ['TypeScript', 'React', 'Kotlin', 'AWS', 'Nx'],
			},
			{
				id: 'guilty',
				client: 'Guilty AS',
				name: 'Quala',
				start: '2022-08',
				end: '2022-10',
				description:
					'A training platform for Ava of Norway, where retail staff and consumers take courses and quizzes about products. I built the course builder, client and server, and designed the database schema.',
				stack: ['Vue.js', 'React Native', 'GraphQL', 'Prisma', 'PostgreSQL'],
			},
		],
	},
	{
		id: 'bouvet',
		name: 'Bouvet',
		role: 'Consultant',
		start: '2019-06',
		end: '2022-07',
		projects: [
			{
				id: 'equinor',
				client: 'Equinor',
				name: 'Document search',
				start: '2021-07',
				end: '2022-07',
				description:
					"Free-text search across large volumes of Equinor's archived documents, enriched with AI on Azure AI Search. I wrote enrichment skills in C# and Python, a .NET Core API and a React demo app, and set up CI/CD in Azure DevOps.",
				stack: ['Azure AI Search', 'C#', 'Python', '.NET Core', 'React'],
			},
			{
				id: 'forsvaret',
				client: 'Forsvaret',
				name: 'National resource database',
				start: '2020-05',
				end: '2021-07',
				description:
					'A tool for requisitioning equipment and materiel for the Home Guard, built on data from national registers. I worked in a small autonomous team where everyone shared roles.',
				stack: ['.NET Core', 'Angular', 'Elasticsearch', 'Docker', 'PostgreSQL'],
			},
			{
				id: 'sbanken',
				client: 'Sbanken',
				name: 'Alma',
				start: '2019-06',
				end: '2020-01',
				description:
					'An internal tool caseworkers use to process mortgage applications, integrated with a long list of internal and external systems.',
				stack: ['React', 'Redux', '.NET MVC', 'SQL Server'],
			},
		],
	},
	{
		id: 'powerzeek',
		name: 'Powerzeek',
		role: 'Developer, then CTO',
		start: '2016-08',
		end: '2019-05',
		projects: [
			{
				id: 'powerzeek',
				client: 'Powerzeek',
				name: 'Fuel platform',
				start: '2016-08',
				end: '2019-05',
				description:
					'A web marketplace for buying and selling marine fuel. I joined as a developer and became CTO, responsible for planning, design and architecture.',
				stack: ['Angular', 'TypeScript', 'Firebase', 'Node.js', 'Xamarin'],
			},
		],
	},
];

export const monthIndex = (yearMonth: string) => {
	const [year, month] = yearMonth.split('-').map(Number);
	return year * 12 + month - 1;
};

const monthYear = new Intl.DateTimeFormat('en-GB', { month: 'short', year: 'numeric', timeZone: 'UTC' });
const toDate = (yearMonth: string) => new Date(`${yearMonth}-01T00:00:00Z`);

export const formatPeriod = ({ start, end }: Period) =>
	`${monthYear.format(toDate(start))} – ${end ? monthYear.format(toDate(end)) : 'now'}`;

export const formatYears = ({ start, end }: Period) => `${start.slice(0, 4)}–${end ? end.slice(0, 4) : 'now'}`;
