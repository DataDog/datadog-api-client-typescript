import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentFieldAttributesValueType } from "./IncidentFieldAttributesValueType";

/**
 * A field with potentially multiple values selected.
 */
export class IncidentFieldAttributesMultipleValue {
  /**
   * Type of the multiple value field definitions.
   */
  "type"?: IncidentFieldAttributesValueType;
  /**
   * The multiple values selected for this field.
   */
  "value"?: Array<string>;
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
      type: "IncidentFieldAttributesValueType",
    },
    value: {
      baseName: "value",
      type: "Array<string>",
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
    return IncidentFieldAttributesMultipleValue.attributeTypeMap;
  }

  public constructor() {}
}
