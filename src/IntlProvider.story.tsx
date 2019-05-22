import { date, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { IntlProvider, FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, FormattedRelative } from "react-intl";

import { defaultDateValue, defaultMessages, defaultNumberValue, localeOptions, getEnvLocale } from "./stories";

storiesOf("Provider", module)
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
  .add("user locale", () => {
    const locale = getEnvLocale();

    return (
      <IntlProvider
        defaultLocale="en"
        locale={locale}
        messages={defaultMessages[locale] || defaultMessages.en}
      >
        <>
          <h1>
            Locale: {locale}
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
  .add("nesting", () => {
    const value = date("Value", defaultDateValue);

    return (
      <IntlProvider
        defaultLocale="en"
        locale={select("Parent Locale", localeOptions, localeOptions[0])}
      >
        <>
          <h1>
            Parent:
          </h1>
          <FormattedDate
            value={value}
          />
          <IntlProvider
            defaultLocale="en"
            locale={select("Child Locale", localeOptions, localeOptions[1])}
          >
            <>
              <h2>
                Child:
              </h2>
              <FormattedDate
                value={value}
              />
            </>
          </IntlProvider>
        </>
      </IntlProvider>
    );
  })
  .add("errors", () => (
    <IntlProvider
      defaultLocale="en"
      onError={(error) => alert(error)}
    >
      <FormattedMessage
        id="message"
      />
    </IntlProvider>
  ));
