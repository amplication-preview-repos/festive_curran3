import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowerCreateInput = {
  followedUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
