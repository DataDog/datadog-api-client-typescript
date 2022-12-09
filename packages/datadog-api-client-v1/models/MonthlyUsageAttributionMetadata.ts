/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonthlyUsageAttributionPagination } from "./MonthlyUsageAttributionPagination";
import { UsageAttributionAggregatesBody } from "./UsageAttributionAggregatesBody";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object containing document metadata.
 */
export class MonthlyUsageAttributionMetadata {
  /**
   * An array of available aggregates.
   */
  "aggregates"?: Array<UsageAttributionAggregatesBody>;
  /**
   * The metadata for the current pagination.
   */
  "pagination"?: MonthlyUsageAttributionPagination;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    aggregates: {
      baseName: "aggregates",
      type: "Array<UsageAttributionAggregatesBody>",
    },
    pagination: {
      baseName: "pagination",
      type: "MonthlyUsageAttributionPagination",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return MonthlyUsageAttributionMetadata.attributeTypeMap;
  }

  public constructor() {}
}
