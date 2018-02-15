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

import { hsl, px, rem, ColorHelper } from 'csx';
import { FontFace } from 'typestyle/lib/types';

// $black:        hsl(0, 0%, 4%) !default
const black: ColorHelper = hsl(0, '0%', '4%');
// $black-bis:    hsl(0, 0%, 7%) !default
const blackBis: ColorHelper = hsl(0, '0%', '7%');
// $black-ter:    hsl(0, 0%, 14%) !default
const blackTer: ColorHelper = hsl(0, '0%', '14%');

// $grey-darker:  hsl(0, 0%, 21%) !default
const greyDarker: ColorHelper = hsl(0, '0%', '21%');
// $grey-dark:    hsl(0, 0%, 29%) !default
const greyDark: ColorHelper = hsl(0, '0%', '29%');
// $grey:         hsl(0, 0%, 48%) !default
const grey: ColorHelper = hsl(0, '0%', '48%');
// $grey-light:   hsl(0, 0%, 71%) !default
const greyLight: ColorHelper = hsl(0, '0%', '71%');
// $grey-lighter: hsl(0, 0%, 86%) !default
const greyLighter: ColorHelper = hsl(0, '0%', '86%');

// $white-ter:    hsl(0, 0%, 96%) !default
const whiteTer: ColorHelper = hsl(0, '0%', '96%');
// $white-bis:    hsl(0, 0%, 98%) !default
const whiteBis: ColorHelper = hsl(0, '0%', '98%');
// $white:        hsl(0, 0%, 100%) !default
const white: ColorHelper = hsl(0, '0%', '100%');

// $orange:       hsl(14,  100%, 53%) !default
const orange: ColorHelper = hsl(14, '100%', '53%');
// $yellow:       hsl(48,  100%, 67%) !default
const yellow: ColorHelper = hsl(48, '100%', '67%');
// $green:        hsl(141, 71%,  48%) !default
const green: ColorHelper = hsl(141, '71%', '48%');
// $turquoise:    hsl(171, 100%, 41%) !default
const turquoise: ColorHelper = hsl(171, '100%', '41%');
// $cyan:         hsl(204, 86%,  53%) !default
const cyan: ColorHelper = hsl(204, '86%', '53%');
// $blue:         hsl(217, 71%,  53%) !default
const blue: ColorHelper = hsl(217, '71%', '53%');
// $purple:       hsl(271, 100%, 71%) !default
const purple: ColorHelper = hsl(271, '100%', '71%');
// $red: hsl(348, 100%, 61%) !default
const red: ColorHelper = hsl(348, '100%', '61%');

export const colors = {
  black,
  blackBis,
  blackTer,
  greyDarker,
  greyDark,
  grey,
  greyLight,
  greyLighter,
  whiteTer,
  whiteBis,
  white,
  orange,
  yellow,
  green,
  turquoise,
  cyan,
  blue,
  purple,
  red,
};

// $family-sans-serif: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif !default
const familySansSerif: FontFace = {
  fontFamily:
    'BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif',
};
// $family-monospace: monospace !default
const familyMonospace: FontFace = {
  fontFamily: 'monospace',
};
// $render-mode: optimizeLegibility !default
const renderMode: string = 'optimizeLegibility';

// $size-1: 3rem !default
const size1 = rem(3);
// $size-2: 2.5rem !default
const size2 = rem(2);
// $size-3: 2rem !default
const size3 = rem(2);
// $size-4: 1.5rem !default
const size4 = rem(1);
// $size-5: 1.25rem !default
const size5 = rem(1);
// $size-6: 1rem !default
const size6 = rem(1);
// $size-7: 0.75rem !default
const size7 = rem(0);

// $weight-light: 300 !default
const weightLight: number = 300;
// $weight-normal: 400 !default
const weightNormal: number = 400;
// $weight-medium: 500 !default
const weightMedium: number = 500;
// $weight-semibold: 600 !default
const weightSemibold: number = 600;
// $weight-bold: 700 !default
const weightBold: number = 700;

export const typography = {
  familySansSerif,
  familyMonospace,
  renderMode,
  size1,
  size2,
  size3,
  size4,
  size5,
  size6,
  size7,
  weightLight,
  weightNormal,
  weightMedium,
  weightSemibold,
  weightBold,
};

// The container horizontal gap, which acts as the offset for breakpoints
// $gap: 32px !default
const gap = px(32);
// 960, 1152, and 1344 have been chosen because they are divisible by both 12 and 16
// $tablet: 769px !default
const tablet = px(769);
// 960px container + 4rem
// $desktop: 960px + (2 * $gap) !default
const desktop = px(960 + 2 * 32);
// 1152px container + 4rem
// $widescreen: 1152px + (2 * $gap) !default
const widescreen = px(1152 + 2 * 32);
// 1344px container + 4rem
// $fullhd: 1344px + (2 * $gap) !default
const fullhd = px(1344 + 2 * 32);

export const responsive = {
  gap,
  tablet,
  desktop,
  widescreen,
  fullhd,
};

// Miscellaneous

// $easing: ease-out !default
const easing: string = 'ease-out';
// $radius-small: 2px !default
const radiusSmall = px(2);
// $radius: 3px !default
const radius = px(3);
// $radius-large: 5px !default
const radiusLarge = px(5);
// $radius-rounded: 290486px !default
const radiusRounded = px(290486);
// $speed: 86ms !default
const speed: string = '86ms';

export const misc = {
  easing,
  radiusSmall,
  radius,
  radiusLarge,
  radiusRounded,
  speed,
};

// Flags

// $variable-columns: true !default
const variableColumns: boolean = true;

export const flags = {
  variableColumns,
};
