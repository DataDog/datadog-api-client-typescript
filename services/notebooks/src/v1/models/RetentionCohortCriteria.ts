import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionCohortCriteriaTimeInterval } from "./RetentionCohortCriteriaTimeInterval";

/**
 * Cohort criteria for retention queries.
 */
export class RetentionCohortCriteria {
  /**
   * Base query for Product Analytics.
   */
  "baseQuery": any;
  /**
   * Time interval for cohort criteria.
   */
  "timeInterval": RetentionCohortCriteriaTimeInterval;
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
      type: "any",
      required: true,
    },
    timeInterval: {
      baseName: "time_interval",
      type: "RetentionCohortCriteriaTimeInterval",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionCohortCriteria.attributeTypeMap;
  }

  public constructor() {}
}
