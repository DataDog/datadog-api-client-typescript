import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HostMapWidgetProjectionDimensionMapping } from "./HostMapWidgetProjectionDimensionMapping";
import { HostMapWidgetProjectionType } from "./HostMapWidgetProjectionType";

/**
 * Projection for the DDSQL host map request. Maps dataset columns to map dimensions: `node` identifies the entity, repeated `group` entries define the grouping hierarchy (outermost first), and `fill`/`size` drive the tile color and size.
 */
export class HostMapWidgetProjection {
  /**
   * List of column-to-dimension mappings for the projection.
   */
  "dimensions": Array<HostMapWidgetProjectionDimensionMapping>;
  /**
   * Type of the host map projection.
   */
  "type": HostMapWidgetProjectionType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "Array<HostMapWidgetProjectionDimensionMapping>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HostMapWidgetProjectionType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HostMapWidgetProjection.attributeTypeMap;
  }

  public constructor() {}
}
