import { select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { IntlProvider, injectIntl, InjectedIntl } from "react-intl";

import { defaultDateValue, defaultNumberValue, localeOptions, defaultMessages } from "../stories";

storiesOf("API|injectIntl", module)
  .add("default", () => {
    const Component = injectIntl((props) => {
      const { intl } = props;

      return (
        <>
          <h1>
            Dates
          </h1>
          <p>
            Date: {intl.formatDate(defaultDateValue)}
          </p>
          <p>
            Time: {intl.formatTime(defaultDateValue)}
          </p>
          <p>
            Relative: {intl.formatRelative(defaultDateValue)}
          </p>
          <h1>
            Numbers
          </h1>
          {intl.formatNumber(defaultNumberValue)}
          <h1>
            Messages
          </h1>
          {intl.formatMessage({ id: "hello" })}
        </>
      );
    });

    const locale = select("Locale", localeOptions, localeOptions[0]);

    return (
      <IntlProvider
        locale={locale}
        messages={defaultMessages[locale] || defaultMessages.en}
      >
        <Component />
      </IntlProvider>
    );
  })
  .add("intlPropName", () => {
    const Component = injectIntl((props: { intl: InjectedIntl }) =>
      <>
        {props.intl.formatMessage({ id: "hello" })}
      </>,
      { intlPropName: "intl" },
    );

    return (
      <IntlProvider
        locale="en"
        messages={defaultMessages.en}
      >
        <Component />
      </IntlProvider>
    );
  })
  .add("withRef", () => (
    <>
      // TODO: implement
    </>
  ));
