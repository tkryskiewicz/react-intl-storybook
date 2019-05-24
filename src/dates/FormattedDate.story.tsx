import { date } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedDate, IntlProvider } from "react-intl";

const defaultValue = new Date();

storiesOf("Date Formatting|FormattedDate", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
    >
      {story()}
    </IntlProvider>
  ))
  .add("default", () => (
    <FormattedDate
      value={date("Value", defaultValue)}
    />
  ))
  .add("child function", () => (
    <FormattedDate
      value={date("Value", defaultValue)}
    >
      {(value) => (
        <b>{value}</b>
      )}
    </FormattedDate>
  ));
