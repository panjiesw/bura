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
import { calc, em, px } from 'csx';
import { misc } from './variables';
import { derivedTypo } from './derived';

// $control-radius: $radius !default
// $control-radius-small: $radius-small !default

// $control-padding-vertical: calc(0.375em - 1px) !default
// $control-padding-horizontal: calc(0.625em - 1px) !default

const controlRadius = misc.radius;
const controlRadiusSmall = misc.radiusSmall;

const controlPaddingVertical = calc(`${em(0.375)} - ${px(1)}`);
const controlPaddingHorizontal = calc(`${em(0.625)} - ${px(1)}`);

export const variables = {
  controlRadius,
  controlRadiusSmall,
  controlPaddingVertical,
  controlPaddingHorizontal,
};

export const control = (
  borderRadius = controlRadius,
  fontSize = derivedTypo.sizeNormal,
  paddingVertical = controlPaddingVertical,
  paddingHorizontal = controlPaddingHorizontal,
): NestedCSSProperties => ({
  '-moz-appearance': 'none',
  '-webkit-appearance': 'none',
  alignItems: 'center',
  border: `${px(1)} solid transparent`,
  borderRadius,
  boxShadow: 'none',
  display: 'inline-flex',
  fontSize,
  height: em(2.25),
  justifyContent: 'flex-start',
  lineHeight: 1.5,
  paddingBottom: paddingVertical,
  paddingLeft: paddingHorizontal,
  paddingTop: paddingVertical,
  paddingRight: paddingHorizontal,
  position: 'relative',
  verticalAlign: 'top',
  $nest: {
    '&:focus, &.is-focused, &:active, &.is-active': { outline: 'none' },
    '&[disabled]': { cursor: 'not-allowed' },
  },
});

export const controlSmall = (
  borderRadius = controlRadius,
  fontSize = derivedTypo.sizeSmall,
): NestedCSSProperties => ({
  borderRadius,
  fontSize,
});

export const controlMedium = (
  fontSize = derivedTypo.sizeMedium,
): NestedCSSProperties => ({
  fontSize,
});

export const controlLarge = (
  fontSize = derivedTypo.sizeLarge,
): NestedCSSProperties => ({
  fontSize,
});
