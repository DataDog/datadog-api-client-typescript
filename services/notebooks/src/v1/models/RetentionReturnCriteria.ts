import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionReturnCriteriaTimeInterval } from "./RetentionReturnCriteriaTimeInterval";

/**
 * Return criteria for retention queries.
 */
export class RetentionReturnCriteria {
  /**
   * Base query for Product Analytics.
   */
  "baseQuery": any;
  /**
   * Time interval for return criteria.
   */
  "timeInterval"?: RetentionReturnCriteriaTimeInterval;
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
      type: "RetentionReturnCriteriaTimeInterval",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionReturnCriteria.attributeTypeMap;
  }

  public constructor() {}
}
