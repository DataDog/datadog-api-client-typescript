import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CellScopeReturnPeriodTargetType } from "./CellScopeReturnPeriodTargetType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CellScopeReturnPeriodTarget {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CellScopeReturnPeriodTargetType;
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
      type: "CellScopeReturnPeriodTargetType",
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
    return CellScopeReturnPeriodTarget.attributeTypeMap;
  }

  public constructor() {}
}
