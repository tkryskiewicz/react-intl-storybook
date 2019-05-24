import { date, boolean, select } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { IntlProvider, FormattedDate } from "react-intl";

const defaultValue = new Date();

const localeMatcherOptions: NonNullable<Intl.DateTimeFormatOptions["localeMatcher"]>[] = [
  "best fit",
  "lookup",
];

const weekdayOptions: NonNullable<Intl.DateTimeFormatOptions["weekday"]>[] = [
  "long",
  "short",
  "narrow"
];

const eraOptions: NonNullable<Intl.DateTimeFormatOptions["era"]>[] = [
  "long",
  "short",
  "narrow",
];

const yearOptions: NonNullable<Intl.DateTimeFormatOptions["year"]>[] = [
  "numeric",
  "2-digit",
];

const monthOptions: NonNullable<Intl.DateTimeFormatOptions["month"]>[] = [
  "numeric",
  "2-digit",
  "long",
  "short",
  "narrow",
];

const dayOptions: NonNullable<Intl.DateTimeFormatOptions["day"]>[] = [
  "numeric",
  "2-digit",
];

const hourOptions: NonNullable<Intl.DateTimeFormatOptions["hour"]>[] = [
  "numeric",
  "2-digit",
];

const minuteOptions: NonNullable<Intl.DateTimeFormatOptions["minute"]>[] = [
  "numeric",
  "2-digit",
];

const secondOptions: NonNullable<Intl.DateTimeFormatOptions["second"]>[] = [
  "numeric",
  "2-digit",
];

const timeZoneNameOptions: NonNullable<Intl.DateTimeFormatOptions["timeZoneName"]>[] = [
  "long",
  "short",
];

const formatMatcherOptions: NonNullable<Intl.DateTimeFormatOptions["formatMatcher"]>[] = [
  "best fit",
  "basic",
];

const timeZoneOptions: NonNullable<Intl.DateTimeFormatOptions["timeZone"]>[] = [
  "UTC",
  "Poland",
  "Europe/Warsaw",
  "Asia/Shanghai",
  "America/New_York",
  "America/Chicago",
];

storiesOf("Date Formatting|common", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
    >
      {story()}
    </IntlProvider>
  ))
  .add("common options", () => {
    const value = date("Value", defaultValue);

    const localeMatcher = select("Locale Matcher", localeMatcherOptions, localeMatcherOptions[0]);
    const formatMatcher = select("Format Matcher", formatMatcherOptions, formatMatcherOptions[0]);
    const weekday = select("Weekday", weekdayOptions, weekdayOptions[0]);
    const era = select("Era", eraOptions, eraOptions[0]);
    const year = select("Year", yearOptions, yearOptions[0]);
    const month = select("Month", monthOptions, monthOptions[0]);
    const day = select("Day", dayOptions, dayOptions[0]);
    const hour = select("Hour", hourOptions, hourOptions[0]);
    const minute = select("Minute", minuteOptions, minuteOptions[0]);
    const second = select("Second", secondOptions, secondOptions[0]);
    const timeZoneName = select("Time Zone Name", timeZoneNameOptions, timeZoneNameOptions[0]);
    const hour12 = boolean("Hour 12", true);
    const timeZone = select("Time Zone", timeZoneOptions, timeZoneOptions[0]);

    return (
      <FormattedDate
        localeMatcher={localeMatcher}
        formatMatcher={formatMatcher}
        weekday={weekday}
        era={era}
        year={year}
        month={month}
        day={day}
        hour={hour}
        minute={minute}
        second={second}
        timeZoneName={timeZoneName}
        hour12={hour12}
        timeZone={timeZone}
        value={value}
      />
    );
  });
