import PropTypes from 'prop-types';
import {
  Description,
  Avatar,
  Name,
  Tag,
  Location,
} from './ProfileDescription.styled';
export const DescriptionBlock = ({ avatar, username, tag, location }) => {
  return (
    <Description>
      <Avatar src={avatar} alt={username} />
      <Name>{username}</Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </Description>
  );
};
DescriptionBlock.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
