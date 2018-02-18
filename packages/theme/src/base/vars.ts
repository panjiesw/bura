/**
 *    Copyright 2018 Panjie Setiawan Wicaksono
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 */

import {
  hsl,
  px,
  rem,
} from 'csx';
import {
  IBuraColor,
  IBuraFlag,
  IBuraMisc,
  IBuraResponsive,
  IBuraTypo,
  IBuraVariable,
} from '../types';

const colors: IBuraColor = {
  black: hsl(0, '0%', '4%'),
  blackBis: hsl(0, '0%', '7%'),
  blackTer: hsl(0, '0%', '14%'),
  blue: hsl(217, '71%', '53%'),
  cyan: hsl(204, '86%', '53%'),
  green: hsl(141, '71%', '48%'),
  grey: hsl(0, '0%', '48%'),
  greyDark: hsl(0, '0%', '29%'),
  greyDarker: hsl(0, '0%', '21%'),
  greyLight: hsl(0, '0%', '71%'),
  greyLighter: hsl(0, '0%', '86%'),
  orange: hsl(14, '100%', '53%'),
  purple: hsl(271, '100%', '71%'),
  red: hsl(348, '100%', '61%'),
  turquoise: hsl(171, '100%', '41%'),
  white: hsl(0, '0%', '100%'),
  whiteBis: hsl(0, '0%', '98%'),
  whiteTer: hsl(0, '0%', '96%'),
  yellow: hsl(48, '100%', '67%'),
};

const typo: IBuraTypo = {
  familyMonospace: {
    fontFamily: 'monospace',
  },
  familySansSerif: {
    fontFamily:
      // tslint:disable-next-line:max-line-length
      'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
  },
  renderMode: 'optimizeLegibility',
  size1: rem(3),
  size2: rem(2),
  size3: rem(2),
  size4: rem(1),
  size5: rem(1),
  size6: rem(1),
  size7: rem(0),
  weightBold: 700,
  weightLight: 300,
  weightMedium: 500,
  weightNormal: 400,
  weightSemibold: 600,
};

const responsive: IBuraResponsive  = {
  desktop: px(960 + 2 * 32),
  fullhd: px(1344 + 2 * 32),
  gap: px(32),
  tablet: px(769),
  widescreen: px(1152 + 2 * 32),
};

const misc: IBuraMisc = {
  easing: 'ease-out',
  radius: px(3),
  radiusLarge: px(5),
  radiusRounded: px(290486),
  radiusSmall: px(2),
  speed: '86ms',
};

const flags: IBuraFlag = {variableColumns: true}

export const vars: IBuraVariable = {
  ...colors,
  ...typo,
  ...responsive,
  ...misc,
  ...flags,
};
