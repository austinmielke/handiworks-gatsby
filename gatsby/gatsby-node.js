exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
        query {
            patterns: allSanityPattern {
                edges {
                    node {
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `)
  data.patterns.edges.forEach(edge => {
    const slug = edge.node.slug.current
    actions.createPage({
      path: `patterns/${slug}`,
      component: require.resolve('./src/components/pattern.js'),
      context: { slug: slug }
    })
  })
}
