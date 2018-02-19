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

import { important } from 'csx';
import { style, stylesheet } from 'typestyle';
import * as types from '../types';

const makeSize = <T>(
  theme: types.IBuraTheme,
  target:
    | ''
    | 'Mobile'
    | 'Tablet'
    | 'Touch'
    | 'Desktop'
    | 'Widescreen'
    | 'FullHd' = '',
) =>
  theme.derivedVars.sizes.reduce<T>(
    (acc, curr, i) => {
      const rule = { fontSize: important(`${curr}`) };
      acc[`size${i}${target}`] =
        target === '' ? rule : style(theme.mixins[target.toLowerCase()](rule));
      return acc;
    },
    {} as any,
  );

// interface IAlignment {
//   Left: 'left';
//   Right: 'right';
//   Centered: 'center';
//   Justified: 'justify';
// }

// const alignments: IAlignment = {
//   Centered: 'center',
//   Justified: 'justify',
//   Left: 'left',
//   Right: 'right',
// };

export function createHelperClasses(
  theme: types.IBuraTheme,
): types.BuraHelperClasses {
  return {
    ...stylesheet<types.BuraHelperStylesheet>({
      clearfix: { ...theme.mixins.clearfix() },
      clipped: { overflow: important('hidden') },
      overlay: { ...theme.mixins.overlay() },
      pulledLeft: { float: important('left') },
      pulledRight: { float: important('right') },
      ...makeSize<types.IBuraHelperStylesheetSize>(theme),
    }),
    ...makeSize<Record<keyof types.IBuraHelperStylesheetSizeMobile, string>>(
      theme,
      'Mobile',
    ),
    ...makeSize<Record<keyof types.IBuraHelperStylesheetSizeTablet, string>>(
      theme,
      'Tablet',
    ),
    ...makeSize<Record<keyof types.IBuraHelperStylesheetSizeTouch, string>>(
      theme,
      'Touch',
    ),
    ...makeSize<Record<keyof types.IBuraHelperStylesheetSizeDesktop, string>>(
      theme,
      'Desktop',
    ),
    ...makeSize<
      Record<keyof types.IBuraHelperStylesheetSizeWidescreen, string>
    >(theme, 'Widescreen'),
    ...makeSize<Record<keyof types.IBuraHelperStylesheetSizeFullHD, string>>(
      theme,
      'FullHd',
    ),
  };
}
