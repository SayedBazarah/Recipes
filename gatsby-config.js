module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Recipe",
  },
  plugins: [
     `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `image`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `q36gp8syhv5p`,
      accessToken: 'pHptEpBBLxhYyP0S8pta8pKZc_94zfS7bvAuKfl6l_Q',
    },
    },
  ],
  
};
