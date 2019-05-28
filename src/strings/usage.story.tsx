import { storiesOf } from "@storybook/react";
import * as React from "react";
import { defineMessages, FormattedMessage, injectIntl, InjectedIntlProps, IntlProvider } from "react-intl";

storiesOf("String Formatting|usage", module)
  .addDecorator((story) => (
    <IntlProvider locale="en">
      {story()}
    </IntlProvider>
  ))
  .add("defineMessages", () => {
    const messages = defineMessages({
      message: {
        id: "messageObject",
        defaultMessage: "Default Object",
      },
    });

    const WrappedComponent = injectIntl((props: InjectedIntlProps) =>
      <>
        {props.intl.formatMessage({ id: "messageInjected", defaultMessage: "Default Injected" })}
      </>
    );

    return (
      <>
        <h1>
          Component
        </h1>
        <FormattedMessage {...messages.message} />
        <h1>
          Inline
        </h1>
        <FormattedMessage
          id="messageInline"
          defaultMessage="Default Inline"
        />
        <h1>
          Injected
        </h1>
        <WrappedComponent />
      </>
    );
  });
