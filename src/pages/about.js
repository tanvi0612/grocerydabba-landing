import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import { Page } from '../components/sharedComponents';

const SecondPage = () => (
	<Layout>
		<SEO title="About Us | SkipTheLine" />

		<Page>
			<div className="container">
				<h1>About Us</h1>

				<p>
					SkipTheLine is an initiative that helps top 1% of developers get hired directly into some of the
					fastest growing startups in India. We do it because we believe that talented developers shouldn’t
					have to apply for jobs, it should be the other way around. Great jobs should come to them and they
					should select where to go.
				</p>

				<p>
					We are able to do it because having been entrepreneurs before as well as people who have played a
					role to help build the Indian startup ecosystem, we have a direct or indirect network with every
					startup founder in India.
				</p>

				<p>
					We do it because startups are always hiring and looking for talented developers and good developers
					a lot of times don’t know how to find the best opportunity. Job boards are not for them!
				</p>

				<p>
					For any concerns/questions, please feel free to email at{' '}
					<a href="mailto:niti@skiptheline.dev">niti@skiptheline.dev</a>
				</p>
			</div>
		</Page>
	</Layout>
);

export default SecondPage;
