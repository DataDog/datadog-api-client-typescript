/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMetricUpdateData } from "./LogsMetricUpdateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The new log-based metric body.
 */
export class LogsMetricUpdateRequest {
  /**
   * The new log-based metric properties.
   */
  "data": LogsMetricUpdateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "LogsMetricUpdateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsMetricUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
