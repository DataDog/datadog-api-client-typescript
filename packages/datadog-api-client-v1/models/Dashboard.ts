/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { DashboardLayoutType } from './DashboardLayoutType';
import { DashboardReflowType } from './DashboardReflowType';
import { DashboardTemplateVariable } from './DashboardTemplateVariable';
import { DashboardTemplateVariablePreset } from './DashboardTemplateVariablePreset';
import { Widget } from './Widget';
import { HttpFile } from '../http/http';

/**
* A dashboard is Datadog’s tool for visually tracking, analyzing, and displaying key performance metrics, which enable you to monitor the health of your infrastructure.
*/
export class Dashboard {
    /**
    * Identifier of the dashboard author.
    */
    'authorHandle'?: string;
    /**
    * Creation date of the dashboard.
    */
    'createdAt'?: Date;
    /**
    * Description of the dashboard.
    */
    'description'?: string;
    /**
    * ID of the dashboard.
    */
    'id'?: string;
    /**
    * Whether this dashboard is read-only. If True, only the author and admins can make changes to it.
    */
    'isReadOnly'?: boolean;
    'layoutType': DashboardLayoutType;
    /**
    * Modification date of the dashboard.
    */
    'modifiedAt'?: Date;
    /**
    * List of handles of users to notify when changes are made to this dashboard.
    */
    'notifyList'?: Array<string>;
    'reflowType'?: DashboardReflowType;
    /**
    * Array of template variables saved views.
    */
    'templateVariablePresets'?: Array<DashboardTemplateVariablePreset>;
    /**
    * List of template variables for this dashboard.
    */
    'templateVariables'?: Array<DashboardTemplateVariable>;
    /**
    * Title of the dashboard.
    */
    'title': string;
    /**
    * The URL of the dashboard.
    */
    'url'?: string;
    /**
    * List of widgets to display on the dashboard.
    */
    'widgets': Array<Widget>;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "authorHandle",
            "baseName": "author_handle",
            "type": "string",
            "format": ""
        },
        {
            "name": "createdAt",
            "baseName": "created_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string",
            "format": ""
        },
        {
            "name": "isReadOnly",
            "baseName": "is_read_only",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "layoutType",
            "baseName": "layout_type",
            "type": "DashboardLayoutType",
            "format": ""
        },
        {
            "name": "modifiedAt",
            "baseName": "modified_at",
            "type": "Date",
            "format": "date-time"
        },
        {
            "name": "notifyList",
            "baseName": "notify_list",
            "type": "Array<string>",
            "format": ""
        },
        {
            "name": "reflowType",
            "baseName": "reflow_type",
            "type": "DashboardReflowType",
            "format": ""
        },
        {
            "name": "templateVariablePresets",
            "baseName": "template_variable_presets",
            "type": "Array<DashboardTemplateVariablePreset>",
            "format": ""
        },
        {
            "name": "templateVariables",
            "baseName": "template_variables",
            "type": "Array<DashboardTemplateVariable>",
            "format": ""
        },
        {
            "name": "title",
            "baseName": "title",
            "type": "string",
            "format": ""
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string",
            "format": ""
        },
        {
            "name": "widgets",
            "baseName": "widgets",
            "type": "Array<Widget>",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return Dashboard.attributeTypeMap;
    }
    
    public constructor() {
    }
}

