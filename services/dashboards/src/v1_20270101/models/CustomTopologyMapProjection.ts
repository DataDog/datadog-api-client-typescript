import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CustomTopologyMapProjectionDimensionsItems } from "./CustomTopologyMapProjectionDimensionsItems";
import { CustomTopologyMapProjectionType } from "./CustomTopologyMapProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class CustomTopologyMapProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<CustomTopologyMapProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": CustomTopologyMapProjectionType;
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
      type: "Array<CustomTopologyMapProjectionDimensionsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CustomTopologyMapProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return CustomTopologyMapProjection.attributeTypeMap;
  }

  public constructor() {}
}
