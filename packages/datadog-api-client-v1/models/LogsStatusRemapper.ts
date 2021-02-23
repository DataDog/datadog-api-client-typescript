/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsStatusRemapperType } from './LogsStatusRemapperType';
import { HttpFile } from '../http/http';

/**
* Use this Processor if you want to assign some attributes as the official status.  Each incoming status value is mapped as follows.    - Integers from 0 to 7 map to the Syslog severity standards   - Strings beginning with `emerg` or f (case-insensitive) map to `emerg` (0)   - Strings beginning with `a` (case-insensitive) map to `alert` (1)   - Strings beginning with `c` (case-insensitive) map to `critical` (2)   - Strings beginning with `err` (case-insensitive) map to `error` (3)   - Strings beginning with `w` (case-insensitive) map to `warning` (4)   - Strings beginning with `n` (case-insensitive) map to `notice` (5)   - Strings beginning with `i` (case-insensitive) map to `info` (6)   - Strings beginning with `d`, `trace` or `verbose` (case-insensitive) map to `debug` (7)   - Strings beginning with `o` or matching `OK` or `Success` (case-insensitive) map to OK   - All others map to `info` (6)    **Note:** If multiple log status remapper processors can be applied to a given log,   only the first one (according to the pipelines order) is taken into account.
*/
export class LogsStatusRemapper {
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Array of source attributes.
    */
    'sources': Array<string>;
    'type': LogsStatusRemapperType;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "isEnabled",
            "baseName": "is_enabled",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "sources",
            "baseName": "sources",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "LogsStatusRemapperType",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return LogsStatusRemapper.attributeTypeMap;
    }
    
    public constructor() {
    }
}

