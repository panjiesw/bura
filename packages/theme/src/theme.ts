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
  public init: types.IVariable;
  public derived: types.IDerivedVariable;
  public animations: types.IAnimation;
  public mixins: types.IMixin;
  public generic: types.IGenericVariable;
  public helpers: types.BuraHelperClasses;

  constructor(
    public options: types.IThemeOption = {
      debug: process.env.NODE_ENV !== 'production',
    },
  ) {
    this.init = vars;
    this.derived = createDerivedVars(this);
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
    this.generic = createGenericVars(this);
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

  public withVars(factory: types.VariablesFactory): types.ITheme {
    const _vars = factory(this);
    if (_vars.init) {
      this.init = { ...this.init, ..._vars.init };
    }
    this.derived = createDerivedVars(this, _vars.derived);
    if (_vars.animations) {
      this.animations = { ...this.animations, ..._vars.animations };
    }
    this.generic = createGenericVars(this, _vars.generic);
    this.helpers = createHelperClasses(this);
    return this;
  }
}
