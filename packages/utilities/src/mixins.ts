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

import { NestedCSSProperties } from 'typestyle/lib/types';
import { deg, em, rem, rotate, ColorHelper } from 'csx';

export const arrow = (color: ColorHelper): NestedCSSProperties => ({
  border: `1px solid ${color}`,
  borderRight: 0,
  borderTop: 0,
  content: ' ',
  display: 'block',
  height: em(0.5),
  pointerEvents: 'none',
  position: 'absolute',
  transform: rotate(deg(-45)),
  transformOrigin: 'center',
  width: em(0.5),
});

export const block: NestedCSSProperties = {
  $nest: {
    '&:not(:last-child)': { marginBottom: rem(1.5) },
  },
};

export const clearfix: NestedCSSProperties = {
  $nest: {
    '&:after': {
      clear: 'both',
      content: '" "',
      display: 'table',
    }
  }
}


