/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookCellTime } from './NotebookCellTime';
import { NotebookGraphSize } from './NotebookGraphSize';
import { NotebookSplitBy } from './NotebookSplitBy';
import { TimeseriesWidgetDefinition } from './TimeseriesWidgetDefinition';
import { HttpFile } from '../http/http';
import { AttributeTypeMap, UnparsedObject } from './ObjectSerializer';

/**
* The attributes of a notebook `timeseries` cell.
*/

export class NotebookTimeseriesCellAttributes {
    'definition': TimeseriesWidgetDefinition;
    'graphSize'?: NotebookGraphSize;
    'splitBy'?: NotebookSplitBy;
    'time'?: NotebookCellTime;

    'unparsedObject'?:any;

    static readonly attributeTypeMap: AttributeTypeMap = {
        "definition": {
            "baseName": "definition",
            "type": "TimeseriesWidgetDefinition",
            "required": true,
            
        },
        "graphSize": {
            "baseName": "graph_size",
            "type": "NotebookGraphSize",
            
            
        },
        "splitBy": {
            "baseName": "split_by",
            "type": "NotebookSplitBy",
            
            
        },
        "time": {
            "baseName": "time",
            "type": "NotebookCellTime",
            
            
        }    };

    static getAttributeTypeMap(): AttributeTypeMap {
        return NotebookTimeseriesCellAttributes.attributeTypeMap;
    }

    public constructor() {
    }
}



