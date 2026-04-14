/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FunnelComparisonCustomTimeframe } from "./FunnelComparisonCustomTimeframe";
import { FunnelComparisonDurationType } from "./FunnelComparisonDurationType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Comparison time configuration for funnel widgets.
 */
export class FunnelComparisonDuration {
  /**
   * Custom timeframe for funnel comparison.
   */
  "customTimeframe"?: FunnelComparisonCustomTimeframe;
  /**
   * Type of comparison duration.
   */
  "type": FunnelComparisonDurationType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    customTimeframe: {
      baseName: "custom_timeframe",
      type: "FunnelComparisonCustomTimeframe",
    },
    type: {
      baseName: "type",
      type: "FunnelComparisonDurationType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FunnelComparisonDuration.attributeTypeMap;
  }

  public constructor() {}
}
