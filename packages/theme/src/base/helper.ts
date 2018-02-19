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
import { style, stylesheet } from 'typestyle';
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
  theme.derivedVars.sizes.reduce<T>(
    (acc, curr, i) => {
      const rule = { fontSize: important(`${curr}`) };
      const cls = `size${i}${target}`;
      acc[cls] =
        target === ''
          ? rule
          : style(theme.mixins[target.toLowerCase()](rule), {
              $debugName: cls,
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
            $debugName: cls,
          });
        }
      }
      return acc;
    },
    {} as any,
  );

const makeTextColors = (theme: t.ITheme): t.IHelperTextColor =>
  Object.keys(theme.derivedVars.colors).reduce(
    (acc, curr) => {
      const color: ColorHelper = theme.derivedVars.colors[curr];
      acc[`text${curr.charAt(0).toUpperCase()}${curr.slice(1)}`] = style({
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
  Object.keys(theme.derivedVars.shades).reduce(
    (acc, curr) => {
      const color: ColorHelper = theme.derivedVars.shades[curr];
      acc[`text${curr.charAt(0).toUpperCase()}${curr.slice(1)}`] = style({
        color: important(`${color}`),
      });
    },
    {} as any,
  );

export function createHelperClasses(theme: t.ITheme): t.BuraHelperClasses {
  return {
    ...stylesheet<t.BuraHelperSheet>({
      capitalized: { textTransform: important('capitalize') },
      clearfix: { ...theme.mixins.clearfix() },
      clipped: { overflow: important('hidden') },
      // italic: {textTransform: important('italic')},
      lowercase: { textTransform: important('lowercase') },
      overlay: { ...theme.mixins.overlay() },
      pulledLeft: { float: important('left') },
      pulledRight: { float: important('right') },
      uppercase: { textTransform: important('uppercase') },
      ...makeSize<t.IHelperSheetSize>(theme),
    }),
    ...makeSize<Record<keyof t.IHelperSheetSizeMobile, string>>(
      theme,
      'Mobile',
    ),
    ...makeSize<Record<keyof t.IHelperSheetSizeTablet, string>>(
      theme,
      'Tablet',
    ),
    ...makeSize<Record<keyof t.IHelperSheetSizeTouch, string>>(theme, 'Touch'),
    ...makeSize<Record<keyof t.IHelperSheetSizeDesktop, string>>(
      theme,
      'Desktop',
    ),
    ...makeSize<Record<keyof t.IHelperSheetSizeWidescreen, string>>(
      theme,
      'Widescreen',
    ),
    ...makeSize<Record<keyof t.IHelperSheetSizeFullHD, string>>(
      theme,
      'FullHd',
    ),
    ...makeTextAlignments(theme),
    ...makeTextColors(theme),
    ...makeTextShades(theme),
  };
}
