import { PostAuthorizationType } from "../../types/post";
import { Link } from "react-router-dom";
import {
  ProfileImageStyle,
  ProfileInfoStyle,
  ProfileStyle,
} from "./profile.style";

type ProfleProps = {
  author: PostAuthorizationType;
  subtitle?: string;
  to?: string;
};

export const Profile = (props: ProfleProps) => {
  const { author, subtitle, to } = props;

  const profileContent = (
    <ProfileStyle>
      <ProfileInfoStyle>
        <Link className="profileInfoName" to={"/profile"}>
          {author.username}
        </Link>
        {subtitle && <p className="profileInfoSubtitle">{subtitle}</p>}
      </ProfileInfoStyle>
      <ProfileImageStyle>
        {author.image && <img src={author.image} alt="" />}
      </ProfileImageStyle>
    </ProfileStyle>
  );

  return (
    <div className="link">
      {to ? <Link to={to}>{profileContent}</Link> : profileContent}
    </div>
  );
};
