/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A timeseries point
 */
export class LogsAggregateBucketValueTimeseriesPoint {
  /**
   * The time value for this point
   */
  "time"?: string;
  /**
   * The value for this point
   */
  "value"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    time: {
      baseName: "time",
      type: "string",
    },
    value: {
      baseName: "value",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAggregateBucketValueTimeseriesPoint.attributeTypeMap;
  }

  public constructor() {}
}
