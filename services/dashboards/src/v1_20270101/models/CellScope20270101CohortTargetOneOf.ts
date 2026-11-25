import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CellScopeCohortTargetIndexType } from "./CellScopeCohortTargetIndexType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CellScope20270101CohortTargetOneOf {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CellScopeCohortTargetIndexType;
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
      type: "CellScopeCohortTargetIndexType",
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
    return CellScope20270101CohortTargetOneOf.attributeTypeMap;
  }

  public constructor() {}
}
