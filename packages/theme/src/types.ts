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
import * as typets from 'typestyle/lib/types';

declare module 'typestyle/lib/types' {
  // tslint:disable-next-line:interface-name
  interface CSSProperties {
    textSizeAdjust?: number | string;
  }
}

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
  familyMonospace: typets.FontFace;
  familySansSerif: typets.FontFace;
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
  familyCode: typets.FontFace;
  familyPrimary: typets.FontFace;
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

export interface IBuraMixinClass {
  deleteSmall: string;
  deleteMedium: string;
  deleteLarge: string;
  hamburgerActive: string;
}

export interface IBuraMixin {
  classes: IBuraMixinClass;

  arrow(color: ColorHelper): typets.NestedCSSProperties;
  block(): typets.NestedCSSProperties;
  clearfix(): typets.NestedCSSProperties;
  center(
    width: number | string,
    height?: number | string,
  ): typets.NestedCSSProperties;
  delete(): typets.NestedCSSProperties;
  fa(
    size: string | number,
    dimensions: string | number,
  ): typets.NestedCSSProperties;
  hamburger(dimensions: string | number): typets.NestedCSSProperties;
  loader(): typets.NestedCSSProperties;
  overflowTouch(): typets.NestedCSSProperties;
  overlay(offset?: number | string): typets.NestedCSSProperties;
  placeholder(content: typets.NestedCSSProperties): typets.NestedCSSProperties;
  unselectable(): typets.NestedCSSProperties;
  from(
    device: string | number,
    css: typets.NestedCSSProperties,
  ): typets.NestedCSSProperties;
  until(
    device: string | number,
    css: typets.NestedCSSProperties,
  ): typets.NestedCSSProperties;
  mobile(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  tablet(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  tabletOnly(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  touch(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  desktop(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  desktopOnly(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  widescreen(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  widescreenOnly(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
  fullhd(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
}

export interface IBuraGenericVariable {
  bodyBackgroundColor: ColorHelper;
  bodySize: number | string;
  bodyRendering:
    | typets.CSSGlobalValues
    | 'auto'
    | 'optimizeSpeed'
    | 'optimizeLegibility'
    | 'geometricPrecision';
  bodyFamily: typets.FontFace;
  bodyColor: ColorHelper;
  bodyWeight: typets.CSSFontWeight;
  bodyLineHeight: number;
  codeFamily: typets.FontFace;
  codePadding: string;
  codeWeight: typets.CSSFontWeight;
  codeSize: number | string;
  hrBackgroundColor: ColorHelper;
  hrHeight: number | string;
  hrMargin: string;
  strongColor: ColorHelper;
  strongWeight: typets.CSSFontWeight;
}

export interface IBuraHelperStylesheetSize {
  size0: typets.NestedCSSProperties;
  size1: typets.NestedCSSProperties;
  size2: typets.NestedCSSProperties;
  size3: typets.NestedCSSProperties;
  size4: typets.NestedCSSProperties;
  size5: typets.NestedCSSProperties;
  size6: typets.NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeMobile {
  size0Mobile: typets.NestedCSSProperties;
  size1Mobile: typets.NestedCSSProperties;
  size2Mobile: typets.NestedCSSProperties;
  size3Mobile: typets.NestedCSSProperties;
  size4Mobile: typets.NestedCSSProperties;
  size5Mobile: typets.NestedCSSProperties;
  size6Mobile: typets.NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeTablet {
  size0Tablet: typets.NestedCSSProperties;
  size1Tablet: typets.NestedCSSProperties;
  size2Tablet: typets.NestedCSSProperties;
  size3Tablet: typets.NestedCSSProperties;
  size4Tablet: typets.NestedCSSProperties;
  size5Tablet: typets.NestedCSSProperties;
  size6Tablet: typets.NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeTouch {
  size0Touch: typets.NestedCSSProperties;
  size1Touch: typets.NestedCSSProperties;
  size2Touch: typets.NestedCSSProperties;
  size3Touch: typets.NestedCSSProperties;
  size4Touch: typets.NestedCSSProperties;
  size5Touch: typets.NestedCSSProperties;
  size6Touch: typets.NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeDesktop {
  size0Desktop: typets.NestedCSSProperties;
  size1Desktop: typets.NestedCSSProperties;
  size2Desktop: typets.NestedCSSProperties;
  size3Desktop: typets.NestedCSSProperties;
  size4Desktop: typets.NestedCSSProperties;
  size5Desktop: typets.NestedCSSProperties;
  size6Desktop: typets.NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeWidescreen {
  size0Widescreen: typets.NestedCSSProperties;
  size1Widescreen: typets.NestedCSSProperties;
  size2Widescreen: typets.NestedCSSProperties;
  size3Widescreen: typets.NestedCSSProperties;
  size4Widescreen: typets.NestedCSSProperties;
  size5Widescreen: typets.NestedCSSProperties;
  size6Widescreen: typets.NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeFullHD {
  size0FullHd: typets.NestedCSSProperties;
  size1FullHd: typets.NestedCSSProperties;
  size2FullHd: typets.NestedCSSProperties;
  size3FullHd: typets.NestedCSSProperties;
  size4FullHd: typets.NestedCSSProperties;
  size5FullHd: typets.NestedCSSProperties;
  size6FullHd: typets.NestedCSSProperties;
}

export interface IBuraHelperTextAlignmentClasses {
  textAlignCentered: string;
  textAlignJustified: string;
  textAlignLeft: string;
  textAlignRight: string;

  textAlignCenteredMobile: string;
  textAlignJustifiedMobile: string;
  textAlignLeftMobile: string;
  textAlignRightMobile: string;

  textAlignCenteredTablet: string;
  textAlignJustifiedTablet: string;
  textAlignLeftTablet: string;
  textAlignRightTablet: string;

  textAlignCenteredTabletOnly: string;
  textAlignJustifiedTabletOnly: string;
  textAlignLeftTabletOnly: string;
  textAlignRightTabletOnly: string;

  textAlignCenteredTouch: string;
  textAlignJustifiedTouch: string;
  textAlignLeftTouch: string;
  textAlignRightTouch: string;

  textAlignCenteredDesktop: string;
  textAlignJustifiedDesktop: string;
  textAlignLeftDesktop: string;
  textAlignRightDesktop: string;

  textAlignCenteredDesktopOnly: string;
  textAlignJustifiedDesktopOnly: string;
  textAlignLeftDesktopOnly: string;
  textAlignRightDesktopOnly: string;

  textAlignCenteredWidescreen: string;
  textAlignJustifiedWidescreen: string;
  textAlignLeftWidescreen: string;
  textAlignRightWidescreen: string;

  textAlignCenteredWidescreenOnly: string;
  textAlignJustifiedWidescreenOnly: string;
  textAlignLeftWidescreenOnly: string;
  textAlignRightWidescreenOnly: string;

  textAlignCenteredFullHd: string;
  textAlignJustifiedFullHd: string;
  textAlignLeftFullHd: string;
  textAlignRightFullHd: string;
}

export interface IBuraHelperStylesheet extends IBuraHelperStylesheetSize {
  clearfix: typets.NestedCSSProperties;
  pulledLeft: typets.NestedCSSProperties;
  pulledRight: typets.NestedCSSProperties;
  clipped: typets.NestedCSSProperties;
  overlay: typets.NestedCSSProperties;
}

export type BuraHelperClasses = Record<keyof IBuraHelperStylesheet, string> &
  Record<keyof IBuraHelperStylesheetSizeMobile, string> &
  Record<keyof IBuraHelperStylesheetSizeTablet, string> &
  Record<keyof IBuraHelperStylesheetSizeTouch, string> &
  Record<keyof IBuraHelperStylesheetSizeDesktop, string> &
  Record<keyof IBuraHelperStylesheetSizeWidescreen, string> &
  Record<keyof IBuraHelperStylesheetSizeFullHD, string>;

export type BuraHelperStylesheet = Record<
  keyof IBuraHelperStylesheet,
  typets.NestedCSSProperties
>;

export interface IBuraTheme {
  vars: IBuraVariable;
  derivedVars: IBuraDerivedVariable;
  animations: IBuraAnimation;
  mixins: IBuraMixin;

  genericVars: IBuraGenericVariable;
  helpers: BuraHelperClasses;

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

  withMiniReset(): IBuraTheme;
  withGeneric(): IBuraTheme;
}
