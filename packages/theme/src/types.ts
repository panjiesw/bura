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

export interface IColor {
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

export interface ITypo {
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

export interface IResponsive {
  gap: number | string;
  tablet: number | string;
  desktop: number | string;
  widescreen: number | string;
  fullhd: number | string;
}

export interface IMisc {
  easing: string;
  radiusSmall: number | string;
  radius: number | string;
  radiusLarge: number | string;
  radiusRounded: number | string;
  speed: string;
}

export interface IFlag {
  variableColumns: boolean;
}

export interface IVariable extends IColor, ITypo, IResponsive, IMisc, IFlag {}

export interface IDerivedColor {
  danger: ColorHelper;
  dark: ColorHelper;
  info: ColorHelper;
  light: ColorHelper;
  primary: ColorHelper;
  success: ColorHelper;
  warning: ColorHelper;
}

export interface IDerivedInvertColor {
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

export interface IDerivedGeneralColor {
  background: ColorHelper;
  border: ColorHelper;
  borderHover: ColorHelper;
}

export interface IDerivedTextColor {
  text: ColorHelper;
  textInvert: ColorHelper;
  textLight: ColorHelper;
  textStrong: ColorHelper;
}

export interface IDerivedCodeColor {
  code: ColorHelper;
  codeBackground: ColorHelper;
  pre: ColorHelper;
  preBackground: ColorHelper;
}

export interface IDerivedLinkColor {
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

export interface IDerivedTypo {
  familyCode: typets.FontFace;
  familyPrimary: typets.FontFace;
  sizeSmall: number | string;
  sizeNormal: number | string;
  sizeMedium: number | string;
  sizeLarge: number | string;
}

export interface IDerivedColorTuple {
  black: [ColorHelper, ColorHelper];
  danger: [ColorHelper, ColorHelper];
  dark: [ColorHelper, ColorHelper];
  info: [ColorHelper, ColorHelper];
  light: [ColorHelper, ColorHelper];
  link: [ColorHelper, ColorHelper];
  primary: [ColorHelper, ColorHelper];
  success: [ColorHelper, ColorHelper];
  warning: [ColorHelper, ColorHelper];
  white: [ColorHelper, ColorHelper];
}

export interface IDerivedShade {
  blackBis: ColorHelper;
  blackTer: ColorHelper;
  grey: ColorHelper;
  greyDark: ColorHelper;
  greyDarker: ColorHelper;
  greyLight: ColorHelper;
  whiteBis: ColorHelper;
  whiteTer: ColorHelper;
}

export interface IDerivedVariable
  extends IDerivedColor,
    IDerivedInvertColor,
    IDerivedGeneralColor,
    IDerivedTextColor,
    IDerivedCodeColor,
    IDerivedLinkColor,
    IDerivedTypo {
  colors: IDerivedColorTuple;
  shades: IDerivedShade;
  sizes: Array<number | string>;
}

export interface IAnimation {
  spinAround: string;
}

export interface IGenericVariable {
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

export interface IHelperSize {
  size0: string;
  size1: string;
  size2: string;
  size3: string;
  size4: string;
  size5: string;
  size6: string;
}

export interface IHelperSizeMobile {
  size0Mobile: string;
  size1Mobile: string;
  size2Mobile: string;
  size3Mobile: string;
  size4Mobile: string;
  size5Mobile: string;
  size6Mobile: string;
}

export interface IHelperSizeTablet {
  size0Tablet: string;
  size1Tablet: string;
  size2Tablet: string;
  size3Tablet: string;
  size4Tablet: string;
  size5Tablet: string;
  size6Tablet: string;
}

export interface IHelperSizeTouch {
  size0Touch: string;
  size1Touch: string;
  size2Touch: string;
  size3Touch: string;
  size4Touch: string;
  size5Touch: string;
  size6Touch: string;
}

export interface IHelperSizeDesktop {
  size0Desktop: string;
  size1Desktop: string;
  size2Desktop: string;
  size3Desktop: string;
  size4Desktop: string;
  size5Desktop: string;
  size6Desktop: string;
}

export interface IHelperSizeWidescreen {
  size0Widescreen: string;
  size1Widescreen: string;
  size2Widescreen: string;
  size3Widescreen: string;
  size4Widescreen: string;
  size5Widescreen: string;
  size6Widescreen: string;
}

export interface IHelperSizeFullHD {
  size0FullHd: string;
  size1FullHd: string;
  size2FullHd: string;
  size3FullHd: string;
  size4FullHd: string;
  size5FullHd: string;
  size6FullHd: string;
}

export interface IHelperTextAlignmentClasses {
  textCentered: string;
  textJustified: string;
  textLeft: string;
  textRight: string;

