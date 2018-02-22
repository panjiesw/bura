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
import { prefix } from '../utils';

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

export function rule1(generic: Partial<t.IGenericVariable>) {
  cssRule(
    'html',
    prefix({
      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
      backgroundColor: `${generic.bodyBackgroundColor}`,
      fontSize: generic.bodySize,
      minWidth: px(300),
      overflowX: 'hidden',
      overflowY: 'scroll',
      textRendering: generic.bodyRendering,
      textSizeAdjust: percent(100),
    }),
  );
}

export function rule2() {
  cssRule(
    'article, aside, figure, footer, header, hgroup, section',
    prefix({
      display: 'block',
    }),
  );
}

export function rule3(generic: Partial<t.IGenericVariable>) {
  cssRule(
    'body, button, input, select, textarea',
    prefix({
      fontFamily: generic.bodyFamily,
    }),
  );
}

export function rule4(generic: Partial<t.IGenericVariable>) {
  cssRule(
    'code, pre',
    prefix({
      '-moz-osx-font-smoothing': 'auto',
      '-webkit-font-smoothing': 'auto',
      fontFamily: generic.codeFamily,
    }),
  );
}

export function rule5(generic: Partial<t.IGenericVariable>) {
  cssRule(
    'body',
    prefix({
      color: `${generic.bodyColor}`,
      fontSize: rem(1),
      fontWeight: generic.bodyWeight,
      lineHeight: generic.bodyLineHeight,
    }),
  );
}

export function rule6(derived: Partial<t.IDerivedVariable>) {
  cssRule(
    'a',
    prefix({
      color: `${derived.link}`,
      cursor: 'pointer',
      textDecoration: 'none',
    }),
    {
      $nest: {
        '&:hover': {
          color: `${derived.linkHover}`,
        },
        strong: {
          color: 'currentColor',
        },
      },
    },
  );
}
export function rule7(
  generic: Partial<t.IGenericVariable>,
  derived: Partial<t.IDerivedVariable>,
) {
  cssRule(
    'code',
    prefix({
      backgroundColor: `${derived.codeBackground}`,
      color: `${derived.code}`,
      fontSize: generic.codeSize,
      fontWeight: generic.codeWeight,
      padding: generic.codePadding,
    }),
  );
}
export function rule8(generic: Partial<t.IGenericVariable>) {
  cssRule(
    'hr',
    prefix({
      backgroundColor: `${generic.hrBackgroundColor}`,
      border: 'none',
      display: 'block',
      height: generic.hrHeight,
      margin: generic.hrMargin,
    }),
  );
}
export function rule9() {
  cssRule(
    'img',
    prefix({
      height: 'auto',
      maxWidth: percent(100),
    }),
  );
}
export function rule10() {
  cssRule(
    'input[type="checkbox"], input[type="radio"]',
    prefix({
      verticalAlign: 'baseline',
    }),
  );
}
export function rule11() {
  cssRule('small', {
    fontSize: em(0.875),
  });
}
export function rule12() {
  cssRule(
    'span',
    prefix({
      fontStyle: 'inherit',
      fontWeight: 'inherit',
    }),
  );
}
export function rule13(generic: Partial<t.IGenericVariable>) {
  cssRule('strong', {
    color: `${generic.strongColor}`,
    fontWeight: generic.strongWeight,
  });
}
export function rule14(derived: Partial<t.IDerivedVariable>, mixins: t.IMixin) {
  cssRule(
    'pre',
    mixins.overflowTouch(),
    prefix({
      backgroundColor: `${derived.preBackground}`,
      color: `${derived.pre}`,
      fontSize: em(0.875),
      overflowX: 'auto',
      padding: `${rem(1.25)} ${rem(1.5)}`,
      whiteSpace: 'pre',
      wordWrap: 'normal',
    }),
    {
      $nest: {
        code: prefix({
          backgroundColor: 'transparent',
          color: 'currentColor',
          fontSize: em(1),
          padding: 0,
        }),
      },
    },
  );
}
export function rule15(derived: Partial<t.IDerivedVariable>) {
  cssRule('table', {
    $nest: {
      'td, th': prefix({
        textAlign: 'left',
        verticalAlign: 'top',
      }),
      th: {
        color: `${derived.textStrong}`,
      },
    },
  });
}

export function writeGenericRule(theme: t.ITheme) {
  rule1(theme.generic);
  rule2();
  rule3(theme.generic);
  rule4(theme.generic);
  rule5(theme.generic);
  rule6(theme.derived);
  rule7(theme.generic, theme.derived);
  rule8(theme.generic);
  rule9();
  rule10();
  rule11();
  rule12();
  rule13(theme.generic);
  rule14(theme.derived, theme.mixins);
  rule15(theme.derived);
}
