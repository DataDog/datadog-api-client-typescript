/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricResponseData } from "./LogsMetricResponseData";

import { AttributeTypeMap } from "../util";

/**
 * All the available log-based metric objects.
 */
export class LogsMetricsResponse {
  /**
   * A list of log-based metric objects.
   */
  "data"?: Array<LogsMetricResponseData>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<LogsMetricResponseData>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricsResponse.attributeTypeMap;
  }

  public constructor() {}
}
