import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Attributes for creating a form.
 */
export class FormDataAttributesRequest {
  /**
   * The data definition for the form.
   */
  "dataDefinition": any;
  /**
   * The description of the form.
   */
  "description": string;
  /**
   * The name of the form.
   */
  "name": string;
  /**
   * The UI definition for the form.
   */
  "uiDefinition": any;
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
    dataDefinition: {
      baseName: "data_definition",
      type: "any",
      required: true,
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    uiDefinition: {
      baseName: "ui_definition",
      type: "any",
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
    return FormDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
