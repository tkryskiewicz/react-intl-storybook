import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedNumber, IntlProvider } from "react-intl";

storiesOf("Number Formatting|FormattedNumber", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
    >
      {story()}
    </IntlProvider>
  ))
  .add("default", () => (
    <FormattedNumber
      value={number("Value", 0)}
    />
  ))
  .add("child function", () => (
    <FormattedNumber
      value={number("Value", 0)}
    >
      {(value) => (
        <b>{value}</b>
      )}
    </FormattedNumber>
  ));
