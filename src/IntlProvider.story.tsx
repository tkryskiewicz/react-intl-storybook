import { date, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { IntlProvider, FormattedDate, FormattedMessage, FormattedNumber, FormattedTime, FormattedRelative } from "react-intl";

declare global {
  interface Navigator {
    userLanguage: string;
  }
}

const defaultValue = new Date();

const messages: { [locale: string]: {} } = {
  en: {
    hello: "Hello!",
  },
  pl: {
    hello: "Cześć!",
  },
  fr: {
    hello: "Salut!",
  },
};

const localeOptions = Object.keys(messages);

storiesOf("Provider", module)
  .add("default", () => {
    const locale = select("Locale", localeOptions, localeOptions[0]);

    return (
      <IntlProvider
        locale={locale}
        messages={messages[locale] || messages.en}
      >
        <>
          <h1>
            Dates
          </h1>
          <p>
            Date:{" "}
            <FormattedDate
              value={defaultValue}
            />
          </p>
          <p>
            Time:{" "}
            <FormattedTime
              value={defaultValue}
            />
          </p>
          <p>
            Relative:{" "}
            <FormattedRelative
              value={defaultValue}
            />
          </p>
          <h1>
            Numbers
          </h1>
          <FormattedNumber
            value={1234567890.1234}
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
    const locale = (
      (navigator.languages && navigator.languages[0]) ||
      navigator.language ||
      navigator.userLanguage ||
      "en"
    ).substr(0, 2);

    return (
      <IntlProvider
        defaultLocale="en"
        locale={locale}
        messages={messages[locale] || messages.en}
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
    const Component = (props: { children: React.ReactNode }) => (
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
    const value = date("Value", defaultValue);

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
