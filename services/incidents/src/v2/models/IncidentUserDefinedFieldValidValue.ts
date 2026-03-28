import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A valid value for an incident user-defined field.
 */
export class IncidentUserDefinedFieldValidValue {
  /**
   * A detailed description of the valid value.
   */
  "description": string;
  /**
   * The human-readable display name for this value.
   */
  "displayName": string;
  /**
   * A short description of the valid value.
   */
  "shortDescription"?: string;
  /**
   * The machine-readable value stored when this option is selected.
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
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    displayName: {
      baseName: "display_name",
      type: "string",
      required: true,
    },
    shortDescription: {
      baseName: "short_description",
      type: "string",
    },
    value: {
      baseName: "value",
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
    return IncidentUserDefinedFieldValidValue.attributeTypeMap;
  }

  public constructor() {}
}
