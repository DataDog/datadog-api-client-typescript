/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { HttpFile } from '../http/http';

/**
* Object with all metric related metadata.
*/
export class MetricMetadata {
    /**
    * Metric description.
    */
    'description'?: string;
    /**
    * Name of the integration that sent the metric if applicable.
    */
    'integration'?: string;
    /**
    * Per unit of the metric such as `second` in `bytes per second`.
    */
    'perUnit'?: string;
    /**
    * A more human-readable and abbreviated version of the metric name.
    */
    'shortName'?: string;
    /**
    * StatsD flush interval of the metric in seconds if applicable.
    */
    'statsdInterval'?: number;
    /**
    * Metric type such as `gauge` or `rate`.
    */
    'type'?: string;
    /**
    * Primary unit of the metric such as `byte` or `operation`.
    */
    'unit'?: string;

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string",
            "format": ""
        },
        {
            "name": "integration",
            "baseName": "integration",
            "type": "string",
            "format": ""
        },
        {
            "name": "perUnit",
            "baseName": "per_unit",
            "type": "string",
            "format": ""
        },
        {
            "name": "shortName",
            "baseName": "short_name",
            "type": "string",
            "format": ""
        },
        {
            "name": "statsdInterval",
            "baseName": "statsd_interval",
            "type": "number",
            "format": "int64"
        },
        {
            "name": "type",
            "baseName": "type",
            "type": "string",
            "format": ""
        },
        {
            "name": "unit",
            "baseName": "unit",
            "type": "string",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return MetricMetadata.attributeTypeMap;
    }
    
    public constructor() {
    }
}

