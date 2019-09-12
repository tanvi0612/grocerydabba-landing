/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';

import Header from './header';
import colors from './color';
import './layout.css';
import 'animate.css/animate.min.css';

const Page = styled.div`padding-top: 3.5rem;`;

const Layout = ({ children }) => (
	<StaticQuery
		query={graphql`
			query SiteTitleQuery {
				site {
					siteMetadata {
						title
					}
				}
			}
		`}
		render={(data) => (
			<ThemeProvider theme={colors}>
				<React.Fragment>
					<Header siteTitle={data.site.siteMetadata.title} />
					<Page>
						<main>{children}</main>
					</Page>
					<footer>
						<div className="container">© {new Date().getFullYear()}, GroceryDabba</div>
					</footer>
				</React.Fragment>
			</ThemeProvider>
		)}
	/>
);

Layout.propTypes = {
	children: PropTypes.node.isRequired
};

export default Layout;
