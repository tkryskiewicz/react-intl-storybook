import { withKnobs } from "@storybook/addon-knobs";
import { configure, addDecorator } from "@storybook/react";

addDecorator(withKnobs);

const req = require.context("../src", true, /\.story\.tsx$/);

configure(() => {
  req.keys().forEach(req);
}, module);
