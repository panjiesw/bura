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

import { BuraBaseTheme } from '@bura/theme';
import { em, percent, px, rem } from 'csx';
import { cssRule } from 'typestyle';
import * as typestyleTypes from 'typestyle/lib/types';
import { IBuraGenericVariable } from './types';

declare module '@bura/theme/lib/base/theme' {
  // tslint:disable-next-line:interface-name
  interface BuraBaseTheme {
    genericVars: IBuraGenericVariable;
    withGeneric(): BuraBaseTheme;
  }
}

declare module 'typestyle/lib/types' {
  // tslint:disable-next-line:interface-name
  interface CSSProperties {
    textSizeAdjust?: number | string;
  }
}

BuraBaseTheme.prototype.withGeneric = function(): BuraBaseTheme {
  this.genericVars = {
    bodyBackgroundColor: this.vars.white,
    bodyColor: this.derivedVars.text,
    bodyFamily: this.derivedVars.familyPrimary,
    bodyLineHeight: 1.5,
    bodyRendering: 'optimizeLegibility',
    bodySize: px(16),
    bodyWeight: this.vars.weightNormal,
    codeFamily: this.derivedVars.familyCode,
    codePadding: `${em(0.25)} ${em(0.5)} ${em(0.25)}`,
    codeSize: em(0.875),
    codeWeight: 'normal',
    hrBackgroundColor: this.derivedVars.border,
    hrHeight: px(1),
    hrMargin: `${rem(1.5)} 0`,
    strongColor: this.derivedVars.textStrong,
    strongWeight: this.vars.weightBold,
  };

  cssRule('html', {
    '-moz-osx-font-smoothing': 'grayscale',
    '-webkit-font-smoothing': 'antialiased',
    backgroundColor: `${this.genericVars.bodyBackgroundColor}`,
    fontSize: this.genericVars.bodySize,
    minWidth: px(300),
    overflowX: 'hidden',
    overflowY: 'scroll',
    textRendering: this.genericVars.bodyRendering,
    textSizeAdjust: percent(100),
  });

  cssRule('article, aside, figure, footer, header, hgroup, section', {
    display: 'block',
  });

  cssRule('body, button, input, select, textarea', {
    fontFamily: this.genericVars.bodyFamily,
  });

  cssRule('code, pre', {
    '-moz-osx-font-smoothing': 'auto',
    '-webkit-font-smoothing': 'auto',
    fontFamily: this.genericVars.codeFamily,
  });

  cssRule('body', {
    color: `${this.genericVars.bodyColor}`,
    fontSize: rem(1),
    fontWeight: this.genericVars.bodyWeight,
    lineHeight: this.genericVars.bodyLineHeight,
  });

  cssRule('a', {
    color: `${this.derivedVars.link}`,
    cursor: 'pointer',
    textDecoration: 'none',
    // tslint:disable-next-line:object-literal-sort-keys
    $nest: {
      '&:hover': {
        color: `${this.derivedVars.linkHover}`,
      },
      strong: {
        color: 'currentColor',
      },
    },
  });

  cssRule('code', {
    backgroundColor: `${this.derivedVars.codeBackground}`,
    color: `${this.derivedVars.code}`,
    fontSize: this.genericVars.codeSize,
    fontWeight: this.genericVars.codeWeight,
    padding: this.genericVars.codePadding,
  });

  cssRule('hr', {
    backgroundColor: `${this.genericVars.hrBackgroundColor}`,
    border: 'none',
    display: 'block',
    height: this.genericVars.hrHeight,
    margin: this.genericVars.hrMargin,
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
    color: `${this.genericVars.strongColor}`,
    fontWeight: this.genericVars.strongWeight,
  });

  cssRule('pre', this.mixins.overflowTouch(), {
    backgroundColor: `${this.derivedVars.preBackground}`,
    color: `${this.derivedVars.pre}`,
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
        color: `${this.derivedVars.textStrong}`,
      },
    },
  });
  return this;
}
