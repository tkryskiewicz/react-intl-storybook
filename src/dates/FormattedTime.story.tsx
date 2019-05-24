import { date } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedTime, IntlProvider } from "react-intl";

const defaultValue = new Date();

storiesOf("Date Formatting|FormattedTime", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
    >
      {story()}
    </IntlProvider>
  ))
  .add("default", () => (
    <FormattedTime
      value={date("Value", defaultValue)}
    />
  ))
  .add("child function", () => (
    <FormattedTime
      value={date("Value", defaultValue)}
    >
      {(value) => (
        <b>{value}</b>
      )}
    </FormattedTime>
  ));
