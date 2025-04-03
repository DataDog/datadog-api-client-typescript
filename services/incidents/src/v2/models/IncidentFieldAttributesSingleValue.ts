import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentFieldAttributesSingleValueType } from "./IncidentFieldAttributesSingleValueType";

/**
 * A field with a single value selected.
 */
export class IncidentFieldAttributesSingleValue {
  /**
   * Type of the single value field definitions.
   */
  "type"?: IncidentFieldAttributesSingleValueType;
  /**
   * The single value selected for this field.
   */
  "value"?: string;
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
      type: "IncidentFieldAttributesSingleValueType",
    },
    value: {
      baseName: "value",
      type: "string",
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
    return IncidentFieldAttributesSingleValue.attributeTypeMap;
  }

  public constructor() {}
}
