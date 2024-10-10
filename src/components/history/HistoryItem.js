import React from 'react';
import { ListItem } from "@mantine/core";
import classes from './History.module.css'

export default function HistoryItem({ children, ...rest }) {
  return <ListItem className={classes.link} {...rest}>{children}</ListItem>;
}