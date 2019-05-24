import { text, select, number } from "@storybook/addon-knobs";
import { storiesOf } from "@storybook/react";
import * as React from "react";
import { FormattedMessage, IntlProvider } from "react-intl";

const messages = {
  welcomeMessage: "Hello",
  simpleMessage: "Hello, {name}",
  complexMessage: "Hello, {name}, you have {itemCount, plural, =0 {no items} one {# item} other {# items}}.",
};

const tagNameOptions: any[] = [
  "span",
  "b",
  "h1",
  "li",
  "code",
];

storiesOf("String Formatting|FormattedMessage", module)
  .addDecorator((story) => (
    <IntlProvider
      locale="en"
      messages={messages}
    >
      {story()}
    </IntlProvider>
  ))
  .add("default", () => (
    <FormattedMessage
      id={text("Id", "welcomeMessage")}
    />
  ))
  .add("simple message", () => (
    <>
      <p>
        <code>
          {messages.simpleMessage}
        </code>
      </p>
      <FormattedMessage
        id="simpleMessage"
        values={{
          name: text("Name", "Name"),
        }}
      />
    </>
  ))
  .add("complex message", () => (
    <>
      <p>
        <code>
          {messages.complexMessage}
        </code>
      </p>
      <FormattedMessage
        id="complexMessage"
        values={{
          name: text("Name", "Name"),
          itemCount: number("Item Count", 0, { range: true, min: 0, max: 10, step: 1 }),
        }}
      />
    </>
  ))
  .add("default message", () => (
    <FormattedMessage
      id={text("Id", "message")}
      defaultMessage={text("Default Message", "Default Message")}
    />
  ))
  .add("missing message", () => (
    <FormattedMessage
      id={text("Id", "missingMessage")}
    />
  ))
  .add("message descriptor", () => {
    const message: FormattedMessage.MessageDescriptor = {
      id: text("Id", "welcomeMessage"),
      defaultMessage: text("Default Message", "Default Message"),
      description: text("Description", "Description"),
    };

    return (
      <>
        <p>
          <code>
            {JSON.stringify(message)}
          </code>
        </p>
        <FormattedMessage {...message} />
      </>
    );
  })
  .add("tag name", () => (
    <FormattedMessage
      id="id"
      tagName={select("Tag Name", tagNameOptions, tagNameOptions[0])}
    />
  ))
  .add("rich text formatting", () => (
    <FormattedMessage
      id="welcomeUserMessage"
      defaultMessage="Hello {name}!"
      values={{
        name: (
          <b>
            {text("Name", "Name")}
          </b>
        ),
      }}
    />
  ))
  .add("child function", () => (
    <FormattedMessage
      id={text("Id", "welcomeMessage")}
    >
      {(value) => (
        <b>{value}</b>
      )}
    </FormattedMessage>
  ));
