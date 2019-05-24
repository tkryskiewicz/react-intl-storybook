import { action } from "@storybook/addon-actions";
import { date, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { IntlProvider, FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, FormattedRelative } from "react-intl";

import { defaultDateValue, defaultMessages, defaultNumberValue, localeOptions, getEnvLocale } from "./stories";

storiesOf("API & Provider|IntlProvider", module)
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

    const localeLanguage = locale.substr(0, 2);

    return (
      <IntlProvider
        defaultLocale="en"
        locale={localeLanguage}
        messages={defaultMessages[localeLanguage] || defaultMessages.en}
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

    const Wrapper: React.SFC = (props) => (
      <div style={{ border: "1px solid #000", margin: 10, padding: 10 }}>
        {props.children}
      </div>
    );

    return (
      <IntlProvider
        locale={select("Parent Locale", localeOptions, localeOptions[0])}
      >
        <Wrapper>
          <h1>
            Parent:
          </h1>
          <FormattedDate
            value={value}
          />
          <IntlProvider
            locale={select("Child Locale", localeOptions, localeOptions[1])}
          >
            <Wrapper>
              <h2>
                Child:
              </h2>
              <FormattedDate
                value={value}
              />
            </Wrapper>
          </IntlProvider>
        </Wrapper>
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
