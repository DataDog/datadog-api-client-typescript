import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GroupStyleRule } from "./GroupStyleRule";
import { TreeDataProjectionTreemapDimensionsItems } from "./TreeDataProjectionTreemapDimensionsItems";
import { TreeDataProjectionTreemapType } from "./TreeDataProjectionTreemapType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreeDataProjectionTreemap {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<TreeDataProjectionTreemapDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupStyles"?: Array<GroupStyleRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TreeDataProjectionTreemapType;
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
      type: "Array<TreeDataProjectionTreemapDimensionsItems>",
      required: true,
    },
    groupStyles: {
      baseName: "group_styles",
      type: "Array<GroupStyleRule>",
    },
    type: {
      baseName: "type",
      type: "TreeDataProjectionTreemapType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreeDataProjectionTreemap.attributeTypeMap;
  }

  public constructor() {}
}
