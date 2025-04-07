import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableWidgetTextFormatReplaceAllType } from "./TableWidgetTextFormatReplaceAllType";

/**
 * Match All definition.
 */
export class TableWidgetTextFormatReplaceAll {
  /**
   * Table widget text format replace all type.
   */
  "type": TableWidgetTextFormatReplaceAllType;
  /**
   * Replace All type.
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
    type: {
      baseName: "type",
      type: "TableWidgetTextFormatReplaceAllType",
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
    return TableWidgetTextFormatReplaceAll.attributeTypeMap;
  }

  public constructor() {}
}
