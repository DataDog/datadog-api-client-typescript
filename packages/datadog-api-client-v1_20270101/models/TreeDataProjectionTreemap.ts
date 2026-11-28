/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GroupStyleRule } from "./GroupStyleRule";
import { TreeDataProjectionTreemapDimensionsItems } from "./TreeDataProjectionTreemapDimensionsItems";
import { TreeDataProjectionTreemapType } from "./TreeDataProjectionTreemapType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
