/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ProductAnalyticsBaseQuery } from "./ProductAnalyticsBaseQuery";
import { ProductAnalyticsRetentionTimeInterval } from "./ProductAnalyticsRetentionTimeInterval";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Defines the event that places an entity into a cohort, and how cohorts are bucketed over time.
 */
export class ProductAnalyticsRetentionCohortCriteria {
  /**
   * A query definition discriminated by the `data_source` field.
   * Use `product_analytics` for standard event queries, or
   * `product_analytics_occurrence` for occurrence-filtered queries.
   */
  "baseQuery": ProductAnalyticsBaseQuery;
  /**
   * A retention interval, either aligned to calendar boundaries or of a fixed length.
   * Cohort criteria use calendar intervals; return criteria use fixed intervals.
   */
  "timeInterval": ProductAnalyticsRetentionTimeInterval;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    baseQuery: {
      baseName: "base_query",
      type: "ProductAnalyticsBaseQuery",
      required: true,
    },
    timeInterval: {
      baseName: "time_interval",
      type: "ProductAnalyticsRetentionTimeInterval",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ProductAnalyticsRetentionCohortCriteria.attributeTypeMap;
  }

  public constructor() {}
}
