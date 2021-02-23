/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HTTPMethod } from './HTTPMethod';
import { SyntheticsBasicAuth } from './SyntheticsBasicAuth';
import { SyntheticsTestRequestCertificate } from './SyntheticsTestRequestCertificate';
import { HttpFile } from '../http/http';

/**
* Object describing the Synthetic test request.
*/
export class SyntheticsTestRequest {
    'basicAuth'?: SyntheticsBasicAuth;
    /**
    * Body to include in the test.
    */
    'body'?: string;
    'certificate'?: SyntheticsTestRequestCertificate;
    /**
    * DNS server to use for DNS tests.
    */
    'dnsServer'?: string;
    /**
    * Headers to include when performing the test.
    */
    'headers'?: { [key: string]: string; };
    /**
    * Host name to perform the test with.
    */
    'host'?: string;
    'method'?: HTTPMethod;
    /**
    * Port to use when performing the test.
    */
    'port'?: number;
    /**
    * Query to use for the test.
    */
    'query'?: any;
    /**
    * Timeout in seconds for the test.
    */
    'timeout'?: number;
    /**
    * URL to perform the test with.
    */
    'url'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "basicAuth",
            "baseName": "basicAuth",
            "type": "SyntheticsBasicAuth",
            "format": ""
        },
        {
            "name": "body",
            "baseName": "body",
            "type": "string",
            "format": ""
        },
        {
            "name": "certificate",
            "baseName": "certificate",
            "type": "SyntheticsTestRequestCertificate",
            "format": ""
        },
        {
            "name": "dnsServer",
            "baseName": "dnsServer",
            "type": "string",
            "format": ""
        },
        {
            "name": "headers",
            "baseName": "headers",
            "type": "{ [key: string]: string; }",
            "format": ""
        },
        {
            "name": "host",
            "baseName": "host",
            "type": "string",
            "format": ""
        },
        {
            "name": "method",
            "baseName": "method",
            "type": "HTTPMethod",
            "format": ""
        },
        {
            "name": "port",
            "baseName": "port",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "query",
            "baseName": "query",
            "type": "any",
            "format": ""
        },
        {
            "name": "timeout",
            "baseName": "timeout",
            "type": "number",
            "format": "double"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsTestRequest.attributeTypeMap;
    }
    
    public constructor() {
    }
}

