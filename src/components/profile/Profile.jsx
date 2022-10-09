import PropTypes from 'prop-types';
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
Profile.propTypes = {
  profile: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
