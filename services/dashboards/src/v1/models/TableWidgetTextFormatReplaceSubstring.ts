import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableWidgetTextFormatReplaceSubstringType } from "./TableWidgetTextFormatReplaceSubstringType";

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
      type: "{ [key: string]: any; }",
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
