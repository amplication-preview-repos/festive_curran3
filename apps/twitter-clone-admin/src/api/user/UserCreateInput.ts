import { FollowerCreateNestedManyWithoutUsersInput } from "./FollowerCreateNestedManyWithoutUsersInput";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TweetCreateNestedManyWithoutUsersInput } from "./TweetCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  followers?: FollowerCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  tweets?: TweetCreateNestedManyWithoutUsersInput;
  username: string;
};
