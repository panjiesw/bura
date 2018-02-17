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
import {
  black,
  calc,
  deg,
  em,
  percent,
  px,
  translateX,
  translateY,
  rem,
  rotate,
  ColorHelper,
} from 'csx';
import { media } from 'typestyle';
import { ICustomCSSProperties } from './types';
import { colors, misc, responsive } from './variables';
import { generalColors } from './derived';
import { spinAround } from './animations';

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

export const block = (): NestedCSSProperties => ({
  $nest: {
    '&:not(:last-child)': { marginBottom: rem(1.5) },
  },
});

export const clearfix = (): NestedCSSProperties => ({
  $nest: {
    '&:after': {
      clear: 'both',
      content: '" "',
      display: 'table',
    },
  },
});

export const center = (
  width: number | string,
  height: number | string = 0,
): NestedCSSProperties => ({
  position: 'absolute',
  left: calc(`50% - (${width} / 2)`),
  top:
    height === 0 || (typeof height === 'string' && parseInt(height, 10) === 0)
      ? calc(`50% - (${width} / 2)`)
      : calc(`50% - (${height} / 2)`),
});

export const del = (
  black = colors.black,
  white = colors.white,
  borderRadius = misc.radiusRounded,
): NestedCSSProperties => ({
  ...unselectable(),
  '-moz-appearance': 'none',
  '-webkit-appearance': 'none',
  backgroundColor: `${black.fade(0.2)}`,
  border: 'none',
  borderRadius,
  cursor: 'pointer',
  display: 'inline-block',
  flexGrow: 0,
  flexShrink: 0,
  fontSize: 0,
  height: px(20),
  maxHeight: px(20),
  maxWidth: px(20),
  minHeight: px(20),
  minWidth: px(20),
  outline: 'none',
  position: 'relative',
  verticalAlign: 'top',
  width: px(20),
  $nest: {
    '&:before, &:after': {
      backgroundColor: `${white}`,
      content: '""',
      display: 'block',
      left: percent(50),
      position: 'absolute',
      top: percent(50),
      transform: `${translateX(percent(-50))} ${translateY(
        percent(-50),
      )} ${rotate(deg(45))}`,
      transformOrigin: 'center center',
    },
    '&:before': {
      height: px(2),
      width: percent(50),
    },
    '&:after': {
      height: percent(50),
      width: px(2),
    },
    '&:hover, &:focus': {
      backgroundColor: `${black.fade(0.3)}`,
    },
    '&:active': {
      backgroundColor: `${black.fade(0.4)}`,
    },
    '&.is-small': {
      height: px(16),
      maxHeight: px(16),
      maxWidth: px(16),
      minHeight: px(16),
      minWidth: px(16),
      width: px(16),
    },
    '&.is-medium': {
      height: px(24),
      maxHeight: px(24),
      maxWidth: px(24),
      minHeight: px(24),
      minWidth: px(24),
      width: px(24),
    },
    '&.is-large': {
      height: px(32),
      maxHeight: px(32),
      maxWidth: px(32),
      minHeight: px(32),
      minWidth: px(32),
      width: px(32),
    },
  },
});

export const fa = (
  size: string | number,
  dimensions: string | number,
): NestedCSSProperties => ({
  display: 'inline-block',
  fontSize: size,
  height: dimensions,
  lineHeight: dimensions,
  textAlign: 'center',
  verticalAlign: 'top',
  width: dimensions,
});

export const hamburger = (
  dimensions: string | number,
  speed = misc.speed,
  easing = misc.easing,
): NestedCSSProperties => ({
  cursor: 'pointer',
  display: 'block',
  height: dimensions,
  position: 'relative',
  width: dimensions,
  $nest: {
    span: {
      backgroundColor: 'currentColor',
      display: 'block',
      height: px(1),
      left: calc(`${percent(50)} - ${px(8)}`),
      position: 'absolute',
      transformOrigin: 'center',
      transitionDuration: speed,
      transitionProperty: 'background-color, opacity, transform',
      transitionTimingFunction: easing,
      width: px(16),

      $nest: {
        '&:nth-child(1)': {
          top: calc('50% - 6px'),
        },
        '&:nth-child(2)': {
          top: calc('50% - 1px'),
        },
        '&:nth-child(3)': {
          top: calc('50% - 4px'),
        },
      },
    },
    '$:hover': {
      backgroundColor: `${black.fade(0.05)}`,
    },
    '&.is-active': {
      $nest: {
        span: {
          $nest: {
            '&:nth-child(1)': {
              transform: `${translateY(px(5))} ${rotate(deg(45))}`,
            },
            '&:nth-child(2)': {
              opacity: 0,
            },
            '&:nth-child(3)': {
              transform: `${translateY(px(-5))} ${rotate(deg(-45))}`,
            },
          },
        },
      },
    },
  },
});

