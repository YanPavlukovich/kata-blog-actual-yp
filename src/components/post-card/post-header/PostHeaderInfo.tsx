import { ArticleTitle } from "../../../typography/ArticleTitle";
import { Like, LikeProps } from "../../like/Like";

import { Tag } from "../../tag/Tag";
import { PostHeaderStyle } from "./post-header.style";

export type PostHeaderInfoProps = LikeProps & {
  titleContent: string;
  tagList: string[];
  slug?: string;
};

export const PostHeaderInfo = (props: PostHeaderInfoProps) => {
  const { titleContent, favoritesCount, favorited, tagList, slug } = props;
  const tags = tagList.map((tag, i) => <Tag key={`tag_${i}`} tag={tag} />);

  return (
    <div>
      <PostHeaderStyle>
        <div className="titleWrapper">
          <ArticleTitle level={3} to={slug ? `/articles/${slug}` : null}>
            {titleContent}
          </ArticleTitle>
          <Like
            favorited={favorited}
            favoritesCount={favoritesCount}
            slug={slug}
          />
        </div>
      </PostHeaderStyle>
      <div className="tagList">{tags}</div>
    </div>
  );
};
