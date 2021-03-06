const graphql = require("graphql");
const {
  postgres
} = require("../../postgres");
const {
  StoryType
} = require("../type/");
const {
  story
} = require("../model/story");

const updateStory = {
  type: StoryType,
  args: story,
  resolve(parent, args) {
    const query = `UPDATE stories SET(
      title_main,
      auther_name,
      is_complete,
      genre,
      catch_copy,
      synopsis,
      keywords,
      extreme_depiction,
      color_type,
      accept_advertisement,
      accept_rating,
      accept_reviews,
      accept_impression,
      publish_evaluation,
      accept_typo_reports) = ($2, $3, $4,$5,$6,$7,$8,$9,$10,$11,$12, $13, $14, $15, $16) WHERE id_story=$1 
      RETURNING id_user,
      id_story,
      title_main,
      auther_name,
      is_complete,
      genre,
      catch_copy,
      synopsis,
      keywords,
      extreme_depiction,
      color_type,
      accept_advertisement,
      accept_rating,
      accept_reviews,
      accept_impression,
      publish_evaluation,
      accept_typo_reports`;
    const values = [
      args.id_story,
      args.title_main,
      args.auther_name,
      args.is_complete,
      args.genre,
      args.catch_copy,
      args.synopsis,
      args.keywords,
      args.extreme_depiction,
      args.color_type,
      args.accept_advertisement,
      args.accept_rating,
      args.accept_reviews,
      args.accept_impression,
      args.publish_evaluation,
      args.accept_typo_reports,

    ];
    return postgres
      .one(query, values)
      .then((res) => res)
      .catch((err) => err);
  }
}

exports.updateStory = updateStory;