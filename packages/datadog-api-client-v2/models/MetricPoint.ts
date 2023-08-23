/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A point object is of the form `{POSIX_timestamp, numeric_value}`.
 */
export class MetricPoint {
  /**
   * The timestamp should be in seconds and current.
   * Current is defined as not more than 10 minutes in the future or more than 1 hour in the past.
   */
  "timestamp"?: number;
  /**
   * The numeric value format should be a 64bit float gauge-type value.
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
      type: "number",
      format: "int64",
    },
    value: {
      type: "number",
      format: "double",
    },
  };
}
