/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridTextFormatMatch } from "./HeatgridTextFormatMatch";
import { HeatgridTextFormatReplace } from "./HeatgridTextFormatReplace";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A rule for matching and optionally replacing a group label.
 */
export class HeatgridTextFormatRule {
  /**
   * Match a group label against a string.
   */
  "match": HeatgridTextFormatMatch;
  /**
   * Replace all or part of a matching group label.
   */
  "replace"?: HeatgridTextFormatReplace;

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
      type: "HeatgridTextFormatMatch",
      required: true,
    },
    replace: {
      baseName: "replace",
      type: "HeatgridTextFormatReplace",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridTextFormatRule.attributeTypeMap;
  }

  public constructor() {}
}
