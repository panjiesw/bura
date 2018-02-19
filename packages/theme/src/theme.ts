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

import { deg, rotate } from 'csx';
import { keyframes } from 'typestyle';
import { createGenericVars, writeGenericRule } from './base/generic';
import { createHelperClasses } from './base/helper';
import { writeMiniReset } from './base/minireset';
import * as types from './types';
import { createDerivedVars } from './utilities/derived';
import { BuraMixin } from './utilities/mixins';
import { vars } from './utilities/vars';

export class BuraTheme implements types.IBuraTheme {
  public vars: types.IBuraVariable;
  public derivedVars: types.IBuraDerivedVariable;
  public animations: types.IBuraAnimation;
  public mixins: types.IBuraMixin;
  public genericVars: types.IBuraGenericVariable;
  public helpers: types.BuraHelperClasses;

  constructor() {
    this.vars = vars;
    this.derivedVars = createDerivedVars(this);
    this.animations = {
      spinAround: keyframes({
        from: {
          transform: rotate(deg(0)),
        },
        to: {
          transform: rotate(deg(359)),
        },
      }),
    };
    this.mixins = new BuraMixin(this);
    this.genericVars = createGenericVars(this);
    this.helpers = createHelperClasses(this);
  }

  public withMiniReset(): types.IBuraTheme {
    writeMiniReset();
    return this;
  }

  public withGeneric(): types.IBuraTheme {
    writeGenericRule(this);
    return this;
  }

  public setVars(variables: Partial<types.IBuraVariable>): types.IBuraTheme {
    this.vars = {
      ...this.vars,
      ...variables,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setDerivedVars(
    variables: Partial<types.IBuraDerivedVariable>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...variables,
    };
    return this;
  }

  public setAnimation(
    animations: Partial<types.IBuraAnimation>,
  ): types.IBuraTheme {
    this.animations = {
      ...this.animations,
      ...animations,
    };
    return this;
  }

  public setMixins(mixin: types.IBuraMixin): types.IBuraTheme {
    this.mixins = mixin;
    return this;
  }

  public setColor(colors: Partial<types.IBuraColor>): types.IBuraTheme {
    this.vars = {
      ...this.vars,
      ...colors,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setTypo(typo: Partial<types.IBuraTypo>): types.IBuraTheme {
    this.vars = {
      ...this.vars,
      ...typo,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setResponsive(
    responsive: Partial<types.IBuraResponsive>,
  ): types.IBuraTheme {
    this.vars = {
      ...this.vars,
      ...responsive,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setMisc(misc: Partial<types.IBuraMisc>): types.IBuraTheme {
    this.vars = {
      ...this.vars,
      ...misc,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setFlag(flags: Partial<types.IBuraFlag>): types.IBuraTheme {
    this.vars = {
      ...this.vars,
      ...flags,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setDerivedColor(
    colors: Partial<types.IBuraDerivedColor>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedInvertColor(
    colors: Partial<types.IBuraDerivedInvertColor>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedGeneralColor(
    colors: Partial<types.IBuraDerivedGeneralColor>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedTextColor(
    colors: Partial<types.IBuraDerivedTextColor>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedCodeColor(
    colors: Partial<types.IBuraDerivedCodeColor>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedLinkColor(
    colors: Partial<types.IBuraDerivedLinkColor>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedTypo(
    typo: Partial<types.IBuraDerivedTypo>,
  ): types.IBuraTheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...typo,
    };
    return this;
  }
}
