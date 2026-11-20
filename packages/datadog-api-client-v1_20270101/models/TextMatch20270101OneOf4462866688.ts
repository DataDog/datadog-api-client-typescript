/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TextMatchAnyOfAnyOfItemType4452734816 } from "./TextMatchAnyOfAnyOfItemType4452734816";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TextMatch20270101OneOf4462866688 {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": TextMatchAnyOfAnyOfItemType4452734816;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "value": string;

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
      type: "TextMatchAnyOfAnyOfItemType4452734816",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TextMatch20270101OneOf4462866688.attributeTypeMap;
  }

  public constructor() {}
}
