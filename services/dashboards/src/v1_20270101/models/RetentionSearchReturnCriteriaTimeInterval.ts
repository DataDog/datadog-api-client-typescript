import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { RetentionSearchReturnCriteriaTimeIntervalType } from "./RetentionSearchReturnCriteriaTimeIntervalType";
import { RetentionSearchReturnCriteriaTimeIntervalUnit } from "./RetentionSearchReturnCriteriaTimeIntervalUnit";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class RetentionSearchReturnCriteriaTimeInterval {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": RetentionSearchReturnCriteriaTimeIntervalType;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "unit": RetentionSearchReturnCriteriaTimeIntervalUnit;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
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
      type: "RetentionSearchReturnCriteriaTimeIntervalType",
      required: true,
    },
    unit: {
      baseName: "unit",
      type: "RetentionSearchReturnCriteriaTimeIntervalUnit",
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
    return RetentionSearchReturnCriteriaTimeInterval.attributeTypeMap;
  }

  public constructor() {}
}
