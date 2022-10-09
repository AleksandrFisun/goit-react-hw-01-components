import React from 'react';
import PropTypes from 'prop-types';
import { List, Item, Status, Avatar, Name } from './FriendList.styled';
export const FriendList = ({ friends }) => {
  return (
    <List>
      {friends.map(friend => (
        <Item key={friend.id}>
          <Status active={friend.isOnline === true}>{}</Status>
          <Avatar src={friend.avatar} alt={friend.name} />
          <Name>{friend.name}</Name>
        </Item>
      ))}
    </List>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
