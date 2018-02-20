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
  usr: Partial<t.IDerivedVariable> = {},
): t.IDerivedVariable {
  const colors: t.IDerivedColor = {
    danger: usr.danger || theme.init.red,
    dark: usr.dark || theme.init.greyDarker,
    info: usr.info || theme.init.cyan,
    light: usr.light || theme.init.whiteTer,
    primary: usr.primary || theme.init.turquoise,
    success: usr.success || theme.init.green,
    warning: usr.warning || theme.init.yellow,
  };

  const yellowInvert = usr.yellowInvert || findColorInvert(theme.init.yellow);
  const greenInvert = usr.greenInvert || findColorInvert(theme.init.green);
  const turquoiseInvert =
    usr.turquoiseInvert || findColorInvert(theme.init.turquoise);
  const cyanInvert = usr.cyanInvert || findColorInvert(theme.init.cyan);
  const blueInvert = usr.blueInvert || findColorInvert(theme.init.blue);
  const purpleInvert = usr.purpleInvert || findColorInvert(theme.init.purple);
  const redInvert = usr.redInvert || findColorInvert(theme.init.red);
  const invertColor: t.IDerivedInvertColor = {
    blueInvert,
    cyanInvert,
    dangerInvert: usr.dangerInvert || redInvert,
    darkInvert: usr.darkInvert || colors.light,
    greenInvert,
    infoInvert: usr.infoInvert || cyanInvert,
    lightInvert: usr.lightInvert || colors.dark,
    orangeInvert: usr.orangeInvert || findColorInvert(theme.init.orange),
    primaryInvert: usr.primaryInvert || turquoiseInvert,
    purpleInvert,
    redInvert,
    successInvert: usr.successInvert || greenInvert,
    turquoiseInvert,
    warningInvert: usr.warningInvert || yellowInvert,
    yellowInvert,
  };

  const background = usr.background || theme.init.whiteTer;
  const generalColors: t.IDerivedGeneralColor = {
    background,
    border: usr.border || theme.init.greyLighter,
    borderHover: usr.borderHover || theme.init.greyLight,
  };

  const text = usr.text || theme.init.greyDark;
  const textColors: t.IDerivedTextColor = {
    text,
    textInvert: usr.textInvert || findColorInvert(text),
    textLight: usr.textLight || theme.init.grey,
    textStrong: usr.textStrong || theme.init.greyDarker,
  };

  const codeColors: t.IDerivedCodeColor = {
    code: usr.code || theme.init.red,
    codeBackground: usr.codeBackground || background,
    pre: usr.pre || text,
    preBackground: usr.preBackground || background,
  };

  const linkColors: t.IDerivedLinkColor = {
    link: usr.link || theme.init.blue,
    linkActive: usr.linkActive || theme.init.greyDarker,
    linkActiveBorder: usr.linkActiveBorder || theme.init.greyDark,
    linkFocus: usr.linkFocus || theme.init.greyDarker,
    linkFocusBorder: usr.linkFocusBorder || theme.init.blue,
    linkHover: usr.linkHover || theme.init.greyDarker,
    linkHoverBorder: usr.linkHoverBorder || theme.init.greyLight,
    linkInvert: usr.linkInvert || blueInvert,
    linkVisited: usr.linkVisited || theme.init.purple,
  };

  const typo: t.IDerivedTypo = {
    familyCode: usr.familyCode || theme.init.familyMonospace,
    familyPrimary: usr.familyPrimary || theme.init.familySansSerif,
    sizeLarge: usr.sizeLarge || theme.init.size4,
    sizeMedium: usr.sizeMedium || theme.init.size5,
    sizeNormal: usr.sizeNormal || theme.init.size6,
    sizeSmall: usr.sizeSmall || theme.init.size7,
  };

  const colorTuple: t.IDerivedColorTuple = usr.colors || {
    black: [theme.init.black, theme.init.white],
    danger: [colors.danger, invertColor.dangerInvert],
    dark: [colors.dark, invertColor.darkInvert],
    info: [colors.info, invertColor.infoInvert],
    light: [colors.light, invertColor.lightInvert],
    link: [linkColors.link, linkColors.linkInvert],
    primary: [colors.primary, invertColor.primaryInvert],
    success: [colors.success, invertColor.successInvert],
    warning: [colors.warning, invertColor.warningInvert],
    white: [theme.init.white, theme.init.black],
  };

  const shades: t.IDerivedShade = usr.shades || {
    blackBis: theme.init.blackBis,
    blackTer: theme.init.blackTer,
    grey: theme.init.grey,
    greyDark: theme.init.greyDark,
    greyDarker: theme.init.greyDarker,
    greyLight: theme.init.greyLight,
    whiteBis: theme.init.whiteBis,
    whiteTer: theme.init.whiteTer,
  };

  const sizes = usr.sizes || [
    theme.init.size1,
    theme.init.size2,
    theme.init.size3,
    theme.init.size4,
    theme.init.size5,
    theme.init.size6,
    theme.init.size7,
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
