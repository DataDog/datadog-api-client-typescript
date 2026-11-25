import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { BaseProductAnalyticsQuery } from "./BaseProductAnalyticsQuery";
import { RetentionSearchReturnCriteriaTimeInterval } from "./RetentionSearchReturnCriteriaTimeInterval";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearchReturnCriteria {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "baseQuery": BaseProductAnalyticsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "timeInterval"?: RetentionSearchReturnCriteriaTimeInterval;
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
      type: "RetentionSearchReturnCriteriaTimeInterval",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionSearchReturnCriteria.attributeTypeMap;
  }

  public constructor() {}
}
