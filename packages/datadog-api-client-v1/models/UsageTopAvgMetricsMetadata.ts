/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsageTopAvgMetricsPagination } from "./UsageTopAvgMetricsPagination";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing document metadata.
 */
export class UsageTopAvgMetricsMetadata {
  /**
   * The day value from the user request that contains the returned usage data. (If day was used the request)
   */
  "day"?: Date;
  /**
   * The month value from the user request that contains the returned usage data. (If month was used the request)
   */
  "month"?: Date;
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: UsageTopAvgMetricsPagination;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    day: {
      baseName: "day",
      type: "Date",
      format: "date-time",
    },
    month: {
      baseName: "month",
      type: "Date",
      format: "date-time",
    },
    pagination: {
      baseName: "pagination",
      type: "UsageTopAvgMetricsPagination",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsageTopAvgMetricsMetadata.attributeTypeMap;
  }

  public constructor() {}
}
