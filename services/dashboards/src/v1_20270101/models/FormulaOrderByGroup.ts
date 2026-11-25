import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormulaOrderByGroupType } from "./FormulaOrderByGroupType";
import { QuerySortOrder } from "./QuerySortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class FormulaOrderByGroup {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": QuerySortOrder;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": FormulaOrderByGroupType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "QuerySortOrder",
      required: true,
    },
    type: {
      baseName: "type",
      type: "FormulaOrderByGroupType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return FormulaOrderByGroup.attributeTypeMap;
  }

  public constructor() {}
}
