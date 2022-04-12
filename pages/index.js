import Head from 'next/head'
import { Card, Grid, Layout, Section } from '../components'

import { xlsxToJson } from '../utils'

export default function Home({ submissions, universities }) {
  return (
      <Layout isHome>
        <Head>
          <title>2022 RSIG Research Day | OADD</title>
          <meta name="description" content="Poster presentations from the 2022 RSIG Research Day" />
          <meta name="keywords" content="OADD, RSIG, Research Day, 2022" />
        </Head>
        <Section
          title="Posters"
          subtitle="View the poster submissions from 2022"
        >
          <Grid>
            { submissions.map(({ coAuthors, contactAuthor, email, file, id, title }) => (
              <Card
                title={title}
                authorEmail={email || 'Email n/a'}
                authorName={`${contactAuthor}${coAuthors ? ', et al' : ''}`}
                file={`/downloads/${file}`}
                href={`/submissions/${id}`}
                key={id}
                tag="Poster"
              />
            ))}
          </Grid>
          <div className="mt-5 max-w-7xl mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow mt-2 sm:mt-0 sm:ml-2">
              <a href="https://www.surveymonkey.com/r/L589WRL"
                 className="transition duration-500 ease-in-out w-full flex items-center text-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-700 hover:bg-green-800 md:py-4 md:text-lg md:px-10"
                 target="_blank"
                 rel="nofollow noopener noreferrer"
              >
                Vote for the People’s Choice Award!
              </a>
            </div>
          </div>
        </Section>
      </Layout>
  )
}

export async function getStaticProps(context) {
  return {
    props: {
      submissions: xlsxToJson({
        filename: 'data/data.xlsx',
        worksheetName: 'Poster Presentations',
      }),
    }
  }
}
