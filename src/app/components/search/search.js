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

import React from 'react';
import PropTypes from 'prop-types';

import Geolocalizer from '../geolocalizer/geolocalizer.jsx';
import Slider from '../slider/slider.jsx';

const Search = ({
  shouldBeHidden,
  meters,
  coords,
  setMetersAroundMe,
  getBusStopsAroundMe,
  onProblemsWithGeolocation,
  setLoading,
}) =>
  <main className={shouldBeHidden ? 'ktg-search ktg-search--is-hidden' : 'ktg-search'}>
    <header className="ktg-search__header">
      <h1 className="ktg-search__title">Pagina de inicio de katanga</h1>
    </header>

    <form
      id="ktg-search_meters-around"
      className={
        shouldBeHidden ? 'ktg-search__meters-around ktg-search__meters-around--is-loading' : 'ktg-search__meters-around'
      }>
      <Slider meters={meters} setMeters={setMetersAroundMe} />

      <Geolocalizer
        coords={coords}
        setCoords={getBusStopsAroundMe}
        onError={onProblemsWithGeolocation}
        setLoading={setLoading}
      />
    </form>
  </main>;

Search.propTypes = {
  shouldBeHidden: PropTypes.bool.isRequired,
  meters: PropTypes.number.isRequired,
  coords: PropTypes.object.isRequired,
  setMetersAroundMe: PropTypes.func.isRequired,
  getBusStopsAroundMe: PropTypes.func.isRequired,
  onProblemsWithGeolocation: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
};

export default Search;
