import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReturnPeriodScopeTarget } from "./ReturnPeriodScopeTarget";
import { ReturnPeriodScopeType } from "./ReturnPeriodScopeType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ReturnPeriodScope {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "target": ReturnPeriodScopeTarget;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ReturnPeriodScopeType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    target: {
      baseName: "target",
      type: "ReturnPeriodScopeTarget",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReturnPeriodScopeType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ReturnPeriodScope.attributeTypeMap;
  }

  public constructor() {}
}
