import { select, date } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { IntlProvider, FormattedMessage, FormattedDate } from "react-intl";

import { defaultMessages, getEnvLocale, localeOptions, defaultDateValue } from "../stories";

storiesOf("Provider|usage", module)
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
  });
