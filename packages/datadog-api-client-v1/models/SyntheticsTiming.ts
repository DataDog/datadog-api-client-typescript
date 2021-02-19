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
* Object containing all metrics and their values collected for a Synthetic API test. Learn more about those metrics in [Synthetics documentation](https://docs.datadoghq.com/synthetics/#metrics).
*/
export class SyntheticsTiming {
    /**
    * The duration in millisecond of the DNS lookup.
    */
    'dns'?: number;
    /**
    * The time in millisecond to download the response.
    */
    'download'?: number;
    /**
    * The time in millisecond to first byte.
    */
    'firstByte'?: number;
    /**
    * The duration in millisecond of the TLS handshake.
    */
    'handshake'?: number;
    /**
    * The time in millisecond spent during redirections.
    */
    'redirect'?: number;
    /**
    * The duration in millisecond of the TLS handshake.
    */
    'ssl'?: number;
    /**
    * Time in millisecond to establish the TCP connection.
    */
    'tcp'?: number;
    /**
    * The overall time in millisecond the request took to be processed.
    */
    'total'?: number;
    /**
    * Time spent in millisecond waiting for a response.
    */
    'wait'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "dns",
            "baseName": "dns",
            "type": "number",
            "format": "double"
        },
        {
            "name": "download",
            "baseName": "download",
            "type": "number",
            "format": "double"
        },
        {
            "name": "firstByte",
            "baseName": "firstByte",
            "type": "number",
            "format": "double"
        },
        {
            "name": "handshake",
            "baseName": "handshake",
            "type": "number",
            "format": "double"
        },
        {
            "name": "redirect",
            "baseName": "redirect",
            "type": "number",
            "format": "double"
        },
        {
            "name": "ssl",
            "baseName": "ssl",
            "type": "number",
            "format": "double"
        },
        {
            "name": "tcp",
            "baseName": "tcp",
            "type": "number",
            "format": "double"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number",
            "format": "double"
        },
        {
            "name": "wait",
            "baseName": "wait",
            "type": "number",
            "format": "double"
        }    ];

    static getAttributeTypeMap() {
        return SyntheticsTiming.attributeTypeMap;
    }
    
    public constructor() {
    }
}

