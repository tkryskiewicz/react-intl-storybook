import { withKnobs } from "@storybook/addon-knobs";
import { configure, addDecorator } from "@storybook/react";
import { addLocaleData } from "react-intl";

import * as en from "react-intl/locale-data/en";
import * as pl from "react-intl/locale-data/pl";
import * as fr from "react-intl/locale-data/fr";

addLocaleData([...en, ...pl, ...fr]);

addDecorator(withKnobs);

const req = require.context("../src", true, /\.story\.tsx$/);

configure(() => {
  req.keys().forEach(req);
}, module);
