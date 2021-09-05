/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */


// exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
// if (stage === "build-html" || stage === "develop-html") {
//   actions.setWebpackConfig({
//     module: {
//       rules: [
//         {
//           test: /bad-module/,
//           use: loaders.null(),
//         },
//       ],
//     },
//   })
// }
// }

// exports.onCreateWebpackConfig = ({ stage, actions, plugins, loaders }) => {
//   if (
//     stage === "build-html" ||
//     stage === "develop-html" ||
//     stage === "develop"
//   ) {
//     actions.setWebpackConfig({
//       module: {
//         rules: [
//           {
//             test: /xterm|xterm-addon-fit/,
//             use: loaders.null(),
//           },
//         ],
//       },
//     });
//   }
// };
const path = require("path");
const { node } = require("prop-types");
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@/data": path.resolve(__dirname, "src/data/index"),
        "@/components": path.resolve(__dirname, "src/components"),
        "@/context": path.resolve(__dirname, "src/context/"),
        "@/css": path.resolve(__dirname, "src/assets/css/"),
        "@/images": path.resolve(__dirname, "src/assets/images/"),
      },
    },
  });
};

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
  {
    allStrapiArticle {
      nodes {
        Slug
        title
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 200
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        body
        date
      }
    }
    allStrapiPortfolio {
      nodes {
        Slug
        image {
          localFile {
            childImageSharp {
              gatsbyImageData(
                width: 400
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
        title
        body
        categories
        date
        social {
          LinkedinProfiles
        }
      }
    }
  }  
  `);

  data.allStrapiArticle.nodes.forEach(node => {
    // console.log("init");
    // console.log(node);
    const slug = node.Slug
    actions.createPage({
      path: slug,
      component: path.resolve('./src/pages/blog-single.js'),
      context: {
        slug: slug,
        data: node
      },
    });
  });

  data.allStrapiArticle.nodes.forEach(node => {
    // console.log("init");
    // console.log(node);
    const slug = node.Slug
    actions.createPage({
      path: '/blog/'+ slug,
      component: path.resolve('./src/pages/blog-single.js'),
      context: {
        slug: slug,
        data: node
      },
    });
  });

  // exports.createPages = async function ({ actions, graphql }) {
  // const { data1 } = await graphql(`
  // query {
  //   allStrapiPortfolio {
  //     nodes {
  //       Slug
  //       image {
  //         localFile {
  //           childImageSharp {
  //             gatsbyImageData
  //           }
  //         }
  //       }
  //       title
  //       body
  //       categories
  //       date
  //       social {
  //         LinkedinProfiles
  //       }
  //     }
  //   }
  // }  
  // `)
  // data.allStrapiPortfolio.nodes.forEach(node => {
  //   // console.log("init");
  //   console.log(node);
  //   const sluggish = node.Slug
  //   actions.createPage({
  //     path: sluggish,
  //     component: path.resolve('./src/pages/portfolio-details.js'),
  //     context: {
  //       slug: sluggish,
  //       data: node
  //     },
  //   });
  // });
  data.allStrapiPortfolio.nodes.forEach(node => {
    // console.log("init");
    console.log(node);
    const sluggish = node.Slug
    actions.createPage({
      path: '/portfolio/' + sluggish,
      component: path.resolve('./src/pages/portfolio-details.js'),
      context: {
        slug: sluggish,
        data: node
      },
    });
  });
};
