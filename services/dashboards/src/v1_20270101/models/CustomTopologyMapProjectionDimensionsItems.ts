import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapNodeDimension } from "./CustomTopologyMapNodeDimension";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapProjectionDimensionsItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimension": CustomTopologyMapNodeDimension;
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
    dimension: {
      baseName: "dimension",
      type: "CustomTopologyMapNodeDimension",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapProjectionDimensionsItems.attributeTypeMap;
  }

  public constructor() {}
}
