const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");

const {
  ItemType
} = require("../type/");

const {
  GraphQLInt,
  GraphQLList,
} = graphql;

const selectGenre = {
  type: new GraphQLList(ItemType),
  args: {
    genre: {
      type: GraphQLInt,
    },
  },
  resolve(parentValue, args) {
    const query = `SELECT * FROM master_book WHERE genre=$1`;
    const values = args.genre;
    return postgres
      .any(query, values)
      .then(function (res) {
        return res
      })
      .catch((err) => err);
  },
};
exports.selectGenre = selectGenre;