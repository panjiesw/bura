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
): t.IGenericVariable {
  return {
    bodyBackgroundColor: theme.vars.white,
    bodyColor: theme.derivedVars.text,
    bodyFamily: theme.derivedVars.familyPrimary,
    bodyLineHeight: 1.5,
    bodyRendering: 'optimizeLegibility',
    bodySize: px(16),
    bodyWeight: theme.vars.weightNormal,
    codeFamily: theme.derivedVars.familyCode,
    codePadding: `${em(0.25)} ${em(0.5)} ${em(0.25)}`,
    codeSize: em(0.875),
    codeWeight: 'normal',
    hrBackgroundColor: theme.derivedVars.border,
    hrHeight: px(1),
    hrMargin: `${rem(1.5)} 0`,
    strongColor: theme.derivedVars.textStrong,
    strongWeight: theme.vars.weightBold,
  }
}

export function writeGenericRule(theme: t.ITheme) {
  cssRule('html', {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: `${theme.genericVars.bodyBackgroundColor}`,
    fontSize: theme.genericVars.bodySize,
    minWidth: px(300),
    overflowX: 'hidden',
    overflowY: 'scroll',
    textRendering: theme.genericVars.bodyRendering,
    textSizeAdjust: percent(100),
  });

  cssRule('article, aside, figure, footer, header, hgroup, section', {
    display: 'block',
  });

  cssRule('body, button, input, select, textarea', {
    fontFamily: theme.genericVars.bodyFamily,
  });

  cssRule('code, pre', {
    '-moz-osx-font-smoothing': 'auto',
    '-webkit-font-smoothing': 'auto',
    fontFamily: theme.genericVars.codeFamily,
  });

  cssRule('body', {
    color: `${theme.genericVars.bodyColor}`,
    fontSize: rem(1),
    fontWeight: theme.genericVars.bodyWeight,
    lineHeight: theme.genericVars.bodyLineHeight,
  });

  cssRule('a', {
    color: `${theme.derivedVars.link}`,
    cursor: 'pointer',
    textDecoration: 'none',
    // tslint:disable-next-line:object-literal-sort-keys
    $nest: {
      '&:hover': {
        color: `${theme.derivedVars.linkHover}`,
      },
      strong: {
        color: 'currentColor',
      },
    },
  });

  cssRule('code', {
    backgroundColor: `${theme.derivedVars.codeBackground}`,
    color: `${theme.derivedVars.code}`,
    fontSize: theme.genericVars.codeSize,
    fontWeight: theme.genericVars.codeWeight,
    padding: theme.genericVars.codePadding,
  });

  cssRule('hr', {
    backgroundColor: `${theme.genericVars.hrBackgroundColor}`,
    border: 'none',
    display: 'block',
    height: theme.genericVars.hrHeight,
    margin: theme.genericVars.hrMargin,
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
    color: `${theme.genericVars.strongColor}`,
    fontWeight: theme.genericVars.strongWeight,
  });

  cssRule('pre', theme.mixins.overflowTouch(), {
    backgroundColor: `${theme.derivedVars.preBackground}`,
    color: `${theme.derivedVars.pre}`,
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
        color: `${theme.derivedVars.textStrong}`,
      },
    },
  });
}
