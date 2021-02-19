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

import { HttpFile } from '../http/http';

/**
* A metric SLI query. **Required if type is `metric`**. Note that Datadog only allows the sum by aggregator to be used because this will sum up all request counts instead of averaging them, or taking the max or min of all of those requests.
*/
export class ServiceLevelObjectiveQuery {
    /**
    * A Datadog metric query for total (valid) events.
    */
    'denominator': string;
    /**
    * A Datadog metric query for good events.
    */
    'numerator': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "denominator",
            "baseName": "denominator",
            "type": "string",
            "format": ""
        },
        {
            "name": "numerator",
            "baseName": "numerator",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ServiceLevelObjectiveQuery.attributeTypeMap;
    }
    
    public constructor() {
    }
}

