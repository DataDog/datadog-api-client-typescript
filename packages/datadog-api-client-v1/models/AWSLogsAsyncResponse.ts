/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AWSLogsAsyncError } from './AWSLogsAsyncError';
import { HttpFile } from '../http/http';

/**
* A list of all Datadog-AWS logs integrations available in your Datadog organization.
*/
export class AWSLogsAsyncResponse {
    /**
    * List of errors.
    */
    'errors'?: Array<AWSLogsAsyncError>;
    /**
    * Status of the properties.
    */
    'status'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<AWSLogsAsyncError>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return AWSLogsAsyncResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

