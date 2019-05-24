import { date, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedRelative, IntlProvider } from "react-intl";

const defaultValue = new Date();
const initialNow = new Date(2019, 4, 21);

const unitsOptions: NonNullable<FormattedRelative.Props["units"]>[] = [
  "second",
  "minute",
  "hour",
  "day",
  "month",
  "year",
];

const styleOptions: NonNullable<FormattedRelative.Props["style"]>[] = [
  // NOTE: FormattedRelative prop types require "best fit", but typings require "best-fit"
  "best fit" as "best-fit",
  "numeric",
];

storiesOf("Date Formatting|FormattedRelative", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
    >
      {story()}
    </IntlProvider>
  ))
  .add("default", () => (
    <FormattedRelative
      value={date("Value", defaultValue)}
    />
  ))
  .add("units", () => (
    <FormattedRelative
      value={date("Value", defaultValue)}
      units={select("Units", unitsOptions, unitsOptions[0])}
    />
  ))
  .add("style", () => (
    <FormattedRelative
      value={date("Value", defaultValue)}
      style={select("Style", styleOptions, styleOptions[0])}
    />
  ))
  .add("update interval", () => (
    <FormattedRelative
      value={date("Value", defaultValue)}
      updateInterval={number("Update Interval", 1000, { range: true, min: 0, max: 60 * 1000, step: 100 })}
    />
  ))
  .add("initial now", () => (
    <FormattedRelative
      value={date("Value", defaultValue)}
      initialNow={date("Initial Now", initialNow)}
    />
  ))
  .add("child function", () => (
    <FormattedRelative
      value={date("Value", defaultValue)}
    >
      {(value) => (
        <b>{value}</b>
      )}
    </FormattedRelative>
  ));
