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

import * as types from '../types';
import { findColorInvert } from '../utils';

export function createDerivedVars(
  theme: types.IBuraTheme,
): types.IBuraDerivedVariable {
  const colors: types.IBuraDerivedColor = {
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
  const invertColor: types.IBuraDerivedInvertColor = {
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
  const generalColors: types.IBuraDerivedGeneralColor = {
    background,
    border: theme.vars.greyLighter,
    borderHover: theme.vars.greyLight,
  };

  const text = theme.vars.greyDark;
  const textColors: types.IBuraDerivedTextColor = {
    text,
    textInvert: findColorInvert(text),
    textLight: theme.vars.grey,
    textStrong: theme.vars.greyDarker,
  };

  const codeColors: types.IBuraDerivedCodeColor = {
    code: theme.vars.red,
    codeBackground: background,
    pre: text,
    preBackground: background,
  };

  const linkColors: types.IBuraDerivedLinkColor = {
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

  const typo: types.IBuraDerivedTypo = {
    familyCode: theme.vars.familyMonospace,
    familyPrimary: theme.vars.familySansSerif,
    sizeLarge: theme.vars.size4,
    sizeMedium: theme.vars.size5,
    sizeNormal: theme.vars.size6,
    sizeSmall: theme.vars.size7,
  };

  const colorTuple: types.IBuraDerivedColorTuple = {
    blackTuple: [theme.vars.black, theme.vars.white],
    dangerTuple: [colors.danger, invertColor.dangerInvert],
    darkTuple: [colors.dark, invertColor.darkInvert],
    infoTuple: [colors.info, invertColor.infoInvert],
    lightTuple: [colors.light, invertColor.lightInvert],
    linkTuple: [linkColors.link, linkColors.linkInvert],
    primaryTuple: [colors.primary, invertColor.primaryInvert],
    successTuple: [colors.success, invertColor.successInvert],
    warningTuple: [colors.warning, invertColor.warningInvert],
    whiteTuple: [theme.vars.white, theme.vars.black],
  };

  const shades: types.IBuraDerivedShade = {
    blackBisShade: theme.vars.blackBis,
    blackTerShade: theme.vars.blackTer,
    greyDarkShade: theme.vars.greyDark,
    greyDarkerShade: theme.vars.greyDarker,
    greyLightShade: theme.vars.greyLight,
    greyShade: theme.vars.grey,
    whiteBisShade: theme.vars.whiteBis,
    whiteTerShade: theme.vars.whiteTer,
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
    ...colorTuple,
    ...shades,
    sizes,
  };
}
