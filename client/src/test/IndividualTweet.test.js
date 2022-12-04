import React from "react";
import { render, screen } from "@testing-library/react";
import IndividualTweet from "../UI/Twitter/IndividualTweet";
import { tweets } from "./TestTweets";
import Replies from "../UI/Twitter/Replies";
import EventDashboard from "../UI/pages/EventDashboard";

test("render un tweet individual", () => {
  render(<IndividualTweet tweet={tweets[0]}></IndividualTweet>);

  const component = document.querySelector(".individualTweet");
  expect(component).toHaveClass("individualTweet");
});

test("render un tweet con replies", () => {
  render(
    <IndividualTweet tweet={tweets[0]}>
      <Replies reply={tweets[0].replies} />
    </IndividualTweet>
  );
  const component = document.querySelector(".reply");
  expect(component).toHaveClass("reply");
});

test("render dashboard", () => {
  render(<EventDashboard />);
  const component = document.querySelector(".event-dashboard");
  expect(component).toHaveClass("event-dashboard");
});
