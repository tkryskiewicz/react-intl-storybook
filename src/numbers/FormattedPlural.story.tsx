import { number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedPlural, IntlProvider } from "react-intl";

storiesOf("Number Formatting|FormattedPlural", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
    >
      {story()}
    </IntlProvider>
  ))
  .add("default", () => (
    <FormattedPlural
      other="message"
      value={number("Value", 0)}
    />
  ))
  .add("cardinal style", () => {
    const value = number("Value", 0);

    return (
      <>
        {value}
        {" "}
        <FormattedPlural
          style="cardinal"
          one="day (one)"
          other="days (other)"
          value={value}
        />
      </>
    );
  })
  .add("ordinal style", () => {
    const value = number("Value", 0);

    return (
      <>
        {value}
        <FormattedPlural
          style="ordinal"
          one="st (one)"
          two="nd (two)"
          few="rd (few)"
          other="th (other)"
          value={value}
        />
      </>
    );
  })
  .add("child function", () => {
    const value = number("Value", 0);

    return (
      <>
        {value}
        {" "}
        <FormattedPlural
          one="message"
          other="messages"
          value={value}
        >
          {(value) => (
            <b>{value}</b>
          )}
        </FormattedPlural>
      </>
    );
  });

