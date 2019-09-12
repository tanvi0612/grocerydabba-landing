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
		},
		{
			resolve: 'gatsby-plugin-crisp-chat',
			options: {
				websiteId: 'c8bcff0d-d621-4188-814c-4479e5a7e3a0',
				enableDuringDevelop: false, // Optional. Disables Crisp Chat during gatsby develop. Defaults to true.
				defer: true, // Optional. Sets the Crisp loading script to defer instead of async. Defaults to false.
				enableImprovedAccessibility: false // Optional. Sets aria-label attribute on pop-up icon for screen readers. Defaults to true.
			}
		}
	]
};
