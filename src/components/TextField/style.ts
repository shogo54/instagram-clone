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
        backgroundColor: 'rgba(250,250,250)',
        //transition: theme.transitions.create(['border-color', 'box-shadow']),
        '&:hover': {
          backgroundColor: 'rgba(250,250,250)',
        },
        '&$focused': {
          backgroundColor: 'rgba(250,250,250)',
          //boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 2px`,
          //borderColor: 'rgb(219, 219, 219)',
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
