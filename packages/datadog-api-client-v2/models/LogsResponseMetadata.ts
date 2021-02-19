/**
 * Datadog API V2 Collection
 * Collection of all Datadog Public endpoints.
 *
 * OpenAPI spec version: 1.0
 * Contact: support@datadoghq.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsAggregateResponseStatus } from './LogsAggregateResponseStatus';
import { LogsResponseMetadataPage } from './LogsResponseMetadataPage';
import { LogsWarning } from './LogsWarning';
import { HttpFile } from '../http/http';

/**
* The metadata associated with a request
*/
export class LogsResponseMetadata {
    /**
    * The time elapsed in milliseconds
    */
    'elapsed'?: number;
    'page'?: LogsResponseMetadataPage;
    /**
    * The identifier of the request
    */
    'requestId'?: string;
    'status'?: LogsAggregateResponseStatus;
    /**
    * A list of warnings (non fatal errors) encountered, partial results might be returned if warnings are present in the response.
    */
    'warnings'?: Array<LogsWarning>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "elapsed",
            "baseName": "elapsed",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "page",
            "baseName": "page",
            "type": "LogsResponseMetadataPage",
            "format": ""
        },
        {
            "name": "requestId",
            "baseName": "request_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "LogsAggregateResponseStatus",
            "format": ""
        },
        {
            "name": "warnings",
            "baseName": "warnings",
            "type": "Array<LogsWarning>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsResponseMetadata.attributeTypeMap;
    }
    
    public constructor() {
    }
}

