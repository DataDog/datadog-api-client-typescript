/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsMetricType } from "./LogsMetricType";
import { LogsMetricUpdateAttributes } from "./LogsMetricUpdateAttributes";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * The new log-based metric properties.
 */

export class LogsMetricUpdateData {
  "attributes": LogsMetricUpdateAttributes;
  "type": LogsMetricType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "LogsMetricUpdateAttributes",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
