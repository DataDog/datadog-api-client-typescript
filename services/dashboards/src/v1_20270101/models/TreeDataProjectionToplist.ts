import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GroupStyleRule } from "./GroupStyleRule";
import { TreeDataProjectionToplistDimensionsItems } from "./TreeDataProjectionToplistDimensionsItems";
import { TreeDataProjectionToplistType } from "./TreeDataProjectionToplistType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreeDataProjectionToplist {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<TreeDataProjectionToplistDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupStyles"?: Array<GroupStyleRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TreeDataProjectionToplistType;
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
      type: "Array<TreeDataProjectionToplistDimensionsItems>",
      required: true,
    },
    groupStyles: {
      baseName: "group_styles",
      type: "Array<GroupStyleRule>",
    },
    type: {
      baseName: "type",
      type: "TreeDataProjectionToplistType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreeDataProjectionToplist.attributeTypeMap;
  }

  public constructor() {}
}
