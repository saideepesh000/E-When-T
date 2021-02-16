import React from "react";
import { Menu, Header } from "semantic-ui-react";
import { Calendar } from "react-calendar";
import { useSelector, useDispatch } from "react-redux";

export default function EventFilters({ loading }) {
  return (
    <>
      <Menu vertical size="large" style={{ width: "100%" }}>
        <Header icon="filter" attached color="blue" content="Filters" />
        <Menu.Item content="All Events" />
        <Menu.Item content="I'm going" />
        <Menu.Item content="I'm hosting" />
      </Menu>
      <Header icon="calendar" attached color="blue" content="Select date" />
      <Calendar />
    </>
  );
}
