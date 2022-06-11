import React from 'react';
import styled from '@emotion/styled';
import { Chip } from '@mui/material';
import emoji from 'random-happy-emoji';

const PALETTE_COLORS = ['primary', 'secondary', 'error', 'warning', 'success'];

const getRandomPaletteColor = () => {
  return PALETTE_COLORS[Math.floor(Math.random() * PALETTE_COLORS.length)];
};

const StyledChip = styled(Chip)`
  margin: 0.5rem;
  height: 3rem;
  font-size: 2rem;
  border-radius: 1.5rem;
  padding: 0.5rem;
`;

export const NameChip = ({ name }) => {
  return <StyledChip label={`${emoji()} ${name}`} color={getRandomPaletteColor()} />;
};
