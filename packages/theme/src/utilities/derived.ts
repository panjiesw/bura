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

import * as t from '../types';
import { findColorInvert } from '../utils';

export function createDerivedVars(
  theme: t.ITheme,
): t.IDerivedVariable {
  const colors: t.IDerivedColor = {
    danger: theme.vars.red,
    dark: theme.vars.greyDarker,
    info: theme.vars.cyan,
    light: theme.vars.whiteTer,
    primary: theme.vars.turquoise,
    success: theme.vars.green,
    warning: theme.vars.yellow,
  };

  const yellowInvert = findColorInvert(theme.vars.yellow);
  const greenInvert = findColorInvert(theme.vars.green);
  const turquoiseInvert = findColorInvert(theme.vars.turquoise);
  const cyanInvert = findColorInvert(theme.vars.cyan);
  const blueInvert = findColorInvert(theme.vars.blue);
  const purpleInvert = findColorInvert(theme.vars.purple);
  const redInvert = findColorInvert(theme.vars.red);
  const invertColor: t.IDerivedInvertColor = {
    blueInvert,
    cyanInvert,
    dangerInvert: redInvert,
    darkInvert: colors.light,
    greenInvert,
    infoInvert: cyanInvert,
    lightInvert: colors.dark,
    orangeInvert: findColorInvert(theme.vars.orange),
    primaryInvert: turquoiseInvert,
    purpleInvert,
    redInvert,
    successInvert: greenInvert,
    turquoiseInvert,
    warningInvert: yellowInvert,
    yellowInvert,
  };

  const background = theme.vars.whiteTer;
  const generalColors: t.IDerivedGeneralColor = {
    background,
    border: theme.vars.greyLighter,
    borderHover: theme.vars.greyLight,
  };

  const text = theme.vars.greyDark;
  const textColors: t.IDerivedTextColor = {
    text,
    textInvert: findColorInvert(text),
    textLight: theme.vars.grey,
    textStrong: theme.vars.greyDarker,
  };

  const codeColors: t.IDerivedCodeColor = {
    code: theme.vars.red,
    codeBackground: background,
    pre: text,
    preBackground: background,
  };

  const linkColors: t.IDerivedLinkColor = {
    link: theme.vars.blue,
    linkActive: theme.vars.greyDarker,
    linkActiveBorder: theme.vars.greyDark,
    linkFocus: theme.vars.greyDarker,
    linkFocusBorder: theme.vars.blue,
    linkHover: theme.vars.greyDarker,
    linkHoverBorder: theme.vars.greyLight,
    linkInvert: blueInvert,
    linkVisited: theme.vars.purple,
  };

  const typo: t.IDerivedTypo = {
    familyCode: theme.vars.familyMonospace,
    familyPrimary: theme.vars.familySansSerif,
    sizeLarge: theme.vars.size4,
    sizeMedium: theme.vars.size5,
    sizeNormal: theme.vars.size6,
    sizeSmall: theme.vars.size7,
  };

  const colorTuple: t.IDerivedColorTuple = {
    black: [theme.vars.black, theme.vars.white],
    danger: [colors.danger, invertColor.dangerInvert],
    dark: [colors.dark, invertColor.darkInvert],
    info: [colors.info, invertColor.infoInvert],
    light: [colors.light, invertColor.lightInvert],
    link: [linkColors.link, linkColors.linkInvert],
    primary: [colors.primary, invertColor.primaryInvert],
    success: [colors.success, invertColor.successInvert],
    warning: [colors.warning, invertColor.warningInvert],
    white: [theme.vars.white, theme.vars.black],
  };

  const shades: t.IDerivedShade = {
    blackBis: theme.vars.blackBis,
    blackTer: theme.vars.blackTer,
    grey: theme.vars.grey,
    greyDark: theme.vars.greyDark,
    greyDarker: theme.vars.greyDarker,
    greyLight: theme.vars.greyLight,
    whiteBis: theme.vars.whiteBis,
    whiteTer: theme.vars.whiteTer,
  };

  const sizes = [
    theme.vars.size1,
    theme.vars.size2,
    theme.vars.size3,
    theme.vars.size4,
    theme.vars.size5,
    theme.vars.size6,
    theme.vars.size7,
  ];

  return {
    ...colors,
    ...invertColor,
    ...generalColors,
    ...textColors,
    ...codeColors,
    ...linkColors,
    ...typo,
    colors: colorTuple,
    shades,
    sizes,
  };
}
