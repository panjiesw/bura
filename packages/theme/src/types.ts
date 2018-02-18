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
import { FontFace, NestedCSSProperties } from 'typestyle/lib/types';

export interface IBuraColor {
  black: ColorHelper;
  blackBis: ColorHelper;
  blackTer: ColorHelper;
  greyDarker: ColorHelper;
  greyDark: ColorHelper;
  grey: ColorHelper;
  greyLight: ColorHelper;
  greyLighter: ColorHelper;
  whiteTer: ColorHelper;
  whiteBis: ColorHelper;
  white: ColorHelper;
  orange: ColorHelper;
  yellow: ColorHelper;
  green: ColorHelper;
  turquoise: ColorHelper;
  cyan: ColorHelper;
  blue: ColorHelper;
  purple: ColorHelper;
  red: ColorHelper;
}

export interface IBuraTypo {
  familyMonospace: FontFace;
  familySansSerif: FontFace;
  renderMode: string;
  size1: number | string;
  size2: number | string;
  size3: number | string;
  size4: number | string;
  size5: number | string;
  size6: number | string;
  size7: number | string;
  weightLight: number;
  weightNormal: number;
  weightMedium: number;
  weightSemibold: number;
  weightBold: number;
}

export interface IBuraResponsive {
  gap: number | string;
  tablet: number | string;
  desktop: number | string;
  widescreen: number | string;
  fullhd: number | string;
}

export interface IBuraMisc {
  easing: string;
  radiusSmall: number | string;
  radius: number | string;
  radiusLarge: number | string;
  radiusRounded: number | string;
  speed: string;
}

export interface IBuraFlag {
  variableColumns: boolean;
}

export interface IBuraVariable
  extends IBuraColor,
    IBuraTypo,
    IBuraResponsive,
    IBuraMisc,
    IBuraFlag {}

export interface IBuraDerivedColor {
  danger: ColorHelper;
  dark: ColorHelper;
  info: ColorHelper;
  light: ColorHelper;
  primary: ColorHelper;
  success: ColorHelper;
  warning: ColorHelper;
}

export interface IBuraDerivedInvertColor {
  blueInvert: ColorHelper;
  cyanInvert: ColorHelper;
  dangerInvert: ColorHelper;
  darkInvert: ColorHelper;
  greenInvert: ColorHelper;
  infoInvert: ColorHelper;
  lightInvert: ColorHelper;
  orangeInvert: ColorHelper;
  primaryInvert: ColorHelper;
  purpleInvert: ColorHelper;
  redInvert: ColorHelper;
  successInvert: ColorHelper;
  turquoiseInvert: ColorHelper;
  warningInvert: ColorHelper;
  yellowInvert: ColorHelper;
}

export interface IBuraDerivedGeneralColor {
  background: ColorHelper;
  border: ColorHelper;
  borderHover: ColorHelper;
}

export interface IBuraDerivedTextColor {
  text: ColorHelper;
  textInvert: ColorHelper;
  textLight: ColorHelper;
  textStrong: ColorHelper;
}

export interface IBuraDerivedCodeColor {
  code: ColorHelper;
  codeBackground: ColorHelper;
  pre: ColorHelper;
  preBackground: ColorHelper;
}

export interface IBuraDerivedLinkColor {
  link: ColorHelper;
  linkActive: ColorHelper;
  linkActiveBorder: ColorHelper;
  linkHover: ColorHelper;
  linkHoverBorder: ColorHelper;
  linkFocus: ColorHelper;
  linkFocusBorder: ColorHelper;
  linkInvert: ColorHelper;
  linkVisited: ColorHelper;
}

export interface IBuraDerivedTypo {
  familyCode: FontFace;
  familyPrimary: FontFace;
  sizeSmall: number | string;
  sizeNormal: number | string;
  sizeMedium: number | string;
  sizeLarge: number | string;
}

export interface IBuraDerivedColorTuple {
  blackTuple: [ColorHelper, ColorHelper];
  dangerTuple: [ColorHelper, ColorHelper];
  darkTuple: [ColorHelper, ColorHelper];
  infoTuple: [ColorHelper, ColorHelper];
  lightTuple: [ColorHelper, ColorHelper];
  linkTuple: [ColorHelper, ColorHelper];
  primaryTuple: [ColorHelper, ColorHelper];
  successTuple: [ColorHelper, ColorHelper];
  warningTuple: [ColorHelper, ColorHelper];
  whiteTuple: [ColorHelper, ColorHelper];
}

