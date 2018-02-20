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
  | 'FullHd';

const makeSize = <T>(theme: t.ITheme, target: '' | Responsive = '') =>
  theme.derived.sizes.reduce<T>(
    (acc, curr, i) => {
      const rule = { fontSize: important(`${curr}`) };
      const cls = `size${i}${target}`;
      acc[cls] =
        target === ''
          ? rule
          : style(theme.mixins[target.toLowerCase()](rule), {
              $debugName: theme.options.debug ? cls : undefined,
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
    'FullHd',
  ].reduce<t.IHelperTextAlignmentClasses>(
    (acc, curr) => {
      for (const index in alignments) {
        if (alignments.hasOwnProperty(index)) {
          const textAlign = important(alignments[index]);
          const cls = `text${alignments[index]}${curr}`;
          const method = `${curr.charAt(0).toLowerCase()}${curr.slice(1)}`;
          acc[cls] = style(theme.mixins[method]({ textAlign }), {
            $debugName: theme.options.debug ? cls : undefined,
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
      const cls = `text${curr.charAt(0).toUpperCase()}${curr.slice(1)}`;
      acc[cls] = style({
        $debugName: theme.options.debug ? cls : undefined,
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
      const cls = `text${curr.charAt(0).toUpperCase()}${curr.slice(1)}`;
      acc[cls] = style({
        $debugName: theme.options.debug ? cls : undefined,
        color: important(`${color}`),
      });
    },
    {} as any,
  );

export function createHelperClasses(theme: t.ITheme): t.BuraHelperClasses {
  return {
    capitalized: style({
      $debugName: theme.options.debug ? 'capitalized' : undefined,
      textTransform: important('capitalize'),
    }),
    clearfix: style({
      $debugName: theme.options.debug ? 'clearfix' : undefined,
      ...theme.mixins.clearfix(),
    }),
    clipped: style({
      $debugName: theme.options.debug ? 'clipped' : undefined,
      overflow: important('hidden'),
    }),
    // italic: style({
    //   $debugName: theme.options.debug ? '// italic' : undefined,
    //   textTransform: important('italic'),
    // }),
    lowercase: style({
      $debugName: theme.options.debug ? 'lowercase' : undefined,
      textTransform: important('lowercase'),
    }),
    overlay: style({
      $debugName: theme.options.debug ? 'overlay' : undefined,
      ...theme.mixins.overlay(),
    }),
    pulledLeft: style({
      $debugName: theme.options.debug ? 'pulledLeft' : undefined,
      float: important('left'),
    }),
    pulledRight: style({
      $debugName: theme.options.debug ? 'pulledRight' : undefined,
      float: important('right'),
    }),
    uppercase: style({
      $debugName: theme.options.debug ? 'uppercase' : undefined,
      textTransform: important('uppercase'),
    }),
    ...makeSize<t.IHelperSize>(theme),
    ...makeSize<t.IHelperSizeMobile>(theme, 'Mobile'),
    ...makeSize<t.IHelperSizeTablet>(theme, 'Tablet'),
    ...makeSize<t.IHelperSizeTouch>(theme, 'Touch'),
    ...makeSize<t.IHelperSizeDesktop>(theme, 'Desktop'),
    ...makeSize<t.IHelperSizeWidescreen>(theme, 'Widescreen'),
    ...makeSize<t.IHelperSizeFullHD>(theme, 'FullHd'),
    ...makeTextAlignments(theme),
    ...makeTextColors(theme),
    ...makeTextShades(theme),
  };
}
