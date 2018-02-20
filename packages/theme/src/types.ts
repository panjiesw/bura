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
  weightLight: typets.CSSFontWeight;
  weightNormal: typets.CSSFontWeight;
  weightMedium: typets.CSSFontWeight;
  weightSemibold: typets.CSSFontWeight;
  weightBold: typets.CSSFontWeight;
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
  isSize0: string;
  isSize1: string;
  isSize2: string;
  isSize3: string;
  isSize4: string;
  isSize5: string;
  isSize6: string;
}

export interface IHelperSizeMobile {
  isSize0Mobile: string;
  isSize1Mobile: string;
  isSize2Mobile: string;
  isSize3Mobile: string;
  isSize4Mobile: string;
  isSize5Mobile: string;
  isSize6Mobile: string;
}

export interface IHelperSizeTablet {
  isSize0Tablet: string;
  isSize1Tablet: string;
  isSize2Tablet: string;
  isSize3Tablet: string;
  isSize4Tablet: string;
  isSize5Tablet: string;
  isSize6Tablet: string;
}

export interface IHelperSizeTouch {
  isSize0Touch: string;
  isSize1Touch: string;
  isSize2Touch: string;
  isSize3Touch: string;
  isSize4Touch: string;
  isSize5Touch: string;
  isSize6Touch: string;
}

export interface IHelperSizeDesktop {
  isSize0Desktop: string;
  isSize1Desktop: string;
  isSize2Desktop: string;
  isSize3Desktop: string;
  isSize4Desktop: string;
  isSize5Desktop: string;
  isSize6Desktop: string;
}

export interface IHelperSizeWidescreen {
  isSize0Widescreen: string;
  isSize1Widescreen: string;
  isSize2Widescreen: string;
  isSize3Widescreen: string;
  isSize4Widescreen: string;
  isSize5Widescreen: string;
  isSize6Widescreen: string;
}

export interface IHelperSizeFullHD {
  isSize0Fullhd: string;
  isSize1Fullhd: string;
  isSize2Fullhd: string;
  isSize3Fullhd: string;
  isSize4Fullhd: string;
  isSize5Fullhd: string;
  isSize6Fullhd: string;
}

export interface IHelperTextAlignmentClasses {
  hasTextCentered: string;
  hasTextJustified: string;
  hasTextLeft: string;
  hasTextRight: string;

  hasTextCenteredMobile: string;
  hasTextJustifiedMobile: string;
  hasTextLeftMobile: string;
  hasTextRightMobile: string;

  hasTextCenteredTablet: string;
  hasTextJustifiedTablet: string;
  hasTextLeftTablet: string;
  hasTextRightTablet: string;

  hasTextCenteredTabletOnly: string;
  hasTextJustifiedTabletOnly: string;
  hasTextLeftTabletOnly: string;
  hasTextRightTabletOnly: string;

  hasTextCenteredTouch: string;
  hasTextJustifiedTouch: string;
  hasTextLeftTouch: string;
  hasTextRightTouch: string;

  hasTextCenteredDesktop: string;
  hasTextJustifiedDesktop: string;
  hasTextLeftDesktop: string;
  hasTextRightDesktop: string;

  hasTextCenteredDesktopOnly: string;
  hasTextJustifiedDesktopOnly: string;
  hasTextLeftDesktopOnly: string;
  hasTextRightDesktopOnly: string;

  hasTextCenteredWidescreen: string;
  hasTextJustifiedWidescreen: string;
  hasTextLeftWidescreen: string;
  hasTextRightWidescreen: string;

  hasTextCenteredWidescreenOnly: string;
  hasTextJustifiedWidescreenOnly: string;
  hasTextLeftWidescreenOnly: string;
  hasTextRightWidescreenOnly: string;

  hasTextCenteredFullhd: string;
  hasTextJustifiedFullhd: string;
  hasTextLeftFullhd: string;
  hasTextRightFullhd: string;
}

