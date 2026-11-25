import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SortOrder } from "./SortOrder";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class SortPair {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "order": SortOrder;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    order: {
      baseName: "order",
      type: "SortOrder",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SortPair.attributeTypeMap;
  }

  public constructor() {}
}
