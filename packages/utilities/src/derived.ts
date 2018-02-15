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
import { colors, typography } from './variables';
import { findColorInvert } from './functions';

// $primary: $turquoise !default
const primary: ColorHelper = colors.turquoise;

// $info: $cyan !default
const info: ColorHelper = colors.cyan;
// $success: $green !default
const success: ColorHelper = colors.green;
// $warning: $yellow !default
const warning: ColorHelper = colors.yellow;
// $danger: $red !default
const danger: ColorHelper = colors.red;

// $light: $white-ter !default
const light: ColorHelper = colors.whiteTer;
// $dark: $grey-darker !default
const dark: ColorHelper = colors.greyDarker;

export const derivedColors = {
  primary,
  info,
  success,
  warning,
  danger,
  light,
  dark,
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

// $code: $red !default
const code: ColorHelper = colors.red;
// $code-background: $background !default
const codeBackground: ColorHelper = background;

// $pre: $text !default
const pre: ColorHelper = text;
// $pre-background: $background !default
const preBackground: ColorHelper = background;

export const codeColors = {
  code,
  codeBackground,
  pre,
  preBackground,
};

// Link colors

// $link: $blue !default
const link: ColorHelper = colors.blue;
// $link-invert: $blue-invert !default
const linkInvert: ColorHelper = blueInvert;
// $link-visited: $purple !default
const linkVisited: ColorHelper = colors.purple;

// $link-hover: $grey-darker !default
const linkHover: ColorHelper = colors.greyDarker;
// $link-hover-border: $grey-light !default
const linkHoverBorder: ColorHelper = colors.greyLight;

// $link-focus: $grey-darker !default
const linkFocus: ColorHelper = colors.greyDarker;
// $link-focus-border: $blue !default
const linkFocusBorder: ColorHelper = colors.blue;

// $link-active: $grey-darker !default
const linkActive: ColorHelper = colors.greyDarker;
// $link-active-border: $grey-dark !default
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

// $family-primary: $family-sans-serif !default
const familyPrimary = typography.familySansSerif;
// $family-code: $family-monospace !default
const familyCode = typography.familyMonospace;

// $size-small: $size-7 !default
const sizeSmall = typography.size7;
// $size-normal: $size-6 !default
const sizeNormal = typography.size6;
// $size-medium: $size-5 !default
const sizeMedium = typography.size5;
// $size-large: $size-4 !default
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