  textCenteredMobile: string;
  textJustifiedMobile: string;
  textLeftMobile: string;
  textRightMobile: string;

  textCenteredTablet: string;
  textJustifiedTablet: string;
  textLeftTablet: string;
  textRightTablet: string;

  textCenteredTabletOnly: string;
  textJustifiedTabletOnly: string;
  textLeftTabletOnly: string;
  textRightTabletOnly: string;

  textCenteredTouch: string;
  textJustifiedTouch: string;
  textLeftTouch: string;
  textRightTouch: string;

  textCenteredDesktop: string;
  textJustifiedDesktop: string;
  textLeftDesktop: string;
  textRightDesktop: string;

  textCenteredDesktopOnly: string;
  textJustifiedDesktopOnly: string;
  textLeftDesktopOnly: string;
  textRightDesktopOnly: string;

  textCenteredWidescreen: string;
  textJustifiedWidescreen: string;
  textLeftWidescreen: string;
  textRightWidescreen: string;

  textCenteredWidescreenOnly: string;
  textJustifiedWidescreenOnly: string;
  textLeftWidescreenOnly: string;
  textRightWidescreenOnly: string;

  textCenteredFullHd: string;
  textJustifiedFullHd: string;
  textLeftFullHd: string;
  textRightFullHd: string;
}

export interface IHelperTextColor {
  textBlack: string;
  textDanger: string;
  textDark: string;
  textInfo: string;
  textLight: string;
  textLink: string;
  textPrimary: string;
  textSuccess: string;
  textWarning: string;
  textWhite: string;
}

export interface IHelperTextShade {
  textBlackBis: string;
  textBlackTer: string;
  textGrey: string;
  textGreyDark: string;
  textGreyDarker: string;
  textGreyLight: string;
  textWhiteBis: string;
  textWhiteTer: string;
}

export interface IHelperOther {
  clearfix: string;
  pulledLeft: string;
  pulledRight: string;
  clipped: string;
  overlay: string;
  capitalized: string;
  lowercase: string;
  uppercase: string;
  // italic: typets.NestedCSSProperties;
}

export type BuraHelperClasses = IHelperOther &
  IHelperSize &
  IHelperSizeMobile &
  IHelperSizeTablet &
  IHelperSizeTouch &
  IHelperSizeDesktop &
  IHelperSizeWidescreen &
  IHelperSizeFullHD &
  IHelperTextAlignmentClasses &
  IHelperTextColor &
  IHelperTextShade;

export interface IMixinClass {
  deleteSmall: string;
  deleteMedium: string;
  deleteLarge: string;
  hamburgerActive: string;
}

export interface IMixin {
  classes: IMixinClass;

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
  fullHd(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
}

export type VariablesFactory = (theme: ITheme) => IThemeConfig;

export interface IThemeConfig {
  init?: Partial<IVariable>;
  derived?: Partial<IDerivedVariable>;
  animations?: Partial<IAnimation>;
  generic?: Partial<IGenericVariable>;
}

export interface IThemeOption {
  debug?: boolean;
}

export interface ITheme {
  options: IThemeOption;

  init: IVariable;
  derived: IDerivedVariable;
  animations: IAnimation;
  mixins: IMixin;
  generic: IGenericVariable;
  helpers: BuraHelperClasses;

  withVars(factory: VariablesFactory): ITheme;
  withMiniReset(): ITheme;
  withGeneric(): ITheme;
}
