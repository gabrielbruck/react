import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Notification from "./notification";
import ResponsiveDrawer from "./navigation";
import OutlinedCard from "./notification";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={2}>
          <Paper className={"navigation-bar"}>
            <ResponsiveDrawer></ResponsiveDrawer>
          </Paper>
        </Grid>
        <Grid item xs={10}>
          <Grid item xs={12} className={"content-top"}>
            <Grid item xs={8}>
              <Paper className={"notification-content"}>
                <Paper className="tasks">
                  <OutlinedCard></OutlinedCard>
                </Paper>
                <Paper className="sales">sales</Paper>
              </Paper>
            </Grid>
            <Grid item xs={4}>
              <Paper className={"calendar-content"}>
                <Paper className="calendar">calendar</Paper>
                <Paper className="activity">activty</Paper>
              </Paper>
            </Grid>
          </Grid>
          <div className="display-flex">
            <Grid item xs={4}>
              <Paper className={"new-clients content-bottom"}>clients</Paper>
            </Grid>
            <Grid item xs={8}>
              <Paper className={"top-states content-bottom"}>states</Paper>
            </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
