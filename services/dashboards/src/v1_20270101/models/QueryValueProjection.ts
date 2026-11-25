import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { QueryValueProjectionType } from "./QueryValueProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class QueryValueProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<any>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": QueryValueProjectionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    dimensions: {
      baseName: "dimensions",
      type: "Array<any>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "QueryValueProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return QueryValueProjection.attributeTypeMap;
  }

  public constructor() {}
}
