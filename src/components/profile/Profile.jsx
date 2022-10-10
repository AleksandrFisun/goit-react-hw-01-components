import { StatsInfo } from './profile_stats/ProfileStats';
import { DescriptionBlock } from './profile_description/ProfileDescription';
import { Wraper } from './Profile.styled';
export const Profile = ({
  profile: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <Wraper>
      <DescriptionBlock
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
      />
      <StatsInfo followers={followers} views={views} likes={likes} />
    </Wraper>
  );
};
