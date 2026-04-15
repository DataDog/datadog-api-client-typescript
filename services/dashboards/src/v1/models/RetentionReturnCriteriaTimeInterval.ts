import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionReturnCriteriaTimeIntervalType } from "./RetentionReturnCriteriaTimeIntervalType";
import { RetentionReturnCriteriaTimeIntervalUnit } from "./RetentionReturnCriteriaTimeIntervalUnit";

/**
 * Time interval for return criteria.
 */
export class RetentionReturnCriteriaTimeInterval {
  /**
   * Type of time interval for return criteria.
   */
  "type": RetentionReturnCriteriaTimeIntervalType;
  /**
   * Unit of time for retention return criteria interval.
   */
  "unit": RetentionReturnCriteriaTimeIntervalUnit;
  /**
   * Value of the time interval.
   */
  "value": number;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "RetentionReturnCriteriaTimeIntervalType",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "RetentionReturnCriteriaTimeIntervalUnit",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return RetentionReturnCriteriaTimeInterval.attributeTypeMap;
  }

  public constructor() {}
}
