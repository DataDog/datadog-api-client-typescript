/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Custom timeframe for funnel comparison.
 */
export class FunnelComparisonCustomTimeframe {
  /**
   * Start of the custom timeframe.
   */
  "from": number;
  /**
   * End of the custom timeframe.
   */
  "to": number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    from: {
      baseName: "from",
      type: "number",
      required: true,
      format: "double",
    },
    to: {
      baseName: "to",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FunnelComparisonCustomTimeframe.attributeTypeMap;
  }

  public constructor() {}
}
