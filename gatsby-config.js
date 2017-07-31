module.exports = {
    siteMetadata: {
        title: `Ashikul Alam Website`,
    },
    plugins: [`gatsby-plugin-react-helmet`, {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
            trackingId: 'YOUR_GOOGLE_ANALYTICS_TRACKING_ID',
        },
    },],
}
