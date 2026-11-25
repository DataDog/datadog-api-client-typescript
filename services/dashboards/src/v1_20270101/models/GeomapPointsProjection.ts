import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GeomapPointsProjectionDimensionsItems } from "./GeomapPointsProjectionDimensionsItems";
import { GeomapPointsProjectionType } from "./GeomapPointsProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GeomapPointsProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<GeomapPointsProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": GeomapPointsProjectionType;
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
      type: "Array<GeomapPointsProjectionDimensionsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "GeomapPointsProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GeomapPointsProjection.attributeTypeMap;
  }

  public constructor() {}
}
