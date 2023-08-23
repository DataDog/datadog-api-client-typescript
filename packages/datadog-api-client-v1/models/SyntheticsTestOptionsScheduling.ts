/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsTestOptionsSchedulingTimeframe } from "./SyntheticsTestOptionsSchedulingTimeframe";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing timeframes and timezone used for advanced scheduling.
 */
export class SyntheticsTestOptionsScheduling {
  /**
   * Array containing objects describing the scheduling pattern to apply to each day.
   */
  "timeframes"?: Array<SyntheticsTestOptionsSchedulingTimeframe>;
  /**
   * Timezone in which the timeframe is based.
   */
  "timezone"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    timeframes: {
      baseName: "timeframes",
      type: "Array<SyntheticsTestOptionsSchedulingTimeframe>",
    },
    timezone: {
      baseName: "timezone",
      type: "string",
    },
  };
}
