import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TreeDataProjectionTreemapDimensionsItemsDimension } from "./TreeDataProjectionTreemapDimensionsItemsDimension";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreeDataProjectionTreemapDimensionsItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimension": TreeDataProjectionTreemapDimensionsItemsDimension;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
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
      type: "TreeDataProjectionTreemapDimensionsItemsDimension",
      required: true,
    },
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreeDataProjectionTreemapDimensionsItems.attributeTypeMap;
  }

  public constructor() {}
}