export const loader = (
  keyFrameName = spinAround,
  borderColor = generalColors.border,
  borderRadius = misc.radiusRounded,
): NestedCSSProperties => ({
  animation: `${keyFrameName} 500ms infinite linear`,
  border: `${px(2)} solid ${borderColor}`,
  borderRadius,
  borderRightColor: 'transparent',
  borderTopColor: 'transparent',
  content: '""',
  display: 'block',
  height: em(1),
  position: 'relative',
  width: em(1),
});

export const overflowTouch = (): NestedCSSProperties => ({
  '-webkit-overflow-scrolling': 'touch',
});

export const overlay = (offset: number | string) => ({
  bottom: `${offset}`,
  left: `${offset}`,
  position: 'absolute',
  right: `${offset}`,
  top: `${offset}`,
});

export const placeholder = (content: any): ICustomCSSProperties => ({
  ':-moz-placeholder': content,
  ':-webkit-input-placeholder': content,
  '-moz-placeholder': content,
  '-ms-input-placeholder': content,
});

export const unselectable = (): NestedCSSProperties => ({
  '-webkit-touch-callout': 'none',
  '-webkit-user-select': 'none',
  '-moz-user-select': 'none',
  '-ms-user-select': 'none',
  userSelect: 'none',
});

// Responsiveness

export const from = (
  device: string | number,
  content: NestedCSSProperties = {},
): NestedCSSProperties => media({ type: 'screen', minWidth: device }, content);

export const until = (
  device: string | number,
  content: NestedCSSProperties = {},
): NestedCSSProperties =>
  media({ type: 'screen', maxWidth: px(parseInt('' + device) - 1) }, content);

export const mobile = (
  maxWidth = responsive.tablet,
  content: NestedCSSProperties = {},
): NestedCSSProperties =>
  media({ type: 'screen', maxWidth: px(parseInt('' + maxWidth) - 1) }, content);

export const tablet = (
  minWidth = responsive.tablet,
  content: NestedCSSProperties = {},
): NestedCSSProperties => media({ type: 'all', minWidth }, content);

export const tabletOnly = (
  minWidth = responsive.tablet,
  desktopSize = responsive.desktop,
  content: NestedCSSProperties = {},
): NestedCSSProperties =>
  media(
    { type: 'all', maxWidth: px(parseInt('' + desktopSize) - 1), minWidth },
    content,
  );

export const touch = (
  desktopSize = responsive.desktop,
  content: NestedCSSProperties = {},
): NestedCSSProperties =>
  media(
    { type: 'screen', maxWidth: px(parseInt('' + desktopSize) - 1) },
    content,
  );

export const desktop = (
  minWidth = responsive.desktop,
  content: NestedCSSProperties = {},
): NestedCSSProperties => media({ type: 'all', minWidth }, content);

export const desktopOnly = (
  minWidth = responsive.desktop,
  widescreenSize = responsive.widescreen,
  content: NestedCSSProperties = {},
): NestedCSSProperties =>
  media(
    { type: 'all', maxWidth: px(parseInt('' + widescreenSize) - 1), minWidth },
    content,
  );

export const widescreen = (
  minWidth = responsive.widescreen,
  content: NestedCSSProperties = {},
): NestedCSSProperties => media({ type: 'all', minWidth }, content);

export const widescreenOnly = (
  minWidth = responsive.widescreen,
  fullhdSize = responsive.fullhd,
  content: NestedCSSProperties = {},
): NestedCSSProperties =>
  media(
    { type: 'all', maxWidth: px(parseInt('' + fullhdSize) - 1), minWidth },
    content,
  );

export const fullhd = (
  minWidth = responsive.fullhd,
  content: NestedCSSProperties = {},
): NestedCSSProperties => media({ type: 'all', minWidth }, content);
