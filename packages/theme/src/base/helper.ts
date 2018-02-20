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

import { ColorHelper, important } from 'csx';
import { style } from 'typestyle';
import * as t from '../types';
import { hyphen } from '../utils';

interface IAlignment {
  Left: 'left';
  Right: 'right';
  Centered: 'center';
  Justified: 'justify';
}

type Responsive =
  | 'Mobile'
  | 'Tablet'
  | 'Touch'
  | 'Desktop'
  | 'Widescreen'
  | 'Fullhd';

const makeSize = <T>(theme: t.ITheme, target: '' | Responsive = '') =>
  theme.derived.sizes.reduce<T>(
    (acc, curr, i) => {
      const rule = { fontSize: important(`${curr}`) };
      const cls = `isSize${i}${target}`;
      acc[cls] = style(theme.mixins[target.toLowerCase()](rule), {
        $debugName: theme.options.debug ? hyphen(cls) : undefined,
      });
      return acc;
    },
    {} as any,
  );

const alignments: IAlignment = {
  Centered: 'center',
  Justified: 'justify',
  Left: 'left',
  Right: 'right',
};

const makeTextAlignments = (theme: t.ITheme) =>
  [
    '',
    'Mobile',
    'Tablet',
    'TabletOnly',
    'Touch',
    'Desktop',
    'DesktopOnly',
    'Widescreen',
    'WidescreenOnly',
    'Fullhd',
  ].reduce<t.IHelperTextAlignmentClasses>(
    (acc, curr) => {
      for (const index in alignments) {
        if (alignments.hasOwnProperty(index)) {
          const textAlign = important(alignments[index]);
          const cls = `hasText${alignments[index]}${curr}`;
          const method = `${curr.charAt(0).toLowerCase()}${curr.slice(1)}`;
          acc[cls] = style(theme.mixins[method]({ textAlign }), {
            $debugName: theme.options.debug ? hyphen(cls) : undefined,
          });
        }
      }
      return acc;
    },
    {} as any,
  );

const makeTextColors = (theme: t.ITheme): t.IHelperTextColor =>
  Object.keys(theme.derived.colors).reduce(
    (acc, curr) => {
      const color: ColorHelper = theme.derived.colors[curr];
      const cls = `hasText${curr.charAt(0).toUpperCase()}${curr.slice(1)}`;
      acc[cls] = style({
        $debugName: theme.options.debug ? hyphen(cls) : undefined,
        $nest: {
          'a&': {
            $nest: {
              '&:hover, &:focus': {
                color: important(`${color.darken('10%')}`),
              },
            },
          },
        },
        color: important(`${color}`),
      });
      return acc;
    },
    {} as any,
  );

const makeTextShades = (theme: t.ITheme): t.IHelperTextShade =>
  Object.keys(theme.derived.shades).reduce(
    (acc, curr) => {
      const color: ColorHelper = theme.derived.shades[curr];
      const cls = `hasText${curr.charAt(0).toUpperCase()}${curr.slice(1)}`;
      acc[cls] = style({
        $debugName: theme.options.debug ? hyphen(cls) : undefined,
        color: important(`${color}`),
      });
    },
    {} as any,
  );

export function createHelperClasses(theme: t.ITheme): t.BuraHelperClasses {
  const debug = theme.options.debug;
  return {
    isCapitalized: style({
      $debugName: debug ? 'is-capitalized' : undefined,
      textTransform: important('capitalize'),
    }),
    isClearfix: style({
      $debugName: debug ? 'is-clearfix' : undefined,
      ...theme.mixins.clearfix(),
    }),
    isClipped: style({
      $debugName: debug ? 'is-clipped' : undefined,
      overflow: important('hidden'),
    }),
    isItalic: style({
      $debugName: debug ? 'is-italic' : undefined,
      fontStyle: important('italic'),
    }),
    isLowercase: style({
      $debugName: debug ? 'is-lowercase' : undefined,
      textTransform: important('lowercase'),
    }),
    isOverlay: style({
      $debugName: debug ? 'is-overlay' : undefined,
      ...theme.mixins.overlay(),
    }),
    isPulledLeft: style({
      $debugName: debug ? 'is-pulledLeft' : undefined,
      float: important('left'),
    }),
    isPulledRight: style({
      $debugName: debug ? 'is-pulledRight' : undefined,
      float: important('right'),
    }),
    isUppercase: style({
      $debugName: debug ? 'is-uppercase' : undefined,
      textTransform: important('uppercase'),
    }),
    ...makeSize<t.IHelperSize>(theme),
    ...makeSize<t.IHelperSizeMobile>(theme, 'Mobile'),
    ...makeSize<t.IHelperSizeTablet>(theme, 'Tablet'),
    ...makeSize<t.IHelperSizeTouch>(theme, 'Touch'),
    ...makeSize<t.IHelperSizeDesktop>(theme, 'Desktop'),
    ...makeSize<t.IHelperSizeWidescreen>(theme, 'Widescreen'),
    ...makeSize<t.IHelperSizeFullHD>(theme, 'Fullhd'),
    ...makeTextAlignments(theme),
    ...makeTextColors(theme),
    ...makeTextShades(theme),
    hasTextWeightBold: style({
      $debugName: debug ? 'has-text-weight-bold' : undefined,
      fontWeight: important<any>(theme.init.weightBold),
    }),
    hasTextWeightLight: style({
      $debugName: debug ? 'has-text-weight-light' : undefined,
      fontWeight: important<any>(theme.init.weightLight),
    }),
    hasTextWeightNormal: style({
      $debugName: debug ? 'has-text-weight-normal' : undefined,
      fontWeight: important<any>(theme.init.weightNormal),
    }),
    hasTextWeightSemibold: style({
      $debugName: debug ? 'has-text-weight-semibold' : undefined,
      fontWeight: important<any>(theme.init.weightSemibold),
    }),
    isMarginless: style({
      $debugName: debug ? 'is-marginless' : undefined,
      margin: important(0),
    }),
    isPaddingless: style({
      $debugName: debug ? 'is-paddingless' : undefined,
      padding: important(0),
    }),
    isRadiusless: style({
      $debugName: debug ? 'is-radiusless' : undefined,
      borderRadius: important(0),
    }),
    isShadowless: style({
      $debugName: debug ? 'is-shadowless' : undefined,
      boxShadow: important('none'),
    }),
    isUnselectable: style({
      $debugName: debug ? 'is-unselectable' : undefined,
      ...theme.mixins.unselectable(),
    }),
  };
}
