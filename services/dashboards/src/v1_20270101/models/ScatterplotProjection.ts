import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScatterplotProjectionDimensionsItems } from "./ScatterplotProjectionDimensionsItems";
import { ScatterplotProjectionType } from "./ScatterplotProjectionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class ScatterplotProjection {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<ScatterplotProjectionDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": ScatterplotProjectionType;
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
      type: "Array<ScatterplotProjectionDimensionsItems>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ScatterplotProjectionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ScatterplotProjection.attributeTypeMap;
  }

  public constructor() {}
}
