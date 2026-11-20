import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HostmapProjectionDimensionsItems } from "./HostmapProjectionDimensionsItems";
import { HostmapProjectionType } from "./HostmapProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class HostmapProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<HostmapProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": HostmapProjectionType;
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
      type: "Array<HostmapProjectionDimensionsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HostmapProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostmapProjection.attributeTypeMap;
  }

  public constructor() {}
}
