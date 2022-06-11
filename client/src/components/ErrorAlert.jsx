import React from 'react';
import { useSelector } from 'react-redux';
import { Alert } from '@mui/material';
import styled from '@emotion/styled';

const StyledAlert = styled(Alert)`
  margin: 1rem 0;
`

export const ErrorAlert = () => {
  const error = useSelector(state => state.users.error)

  return error
    ? <StyledAlert severity='error'>{error.message}</StyledAlert>
    : null;
}