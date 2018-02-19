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
import { Mixin } from './utilities/mixins';
import { vars } from './utilities/vars';

export class Theme implements types.ITheme {
  public vars: types.IVariable;
  public derivedVars: types.IDerivedVariable;
  public animations: types.IAnimation;
  public mixins: types.IMixin;
  public genericVars: types.IGenericVariable;
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
    this.mixins = new Mixin(this);
    this.genericVars = createGenericVars(this);
    this.helpers = createHelperClasses(this);
  }

  public withMiniReset(): types.ITheme {
    writeMiniReset();
    return this;
  }

  public withGeneric(): types.ITheme {
    writeGenericRule(this);
    return this;
  }

  public setVars(variables: Partial<types.IVariable>): types.ITheme {
    this.vars = {
      ...this.vars,
      ...variables,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setDerivedVars(
    variables: Partial<types.IDerivedVariable>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...variables,
    };
    return this;
  }

  public setAnimation(
    animations: Partial<types.IAnimation>,
  ): types.ITheme {
    this.animations = {
      ...this.animations,
      ...animations,
    };
    return this;
  }

  public setMixins(mixin: types.IMixin): types.ITheme {
    this.mixins = mixin;
    return this;
  }

  public setColor(colors: Partial<types.IColor>): types.ITheme {
    this.vars = {
      ...this.vars,
      ...colors,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setTypo(typo: Partial<types.ITypo>): types.ITheme {
    this.vars = {
      ...this.vars,
      ...typo,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setResponsive(
    responsive: Partial<types.IResponsive>,
  ): types.ITheme {
    this.vars = {
      ...this.vars,
      ...responsive,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setMisc(misc: Partial<types.IMisc>): types.ITheme {
    this.vars = {
      ...this.vars,
      ...misc,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setFlag(flags: Partial<types.IFlag>): types.ITheme {
    this.vars = {
      ...this.vars,
      ...flags,
    };
    this.derivedVars = createDerivedVars(this);
    return this;
  }

  public setDerivedColor(
    colors: Partial<types.IDerivedColor>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedInvertColor(
    colors: Partial<types.IDerivedInvertColor>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedGeneralColor(
    colors: Partial<types.IDerivedGeneralColor>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedTextColor(
    colors: Partial<types.IDerivedTextColor>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedCodeColor(
    colors: Partial<types.IDerivedCodeColor>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedLinkColor(
    colors: Partial<types.IDerivedLinkColor>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...colors,
    };
    return this;
  }

  public setDerivedTypo(
    typo: Partial<types.IDerivedTypo>,
  ): types.ITheme {
    this.derivedVars = {
      ...this.derivedVars,
      ...typo,
    };
    return this;
  }
}
