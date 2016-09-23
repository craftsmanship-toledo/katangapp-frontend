/**
 *    Copyright 2016-today Software Craftmanship Toledo
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

import config from  '../app/config.js'

let fetchBusStopsAroundMe = ( position ) => {
    return fetch( config.api.protocol + config.api.domain + '/' + config.api.endpoints.busStops + '?lt=' + position.coords.latitude + '&ln=' + position.coords.longitude + '&r=' + position.meters );
}

const getBusStopsAroundMe = ( position ) => {
    return dispatch => {
        return fetchBusStopsAroundMe(position).then(
            response => {
                dispatch( { type: 'GET_BUS_STOPS_AROUND_ME_SUCCESS', busStopsAroundMe: response } )
            },
            error => {
                dispatch( { type: 'GET_BUS_STOPS_AROUND_ME_ERROR', error: error } )
                throw error
            }
        )
    }
}

export default getBusStopsAroundMe
