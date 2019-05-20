import { boolean, number, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedNumber, IntlProvider } from "react-intl";

const localeMatcherOptions: NonNullable<Intl.NumberFormatOptions["localeMatcher"]>[] = [
  "best fit",
  "lookup",
];

const styleOptions: NonNullable<Intl.NumberFormatOptions["style"]>[] = [
  "decimal",
  "currency",
  "percent",
];

const currencyOptions: NonNullable<Intl.NumberFormatOptions["currency"]>[] = [
  "USD",
  "PLN",
];

const currencyDisplayOptions: NonNullable<Intl.NumberFormatOptions["currencyDisplay"]>[] = [
  "symbol",
  "code",
  "name",
];

storiesOf("Number Formatting", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
    >
      {story()}
    </IntlProvider>
  ))
  .add("common options", () => {
    const localeMatcher = select("Locale Matcher", localeMatcherOptions, localeMatcherOptions[0]);
    const style = select("Style", styleOptions, styleOptions[0]);
    const currency = select("Currency", currencyOptions, currencyOptions[0]);
    const currencyDisplay = select("Currency Display", currencyDisplayOptions, currencyDisplayOptions[0]);
    const useGrouping = boolean("Use Grouping", true);
    const minimumIntegerDigits = number("Minimum Integer Digits", 1, { range: true, min: 1, max: 21, step: 1 });
    const minimumFractionDigits = number("Minimum Fraction Digits", 0, { range: true, min: 0, max: 20, step: 1 });
    const maximumFractionDigits = number("Maximum Fraction Digits", 10, { range: true, min: 0, max: 20, step: 1 });

    const useSignificantDigits = boolean("Use Significant Digits?", false);

    const minimumSignificantDigits = useSignificantDigits ?
      number("Minimum Significant Digits", 1, { range: true, min: 1, max: 21, step: 1 }) :
      undefined;
    const maximumSignificantDigits = useSignificantDigits ?
      number("Maximum Significant Digits", 10, { range: true, min: 1, max: 21, step: 1 }) :
      undefined;

    return (
      <FormattedNumber
        localeMatcher={localeMatcher}
        style={style}
        currency={currency}
        currencyDisplay={currencyDisplay}
        useGrouping={useGrouping}
        minimumIntegerDigits={minimumIntegerDigits}
        minimumFractionDigits={minimumFractionDigits}
        maximumFractionDigits={maximumFractionDigits}
        minimumSignificantDigits={minimumSignificantDigits}
        maximumSignificantDigits={maximumSignificantDigits}
        value={number("Value", 0)}
      />
    );
  });
