/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardGlobalTimeLiveSpan } from "./DashboardGlobalTimeLiveSpan";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Timeframe setting for the shared dashboard.
 */
export class SharedDashboardUpdateRequestGlobalTime {
  /**
   * Dashboard global time live_span selection
   */
  "liveSpan"?: DashboardGlobalTimeLiveSpan;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    liveSpan: {
      baseName: "live_span",
      type: "DashboardGlobalTimeLiveSpan",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SharedDashboardUpdateRequestGlobalTime.attributeTypeMap;
  }

  public constructor() {}
}