module.exports = {
    siteMetadata: {
        title: `Ashikul Alam Website`,
    },
    plugins: [`gatsby-plugin-react-helmet`, {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: 'UA-71503474-1',
        },
    },],
}
