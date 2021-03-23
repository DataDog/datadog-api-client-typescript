/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserTestConfig } from './SyntheticsBrowserTestConfig';
import { SyntheticsBrowserTestType } from './SyntheticsBrowserTestType';
import { SyntheticsStep } from './SyntheticsStep';
import { SyntheticsTestOptions } from './SyntheticsTestOptions';
import { SyntheticsTestPauseStatus } from './SyntheticsTestPauseStatus';
import { HttpFile } from '../http/http';

/**
* Object containing details about a Synthetic browser test.
*/
export class SyntheticsBrowserTest {
    'config'?: SyntheticsBrowserTestConfig;
    /**
    * Array of locations used to run the test.
    */
    'locations'?: Array<string>;
    /**
    * Notification message associated with the test. Message can either be text or an empty string.
    */
    'message': string;
    /**
    * The associated monitor ID.
    */
    'monitorId'?: number;
    /**
    * Name of the test.
    */
    'name'?: string;
    'options'?: SyntheticsTestOptions;
    /**
    * The public ID of the test.
    */
    'publicId'?: string;
    'status'?: SyntheticsTestPauseStatus;
    /**
    * The steps of the test.
    */
    'steps'?: Array<SyntheticsStep>;
    /**
    * Array of tags attached to the test.
    */
    'tags'?: Array<string>;
    'type'?: SyntheticsBrowserTestType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "config",
            "baseName": "config",
            "type": "SyntheticsBrowserTestConfig",
            "format": ""
        },
        {
            "name": "locations",
            "baseName": "locations",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "monitorId",
            "baseName": "monitor_id",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "options",
            "baseName": "options",
            "type": "SyntheticsTestOptions",
            "format": ""
        },
        {
            "name": "publicId",
            "baseName": "public_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "SyntheticsTestPauseStatus",
            "format": ""
        },
        {
            "name": "steps",
            "baseName": "steps",
            "type": "Array<SyntheticsStep>",
            "format": ""
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SyntheticsBrowserTestType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsBrowserTest.attributeTypeMap;
    }
    
    public constructor() {
    }
}

