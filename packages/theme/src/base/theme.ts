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
  deg,
  rotate,
} from 'csx';
import { keyframes } from 'typestyle';
import {
  IBuraAnimation,
  IBuraColor,
  IBuraDerivedCodeColor,
  IBuraDerivedColor,
  IBuraDerivedGeneralColor,
  IBuraDerivedInvertColor,
  IBuraDerivedLinkColor,
  IBuraDerivedTextColor,
  IBuraDerivedTypo,
  IBuraDerivedVariable,
  IBuraFlag,
  IBuraMisc,
  IBuraMixin,
  IBuraResponsive,
  IBuraTheme,
  IBuraTypo,
  IBuraVariable,
} from '../types';
import derivedVars from './derived';
import BaseMixin from './mixins';
import vars from './vars';

class BuraBaseTheme implements IBuraTheme {
  protected _vars: IBuraVariable;
  protected _derivedVars: IBuraDerivedVariable;
  protected _animations: IBuraAnimation;
  protected _mixins: IBuraMixin;

  constructor() {
    this._vars = vars;
    this._derivedVars = derivedVars(this);
    this._animations = {
      spinAround: keyframes({
        from: {
          transform: rotate(deg(0)),
        },
        to: {
          transform: rotate(deg(359)),
        },
      }),
    };
    this._mixins = new BaseMixin(this);
  }

  get vars(): IBuraVariable {
    return this._vars;
  }

  get derivedVars(): IBuraDerivedVariable {
    return this._derivedVars;
  }

  get animations(): IBuraAnimation {
    return this._animations;
  }

  get mixins(): IBuraMixin {
    return this._mixins;
  }

  public setVars(variables: Partial<IBuraVariable>): IBuraTheme {
    this._vars = {
      ...this._vars,
      ...variables,
    }
    return this;
  }

  public setDerivedVars(variables: Partial<IBuraDerivedVariable>): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...variables,
    }
    return this;
  }

  public setAnimation(animations: Partial<IBuraAnimation>): IBuraTheme {
    this._animations = {
      ...this._animations,
      ...animations,
    }
    return this;
  }

  public setMixins(mixin: IBuraMixin): IBuraTheme {
    this._mixins = mixin;
    return this;
  }

  public setColor(colors: Partial<IBuraColor>): IBuraTheme {
    this._vars = {
      ...this._vars,
      ...colors,
    }
    return this;
  }

  public setTypo(typo: Partial<IBuraTypo>): IBuraTheme {
    this._vars = {
      ...this._vars,
      ...typo,
    }
    return this;
  }

  public setResponsive(responsive: Partial<IBuraResponsive>): IBuraTheme {
    this._vars = {
      ...this._vars,
      ...responsive,
    }
    return this;
  }

  public setMisc(misc: Partial<IBuraMisc>): IBuraTheme {
    this._vars = {
      ...this._vars,
      ...misc,
    }
    return this;
  }

  public setFlag(flags: Partial<IBuraFlag>): IBuraTheme {
    this._vars = {
      ...this._vars,
      ...flags,
    }
    return this;
  }

  public setDerivedColor(colors: Partial<IBuraDerivedColor>): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...colors,
    }
    return this;
  }

  public setDerivedInvertColor(
    colors: Partial<IBuraDerivedInvertColor>,
  ): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...colors,
    }
    return this;
  }

  public setDerivedGeneralColor(
    colors: Partial<IBuraDerivedGeneralColor>,
  ): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...colors,
    }
    return this;
  }

  public setDerivedTextColor(
    colors: Partial<IBuraDerivedTextColor>,
  ): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...colors,
    }
    return this;
  }

  public setDerivedCodeColor(
    colors: Partial<IBuraDerivedCodeColor>,
  ): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...colors,
    }
    return this;
  }

  public setDerivedLinkColor(
    colors: Partial<IBuraDerivedLinkColor>,
  ): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...colors,
    }
    return this;
  }

  public setDerivedTypo(typo: Partial<IBuraDerivedTypo>): IBuraTheme {
    this._derivedVars = {
      ...this._derivedVars,
      ...typo,
    }
    return this;
  }
}

export default BuraBaseTheme;
