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

import { ColorHelper } from 'csx';
import { findColorInvert } from './functions';
import { colors, typography } from './variables';

const primary: ColorHelper = colors.turquoise;
const info: ColorHelper = colors.cyan;
const success: ColorHelper = colors.green;
const warning: ColorHelper = colors.yellow;
const danger: ColorHelper = colors.red;
const light: ColorHelper = colors.whiteTer;
const dark: ColorHelper = colors.greyDarker;

export const derivedColors = {
  danger,
  dark,
  info,
  light,
  primary,
  success,
  warning,
};

// Invert colors

// $orange-invert: findColorInvert($orange) !default
const orangeInvert: ColorHelper = findColorInvert(colors.orange);
// $yellow-invert: findColorInvert($yellow) !default
const yellowInvert: ColorHelper = findColorInvert(colors.yellow);
// $green-invert: findColorInvert($green) !default
const greenInvert: ColorHelper = findColorInvert(colors.green);
// $turquoise-invert: findColorInvert($turquoise) !default
const turquoiseInvert: ColorHelper = findColorInvert(colors.turquoise);
// $cyan-invert: findColorInvert($cyan) !default
const cyanInvert: ColorHelper = colors.cyan;
// $blue-invert: findColorInvert($blue) !default
const blueInvert: ColorHelper = colors.blue;
// $purple-invert: findColorInvert($purple) !default
const purpleInvert: ColorHelper = colors.purple;
// $red-invert: findColorInvert($red) !default
const redInvert: ColorHelper = colors.red;
// $primary-invert: $turquoise-invert !default
const primaryInvert: ColorHelper = turquoiseInvert;
// $info-invert: $cyan-invert !default
const infoInvert: ColorHelper = cyanInvert;
// $success-invert: $green-invert !default
const successInvert: ColorHelper = greenInvert;
// $warning-invert: $yellow-invert !default
const warningInvert: ColorHelper = yellowInvert;
// $danger-invert: $red-invert !default
const dangerInvert: ColorHelper = redInvert;
// $light-invert: $dark !default
const lightInvert: ColorHelper = dark;
// $dark-invert: $light !default
const darkInvert: ColorHelper = light;

export const invertColors = {
  orangeInvert,
  yellowInvert,
  greenInvert,
  turquoiseInvert,
  cyanInvert,
  blueInvert,
  purpleInvert,
  redInvert,
  primaryInvert,
  infoInvert,
  successInvert,
  warningInvert,
  dangerInvert,
  lightInvert,
  darkInvert,
};

// General colors

// $background: $white-ter !default
const background: ColorHelper = colors.whiteTer;

// $border: $grey-lighter !default
const border: ColorHelper = colors.greyLighter;
// $border-hover: $grey-light !default
const borderHover: ColorHelper = colors.greyLight;

export const generalColors = {
  background,
  border,
  borderHover,
};

// Text colors

// $text: $grey-dark !default
const text: ColorHelper = colors.greyDark;
// $text-invert: findColorInvert($text) !default
const textInvert: ColorHelper = findColorInvert(text);
// $text-light: $grey !default
const textLight: ColorHelper = colors.grey;
// $text-strong: $grey-darker !default
const textStrong: ColorHelper = colors.greyDarker;

export const textColors = {
  text,
  textInvert,
  textLight,
  textStrong,
};

// Code colors

const code: ColorHelper = colors.red;
const codeBackground: ColorHelper = background;
const pre: ColorHelper = text;
const preBackground: ColorHelper = background;

export const codeColors = {
  code,
  codeBackground,
  pre,
  preBackground,
};

// Link colors

const link: ColorHelper = colors.blue;
const linkInvert: ColorHelper = blueInvert;
const linkVisited: ColorHelper = colors.purple;
const linkHover: ColorHelper = colors.greyDarker;
const linkHoverBorder: ColorHelper = colors.greyLight;
const linkFocus: ColorHelper = colors.greyDarker;
const linkFocusBorder: ColorHelper = colors.blue;
const linkActive: ColorHelper = colors.greyDarker;
const linkActiveBorder: ColorHelper = colors.greyDark;

export const linkColors = {
  link,
  linkInvert,
  linkVisited,
  linkHover,
  linkHoverBorder,
  linkFocus,
  linkFocusBorder,
  linkActive,
  linkActiveBorder,
};

// Typography

const familyPrimary = typography.familySansSerif;
const familyCode = typography.familyMonospace;
const sizeSmall = typography.size7;
const sizeNormal = typography.size6;
const sizeMedium = typography.size5;
const sizeLarge = typography.size4;

export const derivedTypo = {
  familyPrimary,
  familyCode,
  sizeSmall,
  sizeNormal,
  sizeMedium,
  sizeLarge,
};

export interface IColorMap {
  white: [ColorHelper, ColorHelper];
  black: [ColorHelper, ColorHelper];
  light: [ColorHelper, ColorHelper];
  dark: [ColorHelper, ColorHelper];
  primary: [ColorHelper, ColorHelper];
  link: [ColorHelper, ColorHelper];
  info: [ColorHelper, ColorHelper];
  success: [ColorHelper, ColorHelper];
  warning: [ColorHelper, ColorHelper];
  danger: [ColorHelper, ColorHelper];
}

export interface IShadeMap {
  blackBis: ColorHelper;
  blackTer: ColorHelper;
  greyDarker: ColorHelper;
  greyDark: ColorHelper;
  grey: ColorHelper;
  greyLight: ColorHelper;
  whiteTer: ColorHelper;
  whiteBis: ColorHelper;
}

// Lists and maps

// $colors: ("white": ($white, $black), "black": ($black, $white), "light": ($light, $light-invert), "dark": ($dark, $dark-invert), "primary": ($primary, $primary-invert), "link": ($link, $link-invert), "info": ($info, $info-invert), "success": ($success, $success-invert), "warning": ($warning, $warning-invert), "danger": ($danger, $danger-invert)) !default
export const colorsMap: IColorMap = {
  white: [colors.white, colors.black],
  black: [colors.black, colors.white],
  light: [light, lightInvert],
  dark: [dark, darkInvert],
  primary: [primary, primaryInvert],
  link: [link, linkInvert],
  info: [info, infoInvert],
  success: [success, successInvert],
  warning: [warning, warningInvert],
  danger: [danger, dangerInvert],
};

// $shades: ("black-bis": $black-bis, "black-ter": $black-ter, "grey-darker": $grey-darker, "grey-dark": $grey-dark, "grey": $grey, "grey-light": $grey-light, "grey-lighter": $grey-lighter, "white-ter": $white-ter, "white-bis": $white-bis) !default
export const shadesMap: IShadeMap = {
  blackBis: colors.blackBis,
  blackTer: colors.blackTer,
  greyDarker: colors.greyDarker,
  greyDark: colors.greyDark,
  grey: colors.grey,
  greyLight: colors.greyLight,
  whiteTer: colors.whiteTer,
  whiteBis: colors.whiteBis,
};

export const sizes = [
  typography.size1,
  typography.size2,
  typography.size3,
  typography.size4,
  typography.size5,
  typography.size6,
  typography.size7,
]
