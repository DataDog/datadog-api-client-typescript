import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TableWidgetTextFormatMatchType } from "./TableWidgetTextFormatMatchType";

/**
 * Match rule for the table widget text format.
 */
export class TableWidgetTextFormatMatch {
  /**
   * Match or compare option.
   */
  "type": TableWidgetTextFormatMatchType;
  /**
   * Table Widget Match String.
   */
  "value": string;
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
      type: "TableWidgetTextFormatMatchType",
      required: true,
    },
    value: {
      baseName: "value",
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
    return TableWidgetTextFormatMatch.attributeTypeMap;
  }

  public constructor() {}
}
