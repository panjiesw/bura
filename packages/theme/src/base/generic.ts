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

import { em, percent, px, rem } from 'csx';
import { cssRule } from 'typestyle';
import * as t from '../types';

export function createGenericVars(
  theme: t.ITheme,
  vars: Partial<t.IGenericVariable> = {},
): t.IGenericVariable {
  return {
    bodyBackgroundColor: vars.bodyBackgroundColor || theme.init.white,
    bodyColor: vars.bodyColor || theme.derived.text,
    bodyFamily: vars.bodyFamily || theme.derived.familyPrimary,
    bodyLineHeight: vars.bodyLineHeight || 1.5,
    bodyRendering: vars.bodyRendering || 'optimizeLegibility',
    bodySize: vars.bodySize || px(16),
    bodyWeight: vars.bodyWeight || theme.init.weightNormal,
    codeFamily: vars.codeFamily || theme.derived.familyCode,
    codePadding: vars.codePadding || `${em(0.25)} ${em(0.5)} ${em(0.25)}`,
    codeSize: vars.codeSize || em(0.875),
    codeWeight: vars.codeWeight || 'normal',
    hrBackgroundColor: vars.hrBackgroundColor || theme.derived.border,
    hrHeight: vars.hrHeight || px(1),
    hrMargin: vars.hrMargin || `${rem(1.5)} 0`,
    strongColor: vars.strongColor || theme.derived.textStrong,
    strongWeight: vars.strongWeight || theme.init.weightBold,
  };
}

export function writeGenericRule(theme: t.ITheme) {
  cssRule('html', {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: `${theme.generic.bodyBackgroundColor}`,
    fontSize: theme.generic.bodySize,
    minWidth: px(300),
    overflowX: 'hidden',
    overflowY: 'scroll',
    textRendering: theme.generic.bodyRendering,
    textSizeAdjust: percent(100),
    // tslint:disable-next-line:object-literal-sort-keys
    '-webkit-text-size-adjust': percent(100),
    '-moz-text-size-adjust': percent(100),
    '-ms-text-size-adjust': percent(100),
  });

  cssRule('article, aside, figure, footer, header, hgroup, section', {
    display: 'block',
  });

  cssRule('body, button, input, select, textarea', {
    fontFamily: theme.generic.bodyFamily,
  });

  cssRule('code, pre', {
    '-moz-osx-font-smoothing': 'auto',
    '-webkit-font-smoothing': 'auto',
    fontFamily: theme.generic.codeFamily,
  });

  cssRule('body', {
    color: `${theme.generic.bodyColor}`,
    fontSize: rem(1),
    fontWeight: theme.generic.bodyWeight,
    lineHeight: theme.generic.bodyLineHeight,
  });

  cssRule('a', {
    color: `${theme.derived.link}`,
    cursor: 'pointer',
    textDecoration: 'none',
    // tslint:disable-next-line:object-literal-sort-keys
    $nest: {
      '&:hover': {
        color: `${theme.derived.linkHover}`,
      },
      strong: {
        color: 'currentColor',
      },
    },
  });

  cssRule('code', {
    backgroundColor: `${theme.derived.codeBackground}`,
    color: `${theme.derived.code}`,
    fontSize: theme.generic.codeSize,
    fontWeight: theme.generic.codeWeight,
    padding: theme.generic.codePadding,
  });

  cssRule('hr', {
    backgroundColor: `${theme.generic.hrBackgroundColor}`,
    border: 'none',
    display: 'block',
    height: theme.generic.hrHeight,
    margin: theme.generic.hrMargin,
  });

  cssRule('img', {
    height: 'auto',
    maxWidth: percent(100),
  });

  cssRule('input[type="checkbox"], input[type="radio"]', {
    verticalAlign: 'baseline',
  });

  cssRule('small', {
    fontSize: em(0.875),
  });

  cssRule('span', {
    fontStyle: 'inherit',
    fontWeight: 'inherit',
  });

  cssRule('strong', {
    color: `${theme.generic.strongColor}`,
    fontWeight: theme.generic.strongWeight,
  });

  cssRule('pre', theme.mixins.overflowTouch(), {
    backgroundColor: `${theme.derived.preBackground}`,
    color: `${theme.derived.pre}`,
    fontSize: em(0.875),
    overflowX: 'auto',
    padding: `${rem(1.25)} ${rem(1.5)}`,
    whiteSpace: 'pre',
    wordWrap: 'normal',
    // tslint:disable-next-line:object-literal-sort-keys
    $nest: {
      code: {
        backgroundColor: 'transparent',
        color: 'currentColor',
        fontSize: em(1),
        padding: 0,
      },
    },
  });

  cssRule('table', {
    $nest: {
      'td, th': {
        textAlign: 'left',
        verticalAlign: 'top',
      },
      th: {
        color: `${theme.derived.textStrong}`,
      },
    },
  });
}
