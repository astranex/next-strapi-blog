module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      slugifyWithCount: true,
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
