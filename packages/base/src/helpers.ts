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

import { BuraBaseTheme, IBuraTheme } from '@bura/theme';
import { important } from 'csx';
import { style, stylesheet } from 'typestyle';
import {
  IBuraHelperStylesheetSize,
  IBuraHelperStylesheetSizeDesktop,
  IBuraHelperStylesheetSizeFullHD,
  IBuraHelperStylesheetSizeMobile,
  IBuraHelperStylesheetSizeTablet,
  IBuraHelperStylesheetSizeTouch,
  IBuraHelperStylesheetSizeWidescreen,
  TBuraHelperClasses,
  TBuraHelperStylesheet,
} from './types';

declare module '@bura/theme/lib/base/theme' {
  // tslint:disable-next-line:interface-name
  interface BuraBaseTheme {
    helpers: TBuraHelperClasses;
    withHelpers(): BuraBaseTheme;
  }
}

BuraBaseTheme.prototype.withHelpers = function(): BuraBaseTheme {
  this.helpers = {
    ...stylesheet<TBuraHelperStylesheet>({
      clearFix: { ...this.mixins.clearfix() },
      clipped: { overflow: important('hidden') },
      overlay: { ...this.mixins.overlay() },
      pulledLeft: { float: important('left') },
      pulledRight: { float: important('right') },
      ...makeSize<IBuraHelperStylesheetSize>(this),
    }),
    ...makeSize<Record<keyof IBuraHelperStylesheetSizeMobile, string>>(
      this,
      'mobile',
    ),
    ...makeSize<Record<keyof IBuraHelperStylesheetSizeTablet, string>>(
      this,
      'tablet',
    ),
    ...makeSize<Record<keyof IBuraHelperStylesheetSizeTouch, string>>(
      this,
      'touch',
    ),
    ...makeSize<Record<keyof IBuraHelperStylesheetSizeDesktop, string>>(
      this,
      'desktop',
    ),
    ...makeSize<Record<keyof IBuraHelperStylesheetSizeWidescreen, string>>(
      this,
      'widescreen',
    ),
    ...makeSize<Record<keyof IBuraHelperStylesheetSizeFullHD, string>>(
      this,
      'fullhd',
    ),
  };
  return this;
};

export const makeSize = <T>(
  theme: IBuraTheme,
  target:
    | ''
    | 'mobile'
    | 'tablet'
    | 'touch'
    | 'desktop'
    | 'widescreen'
    | 'fullhd' = '',
) =>
  theme.derivedVars.sizes.reduce<T>(
    (acc, curr, i) => {
      const rule = { fontSize: important(`${curr}`) };
      acc[`size${i}${target}`] =
        target === '' ? rule : style(theme.mixins[target](rule));
      return acc;
    },
    {} as any,
  );

export const alignments: Array<
  | 'start'
  | 'end'
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'justify-all'
  | 'match-parent'
> = [
  'start',
  'end',
  'left',
  'right',
  'center',
  'justify',
  'justify-all',
  'match-parent',
];
