/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SLOWidgetDefinitionType } from './SLOWidgetDefinitionType';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTimeWindows } from './WidgetTimeWindows';
import { WidgetViewMode } from './WidgetViewMode';
import { HttpFile } from '../http/http';

/**
* Use the SLO and uptime widget to track your SLOs (Service Level Objectives) and uptime on screenboards and timeboards.
*/
export class SLOWidgetDefinition {
    /**
    * Defined global time target.
    */
    'globalTimeTarget'?: string;
    /**
    * Defined error budget.
    */
    'showErrorBudget'?: boolean;
    /**
    * ID of the SLO displayed.
    */
    'sloId'?: string;
    /**
    * Times being monitored.
    */
    'timeWindows'?: Array<WidgetTimeWindows>;
    /**
    * Title of the widget.
    */
    'title'?: string;
    'titleAlign'?: WidgetTextAlign;
    /**
    * Size of the title.
    */
    'titleSize'?: string;
    'type': SLOWidgetDefinitionType;
    'viewMode'?: WidgetViewMode;
    /**
    * Type of view displayed by the widget.
    */
    'viewType': string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "globalTimeTarget",
            "baseName": "global_time_target",
            "type": "string",
            "format": ""
        },
        {
            "name": "showErrorBudget",
            "baseName": "show_error_budget",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "sloId",
            "baseName": "slo_id",
            "type": "string",
            "format": ""
        },
        {
            "name": "timeWindows",
            "baseName": "time_windows",
            "type": "Array<WidgetTimeWindows>",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "titleAlign",
            "baseName": "title_align",
            "type": "WidgetTextAlign",
            "format": ""
        },
        {
            "name": "titleSize",
            "baseName": "title_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "SLOWidgetDefinitionType",
            "format": ""
        },
        {
            "name": "viewMode",
            "baseName": "view_mode",
            "type": "WidgetViewMode",
            "format": ""
        },
        {
            "name": "viewType",
            "baseName": "view_type",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return SLOWidgetDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

