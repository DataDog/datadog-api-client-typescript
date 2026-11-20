import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReturnPeriodScopeTargetType } from "./ReturnPeriodScopeTargetType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ReturnPeriodScopeTarget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ReturnPeriodScopeTargetType;
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
      type: "ReturnPeriodScopeTargetType",
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
    return ReturnPeriodScopeTarget.attributeTypeMap;
  }

  public constructor() {}
}
