/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricResponseAttributes } from "./LogsMetricResponseAttributes";
import { LogsMetricType } from "./LogsMetricType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The log-based metric properties.
 */
export class LogsMetricResponseData {
  /**
   * The object describing a Datadog log-based metric.
   */
  "attributes"?: LogsMetricResponseAttributes;
  /**
   * The name of the log-based metric.
   */
  "id"?: string;
  /**
   * The type of the resource. The value should always be logs_metrics.
   */
  "type"?: LogsMetricType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "LogsMetricResponseAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogsMetricType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricResponseData.attributeTypeMap;
  }

  public constructor() {}
}
