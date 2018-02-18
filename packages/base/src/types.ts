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
import {
  CSSFontWeight,
  CSSGlobalValues,
  FontFace,
  NestedCSSProperties,
} from 'typestyle/lib/types';

export interface IBuraGenericVariable {
  bodyBackgroundColor: ColorHelper;
  bodySize: number | string;
  bodyRendering:
    | CSSGlobalValues
    | 'auto'
    | 'optimizeSpeed'
    | 'optimizeLegibility'
    | 'geometricPrecision';
  bodyFamily: FontFace;
  bodyColor: ColorHelper;
  bodyWeight: CSSFontWeight;
  bodyLineHeight: number;
  codeFamily: FontFace;
  codePadding: string;
  codeWeight: CSSFontWeight;
  codeSize: number | string;
  hrBackgroundColor: ColorHelper;
  hrHeight: number | string;
  hrMargin: string;
  strongColor: ColorHelper;
  strongWeight: CSSFontWeight;
}

export interface IBuraHelperStylesheetSize {
  size0: NestedCSSProperties;
  size1: NestedCSSProperties;
  size2: NestedCSSProperties;
  size3: NestedCSSProperties;
  size4: NestedCSSProperties;
  size5: NestedCSSProperties;
  size6: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeMobile {
  size0mobile: NestedCSSProperties;
  size1mobile: NestedCSSProperties;
  size2mobile: NestedCSSProperties;
  size3mobile: NestedCSSProperties;
  size4mobile: NestedCSSProperties;
  size5mobile: NestedCSSProperties;
  size6mobile: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeTablet {
  size0tablet: NestedCSSProperties;
  size1tablet: NestedCSSProperties;
  size2tablet: NestedCSSProperties;
  size3tablet: NestedCSSProperties;
  size4tablet: NestedCSSProperties;
  size5tablet: NestedCSSProperties;
  size6tablet: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeTouch {
  size0touch: NestedCSSProperties;
  size1touch: NestedCSSProperties;
  size2touch: NestedCSSProperties;
  size3touch: NestedCSSProperties;
  size4touch: NestedCSSProperties;
  size5touch: NestedCSSProperties;
  size6touch: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeDesktop {
  size0desktop: NestedCSSProperties;
  size1desktop: NestedCSSProperties;
  size2desktop: NestedCSSProperties;
  size3desktop: NestedCSSProperties;
  size4desktop: NestedCSSProperties;
  size5desktop: NestedCSSProperties;
  size6desktop: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeWidescreen {
  size0widescreen: NestedCSSProperties;
  size1widescreen: NestedCSSProperties;
  size2widescreen: NestedCSSProperties;
  size3widescreen: NestedCSSProperties;
  size4widescreen: NestedCSSProperties;
  size5widescreen: NestedCSSProperties;
  size6widescreen: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeFullHD {
  size0fullhd: NestedCSSProperties;
  size1fullhd: NestedCSSProperties;
  size2fullhd: NestedCSSProperties;
  size3fullhd: NestedCSSProperties;
  size4fullhd: NestedCSSProperties;
  size5fullhd: NestedCSSProperties;
  size6fullhd: NestedCSSProperties;
}

export interface IBuraHelperStylesheet
  extends IBuraHelperStylesheetSize /* ,
    IBuraHelperStylesheetSizeMobile,
    IBuraHelperStylesheetSizeTablet,
    IBuraHelperStylesheetSizeTouch,
    IBuraHelperStylesheetSizeDesktop,
    IBuraHelperStylesheetSizeWidescreen,
    IBuraHelperStylesheetSizeFullHD */ {
  clearFix: NestedCSSProperties;
  pulledLeft: NestedCSSProperties;
  pulledRight: NestedCSSProperties;
  clipped: NestedCSSProperties;
  overlay: NestedCSSProperties;
}

export type TBuraHelperClasses = Record<keyof IBuraHelperStylesheet, string> &
  Record<keyof IBuraHelperStylesheetSizeMobile, string> &
  Record<keyof IBuraHelperStylesheetSizeTablet, string> &
  Record<keyof IBuraHelperStylesheetSizeTouch, string> &
  Record<keyof IBuraHelperStylesheetSizeDesktop, string> &
  Record<keyof IBuraHelperStylesheetSizeWidescreen, string> &
  Record<keyof IBuraHelperStylesheetSizeFullHD, string>;
export type TBuraHelperStylesheet = Record<
  keyof IBuraHelperStylesheet,
  NestedCSSProperties
>;
