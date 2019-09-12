module.exports = {
	siteMetadata: {
		title: `GroceryDabba`,
		description: `GroceryDabba is a smart initiative to bring fresh Indian groceries to your doorstep saving you travel time and money.`,
		author: `@groceryDabba`
	},
	plugins: [
		`gatsby-plugin-react-helmet`,
		`gatsby-plugin-styled-components`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets`
			}
		},
		// `gatsby-transformer-sharp`,
		// `gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `GroceryDabba`,
				short_name: `GroceryDabba`,
				start_url: `/`,
				background_color: `#2176ff`,
				theme_color: `#2176ff`,
				display: `standalone`,
				icon: `src/assets/icons/icon-512x512.png` // This path is relative to the root of the site.
			}
		},
		{
			resolve: `gatsby-plugin-prefetch-google-fonts`,
			options: {
				fonts: [
					{
						family: `Catamaran`
					},
					{
						family: `Martel`
					},
					{
						family: `Overpass`
					}
				]
			}
		},
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.dev/offline
		`gatsby-plugin-offline`,
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				trackingId: 'UA-144535810-1'
			}
		}
	]
};
