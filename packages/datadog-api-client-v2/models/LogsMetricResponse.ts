/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricResponseData } from "./LogsMetricResponseData";

import { AttributeTypeMap } from "../util";

/**
 * The log-based metric object.
 */
export class LogsMetricResponse {
  /**
   * The log-based metric properties.
   */
  "data"?: LogsMetricResponseData;

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
      type: "LogsMetricResponseData",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricResponse.attributeTypeMap;
  }

  public constructor() {}
}
