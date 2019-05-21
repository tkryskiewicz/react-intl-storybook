import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedHTMLMessage, IntlProvider } from "react-intl";

const messages = {
  helloMessage: "<b>Hello</b>",
};

storiesOf("String Formatting/FormattedHTMLMessage", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
      messages={messages}
    >
      {story()}
    </IntlProvider>
  ))
  .add("default", () => (
    <FormattedHTMLMessage
      id="helloMessage"
    />
  ))
  .add("default message", () => (
    <FormattedHTMLMessage
      id="message"
      defaultMessage="<b>Hello</b>"
    />
  ))
  .add("values", () => (
    <FormattedHTMLMessage
      id="message"
      defaultMessage="Hello, {name}!"
      values={{
        name: "<b>Tomek</b>",
      }}
    />
  ));
