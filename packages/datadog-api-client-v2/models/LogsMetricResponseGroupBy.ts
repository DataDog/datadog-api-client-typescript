/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export class LogsMetricResponseGroupBy {
  /**
   * The path to the value the log-based metric will be aggregated over.
   */
  "path"?: string;
  /**
   * Eventual name of the tag that gets created. By default, the path attribute is used as the tag name.
   */
  "tagName"?: string;

  "unparsedObject"?: any;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    path: {
      baseName: "path",
      type: "string",
    },
    tagName: {
      baseName: "tag_name",
      type: "string",
    },
  };

  static getAttributeTypeMap() {
    return LogsMetricResponseGroupBy.attributeTypeMap;
  }

  public constructor() {}
}
