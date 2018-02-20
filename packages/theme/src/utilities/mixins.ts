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

import {
  calc,
  ColorHelper,
  deg,
  em,
  percent,
  px,
  rem,
  rotate,
  translateX,
  translateY,
} from 'csx/lib';
import { media, style } from 'typestyle';
import { NestedCSSProperties } from 'typestyle/lib/types';
import * as t from '../types';

export class Mixin implements t.IMixin {
  public classes: t.IMixinClass;

  constructor(private theme: t.ITheme) {
    this.classes = {
      deleteLarge: style({
        $debugName: theme.options.debug ? 'deleteLarge' : undefined,
        height: px(32),
        maxHeight: px(32),
        maxWidth: px(32),
        minHeight: px(32),
        minWidth: px(32),
        width: px(32),
      }),
      deleteMedium: style({
        $debugName: theme.options.debug ? 'deleteMedium' : undefined,
        height: px(24),
        maxHeight: px(24),
        maxWidth: px(24),
        minHeight: px(24),
        minWidth: px(24),
        width: px(24),
      }),
      deleteSmall: style({
        $debugName: theme.options.debug ? 'deleteSmall' : undefined,
        height: px(16),
        maxHeight: px(16),
        maxWidth: px(16),
        minHeight: px(16),
        minWidth: px(16),
        width: px(16),
      }),
      hamburgerActive: style({
        $debugName: theme.options.debug ? 'hamburgerActive' : undefined,
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
      }),
    };
  }

  public arrow = (color: ColorHelper): NestedCSSProperties => ({
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

  public block = (): NestedCSSProperties => ({
    $nest: {
      '&:not(:last-child)': { marginBottom: rem(1.5) },
    },
  });

  public clearfix = (): NestedCSSProperties => ({
    $nest: {
      '&:after': {
        clear: 'both',
        content: '" "',
        display: 'table',
      },
    },
  });

  public center = (
    width: number | string,
    height: number | string = 0,
  ): NestedCSSProperties => ({
    left: calc(`50% - (${width} / 2)`),
    position: 'absolute',
    top:
      height === 0 || (typeof height === 'string' && parseInt(height, 10) === 0)
        ? calc(`50% - (${width} / 2)`)
        : calc(`50% - (${height} / 2)`),
  });

  public delete = (): NestedCSSProperties => ({
    ...this.unselectable(),
    '-moz-appearance': 'none',
    '-webkit-appearance': 'none',
    backgroundColor: `${this.theme.init.black.fade(0.2)}`,
    border: 'none',
    borderRadius: this.theme.init.radiusRounded,
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
    // tslint:disable-next-line:object-literal-sort-keys
    $nest: {
      '&:before, &:after': {
        backgroundColor: `${this.theme.init.white}`,
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
      // tslint:disable-next-line:object-literal-sort-keys
      '&:before': {
        height: px(2),
        width: percent(50),
      },
      '&:after': {
        height: percent(50),
        width: px(2),
      },
      '&:hover, &:focus': {
        backgroundColor: `${this.theme.init.black.fade(0.3)}`,
      },
      '&:active': {
        backgroundColor: `${this.theme.init.black.fade(0.4)}`,
      },
    },
  });

  public fa = (
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

  public hamburger = (dimensions: string | number): NestedCSSProperties => ({
    cursor: 'pointer',
    display: 'block',
    height: dimensions,
    position: 'relative',
    width: dimensions,
    // tslint:disable-next-line:object-literal-sort-keys
    $nest: {
      span: {
        backgroundColor: 'currentColor',
        display: 'block',
        height: px(1),
        left: calc(`${percent(50)} - ${px(8)}`),
        position: 'absolute',
        transformOrigin: 'center',
        transitionDuration: this.theme.init.speed,
        transitionProperty: 'background-color, opacity, transform',
        transitionTimingFunction: this.theme.init.easing,
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
      // tslint:disable-next-line:object-literal-sort-keys
      '&:hover': {
        backgroundColor: `${this.theme.init.black.fade(0.05)}`,
      },
    },
  });

  public loader = (): NestedCSSProperties => ({
    animation: `${this.theme.animations.spinAround} 500ms infinite linear`,
    border: `${px(2)} solid ${this.theme.derived.border}`,
    borderRadius: this.theme.init.radiusRounded,
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    content: '""',
    display: 'block',
    height: em(1),
    position: 'relative',
    width: em(1),
  });

  public overflowTouch = (): NestedCSSProperties => ({
    '-webkit-overflow-scrolling': 'touch',
  });

  public overlay = (offset: number | string = 0): NestedCSSProperties => ({
    bottom: `${offset}`,
    left: `${offset}`,
    position: 'absolute',
    right: `${offset}`,
    top: `${offset}`,
  });

  public placeholder = (content: NestedCSSProperties): NestedCSSProperties => ({
    $nest: {
      '&:-moz-placeholder': { ...content, $unique: true },
      '&:-ms-input-placeholder': { ...content, $unique: true },
      '&::-moz-placeholder': { ...content, $unique: true },
      '&::-webkit-input-placeholder': { ...content, $unique: true },
    },
  });

  public unselectable = (): NestedCSSProperties => ({
    '-moz-user-select': 'none',
    '-ms-user-select': 'none',
    '-webkit-touch-callout': 'none',
    '-webkit-user-select': 'none',
    userSelect: 'none',
  });

  public from = (
    device: string | number,
    css: NestedCSSProperties,
  ): NestedCSSProperties => media({ type: 'screen', minWidth: device }, css);

  public until = (
    device: string | number,
    css: NestedCSSProperties,
  ): NestedCSSProperties =>
    media({ type: 'screen', maxWidth: px(parseInt('' + device, 10) - 1) }, css);

  public mobile = (css: NestedCSSProperties): NestedCSSProperties =>
    media(
      {
        maxWidth: px(parseInt('' + this.theme.init.tablet, 10) - 1),
        type: 'screen',
      },
      css,
    );

  public tablet = (css: NestedCSSProperties): NestedCSSProperties =>
    media({ type: 'all', minWidth: this.theme.init.tablet }, css);

  public tabletOnly = (css: NestedCSSProperties): NestedCSSProperties =>
    media(
      {
        maxWidth: px(parseInt('' + this.theme.init.desktop, 10) - 1),
        minWidth: this.theme.init.tablet,
        type: 'all',
      },
      css,
    );

  public touch = (css: NestedCSSProperties): NestedCSSProperties =>
    media(
      {
        maxWidth: px(parseInt('' + this.theme.init.desktop, 10) - 1),
        type: 'screen',
      },
      css,
    );

  public desktop = (css: NestedCSSProperties): NestedCSSProperties =>
    media({ type: 'all', minWidth: this.theme.init.desktop }, css);

  public desktopOnly = (css: NestedCSSProperties): NestedCSSProperties =>
    media(
      {
        maxWidth: px(parseInt('' + this.theme.init.widescreen, 10) - 1),
        minWidth: this.theme.init.desktop,
        type: 'all',
      },
      css,
    );

  public widescreen = (css: NestedCSSProperties): NestedCSSProperties =>
    media({ type: 'all', minWidth: this.theme.init.widescreen }, css);

  public widescreenOnly = (css: NestedCSSProperties): NestedCSSProperties =>
    media(
      {
        maxWidth: px(parseInt('' + this.theme.init.fullhd, 10) - 1),
        minWidth: this.theme.init.widescreen,
        type: 'all',
      },
      css,
    );

  public fullhd = (css: NestedCSSProperties): NestedCSSProperties =>
    media({ type: 'all', minWidth: this.theme.init.fullhd }, css);
}
