/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsFilter } from './LogsFilter';
import { LogsPipelineProcessorType } from './LogsPipelineProcessorType';
import { LogsProcessor } from './LogsProcessor';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* Nested Pipelines are pipelines within a pipeline. Use Nested Pipelines to split the processing into two steps. For example, first use a high-level filtering such as team and then a second level of filtering based on the integration, service, or any other tag or attribute.  A pipeline can contain Nested Pipelines and Processors whereas a Nested Pipeline can only contain Processors.
*/

export class LogsPipelineProcessor {
    'filter'?: LogsFilter;
    /**
    * Whether or not the processor is enabled.
    */
    'isEnabled'?: boolean;
    /**
    * Name of the processor.
    */
    'name'?: string;
    /**
    * Ordered list of processors in this pipeline.
    */
    'processors'?: Array<LogsProcessor>;
    'type': LogsPipelineProcessorType;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "filter": {
            "baseName": "filter",
            "type": "LogsFilter",
            
            
        },
        "isEnabled": {
            "baseName": "is_enabled",
            "type": "boolean",
            
            
        },
        "name": {
            "baseName": "name",
            "type": "string",
            
            
        },
        "processors": {
            "baseName": "processors",
            "type": "Array<LogsProcessor>",
            
            
        },
        "type": {
            "baseName": "type",
            "type": "LogsPipelineProcessorType",
            "required": true,
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return LogsPipelineProcessor.attributeTypeMap;
    }

    public constructor() {
    }
}



