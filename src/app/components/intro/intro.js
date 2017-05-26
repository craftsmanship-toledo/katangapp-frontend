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

import React from 'react'

import colors from  '../../styles/colors'
import Katanga from '../icons/katanga'

export default class Intro extends React.Component {

    constructor( props ) {
        super( props );
    }

    render() {
        return (
            <main className='ktg-intro'>
                <Katanga circleFillColor={colors.primary} 
                        circleBorderColor={colors.secondary} 
                        busAndTextColor={colors.secondary}/>
            </main>
        );
    }

    componentDidMount() {
        this.props.whenIntroIsFinished();
    }

}