export interface IBuraDerivedShade {
  blackBisShade: ColorHelper;
  blackTerShade: ColorHelper;
  greyShade: ColorHelper;
  greyDarkShade: ColorHelper;
  greyDarkerShade: ColorHelper;
  greyLightShade: ColorHelper;
  whiteBisShade: ColorHelper;
  whiteTerShade: ColorHelper;
}

export interface IBuraDerivedVariable
  extends IBuraDerivedColor,
    IBuraDerivedInvertColor,
    IBuraDerivedGeneralColor,
    IBuraDerivedTextColor,
    IBuraDerivedCodeColor,
    IBuraDerivedLinkColor,
    IBuraDerivedTypo,
    IBuraDerivedColorTuple,
    IBuraDerivedShade {
  sizes: Array<number | string>;
}

export interface IBuraAnimation {
  spinAround: string;
}

export interface IBuraMixin {
  arrow(color: ColorHelper): NestedCSSProperties;
  block(): NestedCSSProperties;
  clearfix(): NestedCSSProperties;
  center(width: number | string, height?: number | string): NestedCSSProperties;
  delete(): NestedCSSProperties;
  fa(size: string | number, dimensions: string | number): NestedCSSProperties;
  hamburger(dimensions: string | number): NestedCSSProperties;
  loader(): NestedCSSProperties;
  overflowTouch(): NestedCSSProperties;
  overlay(offset?: number | string): NestedCSSProperties;
  placeholder(content: NestedCSSProperties): NestedCSSProperties;
  unselectable(): NestedCSSProperties;
  from(device: string | number, css: NestedCSSProperties): NestedCSSProperties;
  until(device: string | number, css: NestedCSSProperties): NestedCSSProperties;
  mobile(css: NestedCSSProperties): NestedCSSProperties;
  tablet(css: NestedCSSProperties): NestedCSSProperties;
  tabletOnly(css: NestedCSSProperties): NestedCSSProperties;
  touch(css: NestedCSSProperties): NestedCSSProperties;
  desktop(css: NestedCSSProperties): NestedCSSProperties;
  desktopOnly(css: NestedCSSProperties): NestedCSSProperties;
  widescreen(css: NestedCSSProperties): NestedCSSProperties;
  widescreenOnly(css: NestedCSSProperties): NestedCSSProperties;
  fullhd(css: NestedCSSProperties): NestedCSSProperties;

  hamburgerActiveClass(): string;
  deleteSmallClass(): string;
  deleteMediumClass(): string;
  deleteLargeClass(): string;
}

export interface IBuraTheme {
  readonly vars: IBuraVariable;
  readonly derivedVars: IBuraDerivedVariable;
  readonly animations: IBuraAnimation;
  readonly mixins: IBuraMixin;

  setVars(vars: Partial<IBuraVariable>): IBuraTheme;
  setDerivedVars(vars: Partial<IBuraDerivedVariable>): IBuraTheme;
  setAnimation(animations: Partial<IBuraAnimation>): IBuraTheme;
  setMixins(mixin: IBuraMixin): IBuraTheme;

  setColor(colors: Partial<IBuraColor>): IBuraTheme;
  setTypo(typo: Partial<IBuraTypo>): IBuraTheme;
  setResponsive(responsive: Partial<IBuraResponsive>): IBuraTheme;
  setMisc(misc: Partial<IBuraMisc>): IBuraTheme;
  setFlag(flags: Partial<IBuraFlag>): IBuraTheme;
  setDerivedColor(colors: Partial<IBuraDerivedColor>): IBuraTheme;
  setDerivedInvertColor(colors: Partial<IBuraDerivedInvertColor>): IBuraTheme;
  setDerivedGeneralColor(colors: Partial<IBuraDerivedGeneralColor>): IBuraTheme;
  setDerivedTextColor(colors: Partial<IBuraDerivedTextColor>): IBuraTheme;
  setDerivedCodeColor(colors: Partial<IBuraDerivedCodeColor>): IBuraTheme;
  setDerivedLinkColor(colors: Partial<IBuraDerivedLinkColor>): IBuraTheme;
  setDerivedTypo(typo: Partial<IBuraDerivedTypo>): IBuraTheme;
}
