import { BiLike } from 'react-icons/bi';
import { GrOverview } from 'react-icons/gr';
import { RiUserFollowLine } from 'react-icons/ri';
import { StatsBlock, StatsItem, Label } from './ProfileStats.styled';
export const StatsInfo = ({ followers, views, likes }) => {
  return (
    <StatsBlock>
      <StatsItem>
        <Label>Followers</Label>
        <span>{followers}</span>
        <RiUserFollowLine />
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <span>{views}</span>
        <GrOverview />
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <span>{likes}</span>
        <BiLike />
      </StatsItem>
    </StatsBlock>
  );
};
