import { action } from "@storybook/addon-actions";
import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { IntlProvider, FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, FormattedRelative } from "react-intl";

import { defaultDateValue, defaultMessages, defaultNumberValue, localeOptions } from "../stories";

storiesOf("Provider|IntlProvider", module)
  .add("default", () => {
    const locale = select("Locale", localeOptions, localeOptions[0]);

    return (
      <IntlProvider
        locale={locale}
        messages={defaultMessages[locale] || defaultMessages.en}
      >
        <>
          <h1>
            Dates
          </h1>
          <p>
            Date: <FormattedDate value={defaultDateValue} />
          </p>
          <p>
            Time: <FormattedTime value={defaultDateValue} />
          </p>
          <p>
            Relative: <FormattedRelative value={defaultDateValue} />
          </p>
          <h1>
            Numbers
          </h1>
          <FormattedNumber
            value={defaultNumberValue}
          />
          <h1>
            Messages
          </h1>
          <FormattedMessage
            id="hello"
          />
        </>
      </IntlProvider>
    );
  })
  .add("text component", () => {
    const Component: React.SFC = (props) => (
      <b>
        {props.children}
      </b>
    );

    return (
      <IntlProvider
        locale="en"
        textComponent={Component}
      >
        <FormattedMessage
          id="message"
          defaultMessage="Hello!"
        />
      </IntlProvider>
    );
  })
  .add("errors", () => (
    <IntlProvider
      onError={action("Error")}
    >
      <FormattedMessage
        id="message"
      />
    </IntlProvider>
  ));
