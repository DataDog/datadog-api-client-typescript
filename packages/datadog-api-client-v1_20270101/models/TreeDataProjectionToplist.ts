/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GroupStyleRule } from "./GroupStyleRule";
import { TreeDataProjectionToplistDimensionsItems } from "./TreeDataProjectionToplistDimensionsItems";
import { TreeDataProjectionToplistType } from "./TreeDataProjectionToplistType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
