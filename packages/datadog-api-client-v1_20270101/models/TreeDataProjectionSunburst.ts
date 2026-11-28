/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GroupStyleRule } from "./GroupStyleRule";
import { TreeDataProjectionSunburstDimensionsItems } from "./TreeDataProjectionSunburstDimensionsItems";
import { TreeDataProjectionSunburstType } from "./TreeDataProjectionSunburstType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TreeDataProjectionSunburst {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "dimensions": Array<TreeDataProjectionSunburstDimensionsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "groupStyles"?: Array<GroupStyleRule>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TreeDataProjectionSunburstType;

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
      type: "Array<TreeDataProjectionSunburstDimensionsItems>",
      required: true,
    },
    groupStyles: {
      baseName: "group_styles",
      type: "Array<GroupStyleRule>",
    },
    type: {
      baseName: "type",
      type: "TreeDataProjectionSunburstType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TreeDataProjectionSunburst.attributeTypeMap;
  }

  public constructor() {}
}
