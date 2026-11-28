/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016 } from "./TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextFormattingRule20270101ReplaceOneOf4462863328 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
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
    type: {
      baseName: "type",
      type: "TextFormattingRuleReplaceAnyOfAnyOfItemType4452730016",
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
    return TextFormattingRule20270101ReplaceOneOf4462863328.attributeTypeMap;
  }

  public constructor() {}
}
