import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FollowerListRelationFilter } from "../follower/FollowerListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { TweetListRelationFilter } from "../tweet/TweetListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  followers?: FollowerListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  likes?: LikeListRelationFilter;
  tweets?: TweetListRelationFilter;
  username?: StringFilter;
};
