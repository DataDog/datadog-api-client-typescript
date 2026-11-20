/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TextMatch } from "./TextMatch";
import { TextReplacementRule20270101Replace } from "./TextReplacementRule20270101Replace";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextReplacementRule {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "match": TextMatch;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "replace"?: TextReplacementRule20270101Replace;

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
      type: "TextMatch",
      required: true,
    },
    replace: {
      baseName: "replace",
      type: "TextReplacementRule20270101Replace",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TextReplacementRule.attributeTypeMap;
  }

  public constructor() {}
}
