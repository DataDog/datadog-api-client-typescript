/**
 * Datadog API V1 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsCITest } from './SyntheticsCITest';
import { HttpFile } from '../http/http';

/**
* Object describing the synthetics tests to trigger.
*/
export class SyntheticsCITestBody {
    /**
    * Individual synthetics test.
    */
    'tests'?: Array<SyntheticsCITest>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "tests",
            "baseName": "tests",
            "type": "Array<SyntheticsCITest>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsCITestBody.attributeTypeMap;
    }
    
    public constructor() {
    }
}

