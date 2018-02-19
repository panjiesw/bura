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
  size0Mobile: NestedCSSProperties;
  size1Mobile: NestedCSSProperties;
  size2Mobile: NestedCSSProperties;
  size3Mobile: NestedCSSProperties;
  size4Mobile: NestedCSSProperties;
  size5Mobile: NestedCSSProperties;
  size6Mobile: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeTablet {
  size0Tablet: NestedCSSProperties;
  size1Tablet: NestedCSSProperties;
  size2Tablet: NestedCSSProperties;
  size3Tablet: NestedCSSProperties;
  size4Tablet: NestedCSSProperties;
  size5Tablet: NestedCSSProperties;
  size6Tablet: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeTouch {
  size0Touch: NestedCSSProperties;
  size1Touch: NestedCSSProperties;
  size2Touch: NestedCSSProperties;
  size3Touch: NestedCSSProperties;
  size4Touch: NestedCSSProperties;
  size5Touch: NestedCSSProperties;
  size6Touch: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeDesktop {
  size0Desktop: NestedCSSProperties;
  size1Desktop: NestedCSSProperties;
  size2Desktop: NestedCSSProperties;
  size3Desktop: NestedCSSProperties;
  size4Desktop: NestedCSSProperties;
  size5Desktop: NestedCSSProperties;
  size6Desktop: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeWidescreen {
  size0Widescreen: NestedCSSProperties;
  size1Widescreen: NestedCSSProperties;
  size2Widescreen: NestedCSSProperties;
  size3Widescreen: NestedCSSProperties;
  size4Widescreen: NestedCSSProperties;
  size5Widescreen: NestedCSSProperties;
  size6Widescreen: NestedCSSProperties;
}

export interface IBuraHelperStylesheetSizeFullHD {
  size0FullHd: NestedCSSProperties;
  size1FullHd: NestedCSSProperties;
  size2FullHd: NestedCSSProperties;
  size3FullHd: NestedCSSProperties;
  size4FullHd: NestedCSSProperties;
  size5FullHd: NestedCSSProperties;
  size6FullHd: NestedCSSProperties;
}

export interface IBuraHelperTextAlignment {}

export interface IBuraHelperStylesheet
  extends IBuraHelperStylesheetSize {
  clearfix: NestedCSSProperties;
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
