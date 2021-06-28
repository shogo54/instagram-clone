import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';

interface IInputSytlesProps {
  value: boolean;
}

export const inputStyles = makeStyles<Theme, IInputSytlesProps>(
  (theme: Theme) =>
    createStyles({
      root: {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 3,
        backgroundColor: theme.palette.grey[50],
        '&:hover': {
          backgroundColor: theme.palette.grey[50],
        },
        '&$focused': {
          backgroundColor: theme.palette.grey[50],
        },
      },
      focused: {},
      input: {
        padding: ({ value }) => (value ? '' : '15px 12px'),
      },
    })
);

export const rootStyles = makeStyles({
  root: {
    width: '100%',
    marginBottom: 6,
  },
});
