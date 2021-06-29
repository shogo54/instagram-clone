import React from 'react';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import MuiLink, { LinkProps as MuiLinkProps } from '@material-ui/core/Link';

export type LinkProps = MuiLinkProps & Pick<RouterLinkProps, 'to' | 'replace'>;

const createLink: React.FC<LinkProps> = ({ innerRef, ...rest }) => {
  return <RouterLink {...rest} />;
};

const Link: React.FC<LinkProps> = (props) => {
  return (
    <MuiLink
      component={createLink}
      color={props.color || 'textSecondary'}
      style={{ textDecoration: 'none' }}
      {...props}
    />
  );
};

export default Link;