export interface IHelperTextColor {
  hasTextBlack: string;
  hasTextDanger: string;
  hasTextDark: string;
  hasTextInfo: string;
  hasTextLight: string;
  hasTextLink: string;
  hasTextPrimary: string;
  hasTextSuccess: string;
  hasTextWarning: string;
  hasTextWhite: string;
}

export interface IHelperTextShade {
  hasTextBlackBis: string;
  hasTextBlackTer: string;
  hasTextGrey: string;
  hasTextGreyDark: string;
  hasTextGreyDarker: string;
  hasTextGreyLight: string;
  hasTextWhiteBis: string;
  hasTextWhiteTer: string;
}

export interface IHelperTextWeight {
  hasTextWeightBold: string;
  hasTextWeightLight: string;
  hasTextWeightNormal: string;
  hasTextWeightSemibold: string;
}

export interface IHelperDisplay {
  isBlock: string;
  isFlex: string;
  isInline: string;
  isInlineBlock: string;
  isInlineFlex: string;

  isBlockMobile: string;
  isFlexMobile: string;
  isInlineMobile: string;
  isInlineBlockMobile: string;
  isInlineFlexMobile: string;

  isBlockTablet: string;
  isFlexTablet: string;
  isInlineTablet: string;
  isInlineBlockTablet: string;
  isInlineFlexTablet: string;

  isBlockTableOnly: string;
  isFlexTableOnly: string;
  isInlineTableOnly: string;
  isInlineBlockTableOnly: string;
  isInlineFlexTableOnly: string;

  isBlockTouch: string;
  isFlexTouch: string;
  isInlineTouch: string;
  isInlineBlockTouch: string;
  isInlineFlexTouch: string;

  isBlockDesktop: string;
  isFlexDesktop: string;
  isInlineDesktop: string;
  isInlineBlockDesktop: string;
  isInlineFlexDesktop: string;

  isBlockDesktopOnly: string;
  isFlexDesktopOnly: string;
  isInlineDesktopOnly: string;
  isInlineBlockDesktopOnly: string;
  isInlineFlexDesktopOnly: string;

  isBlockWidescreen: string;
  isFlexWidescreen: string;
  isInlineWidescreen: string;
  isInlineBlockWidescreen: string;
  isInlineFlexWidescreen: string;

  isBlockWidescreenOnly: string;
  isFlexWidescreenOnly: string;
  isInlineWidescreenOnly: string;
  isInlineBlockWidescreenOnly: string;
  isInlineFlexWidescreenOnly: string;

  isBlockFullhd: string;
  isFlexFullhd: string;
  isInlineFullhd: string;
  isInlineBlockFullhd: string;
  isInlineFlexFullhd: string;
}

export interface IHelperVisibility {
  isHidden: string;
  isHiddenMobile: string;
  isHiddenTablet: string;
  isHiddenTabletOnly: string;
  isHiddenTouch: string;
  isHiddenDesktop: string;
  isHiddenDesktopOnly: string;
  isHiddenWidescreen: string;
  isHiddenWidescreenOnly: string;
  isHiddenFullhd: string;

  isInvisible: string;
  isInvisibleMobile: string;
  isInvisibleTablet: string;
  isInvisibleTabletOnly: string;
  isInvisibleTouch: string;
  isInvisibleDesktop: string;
  isInvisibleDesktopOnly: string;
  isInvisibleWidescreen: string;
  isInvisibleWidescreenOnly: string;
  isInvisibleFullhd: string;
}

export interface IHelperOther {
  isClearfix: string;
  isPulledLeft: string;
  isPulledRight: string;
  isClipped: string;
  isOverlay: string;
  isCapitalized: string;
  isLowercase: string;
  isUppercase: string;
  isItalic: string;
  isMarginless: string;
  isPaddingless: string;
  isRadiusless: string;
  isShadowless: string;
  isUnselectable: string;
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
  IHelperTextShade &
  IHelperTextWeight &
  IHelperDisplay &
  IHelperVisibility;

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
  fullhd(css: typets.NestedCSSProperties): typets.NestedCSSProperties;
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
