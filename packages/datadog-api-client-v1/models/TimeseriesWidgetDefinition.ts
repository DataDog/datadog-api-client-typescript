/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { TimeseriesWidgetDefinitionType } from './TimeseriesWidgetDefinitionType';
import { TimeseriesWidgetLegendColumn } from './TimeseriesWidgetLegendColumn';
import { TimeseriesWidgetLegendLayout } from './TimeseriesWidgetLegendLayout';
import { TimeseriesWidgetRequest } from './TimeseriesWidgetRequest';
import { WidgetAxis } from './WidgetAxis';
import { WidgetCustomLink } from './WidgetCustomLink';
import { WidgetEvent } from './WidgetEvent';
import { WidgetMarker } from './WidgetMarker';
import { WidgetTextAlign } from './WidgetTextAlign';
import { WidgetTime } from './WidgetTime';
import { HttpFile } from '../http/http';

/**
* The timeseries visualization allows you to display the evolution of one or more metrics, log events, or Indexed Spans over time.
*/
export class TimeseriesWidgetDefinition {
    /**
    * List of custom links.
    */
    'customLinks'?: Array<WidgetCustomLink>;
    /**
    * List of widget events.
    */
    'events'?: Array<WidgetEvent>;
    /**
    * Columns displayed in the legend.
    */
    'legendColumns'?: Array<TimeseriesWidgetLegendColumn>;
    'legendLayout'?: TimeseriesWidgetLegendLayout;
    /**
    * Available legend sizes for a widget. Should be one of \"0\", \"2\", \"4\", \"8\", \"16\", or \"auto\".
    */
    'legendSize'?: string;
    /**
    * List of markers.
    */
    'markers'?: Array<WidgetMarker>;
    /**
    * List of timeseries widget requests.
    */
    'requests': Array<TimeseriesWidgetRequest>;
    'rightYaxis'?: WidgetAxis;
    /**
    * (screenboard only) Show the legend for this widget.
    */
    'showLegend'?: boolean;
    'time'?: WidgetTime;
    /**
    * Title of your widget.
    */
    'title'?: string;
    'titleAlign'?: WidgetTextAlign;
    /**
    * Size of the title.
    */
    'titleSize'?: string;
    'type': TimeseriesWidgetDefinitionType;
    'yaxis'?: WidgetAxis;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "customLinks",
            "baseName": "custom_links",
            "type": "Array<WidgetCustomLink>",
            "format": ""
        },
        {
            "name": "events",
            "baseName": "events",
            "type": "Array<WidgetEvent>",
            "format": ""
        },
        {
            "name": "legendColumns",
            "baseName": "legend_columns",
            "type": "Array<TimeseriesWidgetLegendColumn>",
            "format": ""
        },
        {
            "name": "legendLayout",
            "baseName": "legend_layout",
            "type": "TimeseriesWidgetLegendLayout",
            "format": ""
        },
        {
            "name": "legendSize",
            "baseName": "legend_size",
            "type": "string",
            "format": ""
        },
        {
            "name": "markers",
            "baseName": "markers",
            "type": "Array<WidgetMarker>",
            "format": ""
        },
        {
            "name": "requests",
            "baseName": "requests",
            "type": "Array<TimeseriesWidgetRequest>",
            "format": ""
        },
        {
            "name": "rightYaxis",
            "baseName": "right_yaxis",
            "type": "WidgetAxis",
            "format": ""
        },
        {
            "name": "showLegend",
            "baseName": "show_legend",
            "type": "boolean",
            "format": ""
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "WidgetTime",
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
            "type": "TimeseriesWidgetDefinitionType",
            "format": ""
        },
        {
            "name": "yaxis",
            "baseName": "yaxis",
            "type": "WidgetAxis",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return TimeseriesWidgetDefinition.attributeTypeMap;
    }
    
    public constructor() {
    }
}

