/**
 *    Copyright 2016-today Software swcraftersclm
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import initialIntro from '../stores/initialIntro';

import { SET_INTRO_SHOWED } from '../actions/getBusStops.js';

const intro = (state = initialIntro, action) => {
  switch (action.type) {
    case SET_INTRO_SHOWED:
      return Object.assign({}, state, { state: action.state });
    default:
      return Object.assign({}, state);
  }
};

export default intro;
