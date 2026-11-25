import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BaseProductAnalyticsQuery } from "./BaseProductAnalyticsQuery";
import { RetentionSearchCohortCriteriaTimeInterval } from "./RetentionSearchCohortCriteriaTimeInterval";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearchCohortCriteria {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": BaseProductAnalyticsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeInterval": RetentionSearchCohortCriteriaTimeInterval;
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
      type: "BaseProductAnalyticsQuery",
      required: true,
    },
    timeInterval: {
      baseName: "time_interval",
      type: "RetentionSearchCohortCriteriaTimeInterval",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionSearchCohortCriteria.attributeTypeMap;
  }

  public constructor() {}
}
