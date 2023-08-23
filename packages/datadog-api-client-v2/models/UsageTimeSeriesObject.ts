/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Usage timeseries data.
 */
export class UsageTimeSeriesObject {
  /**
   * Datetime in ISO-8601 format, UTC. The hour for the usage.
   */
  "timestamp"?: Date;
  /**
   * Contains the number measured for the given usage_type during the hour.
   */
  "value"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    timestamp: {
      type: "Date",
      format: "date-time",
    },
    value: {
      type: "number",
      format: "int64",
    },
  };
}
