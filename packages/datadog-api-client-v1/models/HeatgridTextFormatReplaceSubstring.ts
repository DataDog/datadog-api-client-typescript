/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridTextFormatReplaceSubstringType } from "./HeatgridTextFormatReplaceSubstringType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Replace a substring of the matching group label.
 */
export class HeatgridTextFormatReplaceSubstring {
  /**
   * Substring to replace.
   */
  "substring": string;
  /**
   * Replace a substring of a matching group label.
   */
  "type": HeatgridTextFormatReplaceSubstringType;
  /**
   * Replacement string.
   */
  "_with": string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    substring: {
      baseName: "substring",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "HeatgridTextFormatReplaceSubstringType",
      required: true,
    },
    _with: {
      baseName: "with",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return HeatgridTextFormatReplaceSubstring.attributeTypeMap;
  }

  public constructor() {}
}
