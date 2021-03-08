/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { FormulaAndFunctionEventQueryDefinitionCompute } from './FormulaAndFunctionEventQueryDefinitionCompute';
import { FormulaAndFunctionEventQueryDefinitionSearch } from './FormulaAndFunctionEventQueryDefinitionSearch';
import { FormulaAndFunctionEventQueryGroupBy } from './FormulaAndFunctionEventQueryGroupBy';
import { FormulaAndFunctionEventsDataSource } from './FormulaAndFunctionEventsDataSource';
import { HttpFile } from '../http/http';

/**
* A formula and functions events query.
*/
export class FormulaAndFunctionEventQueryDefinition {
    'compute': FormulaAndFunctionEventQueryDefinitionCompute;
    'dataSource': FormulaAndFunctionEventsDataSource;
    /**
    * Group by options.
    */
    'groupBy'?: Array<FormulaAndFunctionEventQueryGroupBy>;
    /**
    * An array of index names to query in the stream. Omit or use `[]` to query all indexes at once.
    */
    'indexes'?: Array<string>;
    /**
    * Name of the query for use in formulas.
    */
    'name': string;
    'search'?: FormulaAndFunctionEventQueryDefinitionSearch;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "compute",
            "baseName": "compute",
            "type": "FormulaAndFunctionEventQueryDefinitionCompute",
            "format": ""
        },
        {
            "name": "dataSource",
            "baseName": "data_source",
            "type": "FormulaAndFunctionEventsDataSource",
            "format": ""
        },
        {
            "name": "groupBy",
            "baseName": "group_by",
            "type": "Array<FormulaAndFunctionEventQueryGroupBy>",
            "format": ""
        },
        {
            "name": "indexes",
            "baseName": "indexes",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string",
            "format": ""
        },
        {
            "name": "search",
            "baseName": "search",
            "type": "FormulaAndFunctionEventQueryDefinitionSearch",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return FormulaAndFunctionEventQueryDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

