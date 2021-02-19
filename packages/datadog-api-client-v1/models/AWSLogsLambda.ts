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
* Description of the Lambdas.
*/
export class AWSLogsLambda {
    /**
    * Available ARN IDs.
    */
    'arn'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "arn",
            "baseName": "arn",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AWSLogsLambda.attributeTypeMap;
    }
    
    public constructor() {
    }
}

