import React from 'react';
import PropTypes from 'prop-types';
import { StatisticsBlock, Title, List, Item } from './Statistics.styled';
export const Statistics = ({ title, statistics }) => {
  return (
    <StatisticsBlock>
      {title && <Title>{title}</Title>}
      <List>
        {statistics.map(statistic => (
          <Item key={statistic.id}>
            <span>{statistic.label}</span>
            <span>{statistic.percentage}%</span>
          </Item>
        ))}
      </List>
    </StatisticsBlock>
  );
};
Statistics.propTypes = {
  statistics: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
