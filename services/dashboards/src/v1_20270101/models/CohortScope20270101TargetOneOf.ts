import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CohortScopeTargetIndexType } from "./CohortScopeTargetIndexType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CohortScope20270101TargetOneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CohortScopeTargetIndexType;
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
      type: "CohortScopeTargetIndexType",
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
    return CohortScope20270101TargetOneOf.attributeTypeMap;
  }

  public constructor() {}
}
