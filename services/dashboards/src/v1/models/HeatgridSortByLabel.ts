import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HeatgridSortByLabelProperty } from "./HeatgridSortByLabelProperty";
import { HeatgridSortOrder } from "./HeatgridSortOrder";

/**
 * Sort rows by their group labels.
 */
export class HeatgridSortByLabel {
  /**
   * Sort direction.
   */
  "order": HeatgridSortOrder;
  /**
   * Sort by label.
   */
  "property": HeatgridSortByLabelProperty;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    order: {
      baseName: "order",
      type: "HeatgridSortOrder",
      required: true,
    },
    property: {
      baseName: "property",
      type: "HeatgridSortByLabelProperty",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridSortByLabel.attributeTypeMap;
  }

  public constructor() {}
}
