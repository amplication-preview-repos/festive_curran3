import { User } from "../user/User";

export type Follower = {
  createdAt: Date;
  followedUser: string | null;
  id: string;
  updatedAt: Date;
  user?: User | null;
};
