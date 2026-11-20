/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TextFormattingRule } from "./TextFormattingRule";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class TableRowGroupByFormat {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "textFormats": Array<TextFormattingRule>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    textFormats: {
      baseName: "text_formats",
      type: "Array<TextFormattingRule>",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableRowGroupByFormat.attributeTypeMap;
  }

  public constructor() {}
}
