import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { CommentUpdateManyWithoutPostsInput } from "./CommentUpdateManyWithoutPostsInput";

export type PostUpdateInput = {
  author?: AuthorWhereUniqueInput | null;
  comments?: CommentUpdateManyWithoutPostsInput;
  content?: string | null;
  published?: boolean | null;
  title?: string | null;
};
