/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration options for the evaluation window. If `hour_starts` is set, no other fields may be set. Otherwise, `day_starts` and `month_starts` must be set together.
 */
export class MonitorOptionsSchedulingOptionsEvaluationWindow {
  /**
   * The time of the day at which a one day cumulative evaluation window starts. Must be defined in UTC time in `HH:mm` format.
   */
  "dayStarts"?: string;
  /**
   * The minute of the hour at which a one hour cumulative evaluation window starts.
   */
  "hourStarts"?: number;
  /**
   * The day of the month at which a one month cumulative evaluation window starts.
   */
  "monthStarts"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dayStarts: {
      baseName: "day_starts",
      type: "string",
    },
    hourStarts: {
      baseName: "hour_starts",
      type: "number",
      format: "int32",
    },
    monthStarts: {
      baseName: "month_starts",
      type: "number",
      format: "int32",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonitorOptionsSchedulingOptionsEvaluationWindow.attributeTypeMap;
  }

  public constructor() {}
}
