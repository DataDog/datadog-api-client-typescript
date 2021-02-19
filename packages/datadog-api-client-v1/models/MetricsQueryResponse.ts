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

import { MetricsQueryMetadata } from './MetricsQueryMetadata';
import { HttpFile } from '../http/http';

/**
* Response Object that includes your query and the list of metrics retrieved.
*/
export class MetricsQueryResponse {
    /**
    * Message indicating the errors if status is not `ok`.
    */
    'error'?: string;
    /**
    * Start of requested time window, milliseconds since Unix epoch.
    */
    'fromDate'?: number;
    /**
    * List of tag keys on which to group.
    */
    'groupBy'?: Array<string>;
    /**
    * Message indicating `success` if status is `ok`.
    */
    'message'?: string;
    /**
    * Query string
    */
    'query'?: string;
    /**
    * Type of response.
    */
    'resType'?: string;
    /**
    * List of timeseries queried.
    */
    'series'?: Array<MetricsQueryMetadata>;
    /**
    * Status of the query.
    */
    'status'?: string;
    /**
    * End of requested time window, milliseconds since Unix epoch.
    */
    'toDate'?: number;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string",
            "format": ""
        },
        {
            "name": "fromDate",
            "baseName": "from_date",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "groupBy",
            "baseName": "group_by",
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
            "name": "query",
            "baseName": "query",
            "type": "string",
            "format": ""
        },
        {
            "name": "resType",
            "baseName": "res_type",
            "type": "string",
            "format": ""
        },
        {
            "name": "series",
            "baseName": "series",
            "type": "Array<MetricsQueryMetadata>",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string",
            "format": ""
        },
        {
            "name": "toDate",
            "baseName": "to_date",
            "type": "number",
            "format": "int64"
        }    ];

    static getAttributeTypeMap() {
        return MetricsQueryResponse.attributeTypeMap;
    }
    
    public constructor() {
    }
}

