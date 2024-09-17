/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableWidgetTextFormatReplaceSubstringType } from "./TableWidgetTextFormatReplaceSubstringType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Match Sub-string definition.
 */
export class TableWidgetTextFormatReplaceSubstring {
  /**
   * Text that will be replaced.
   */
  "substring": string;
  /**
   * Table widget text format replace sub-string type.
   */
  "type": TableWidgetTextFormatReplaceSubstringType;
  /**
   * Text that will replace original sub-string.
   */
  "_with": string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "TableWidgetTextFormatReplaceSubstringType",
      required: true,
    },
    _with: {
      baseName: "with",
      type: "string",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TableWidgetTextFormatReplaceSubstring.attributeTypeMap;
  }

  public constructor() {}
}
