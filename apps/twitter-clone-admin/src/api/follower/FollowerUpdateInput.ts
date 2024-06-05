import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FollowerUpdateInput = {
  followedUser?: string | null;
  user?: UserWhereUniqueInput | null;
};
