/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GroupStyleRuleMatch } from "./GroupStyleRuleMatch";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class GroupStyleRule {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "match"?: GroupStyleRuleMatch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "palette": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "paletteIndex"?: number;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    match: {
      baseName: "match",
      type: "GroupStyleRuleMatch",
    },
    palette: {
      baseName: "palette",
      type: "string",
      required: true,
    },
    paletteIndex: {
      baseName: "palette_index",
      type: "number",
      format: "double",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return GroupStyleRule.attributeTypeMap;
  }

  public constructor() {}
}
