import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FormDataDefinitionType } from "./FormDataDefinitionType";

/**
 * A JSON Schema definition that describes the form's data fields.
 */
export class FormDataDefinition {
  /**
   * A description shown to form respondents.
   */
  "description"?: string;
  /**
   * A map of field names to their JSON Schema definitions.
   */
  "properties"?: { [key: string]: any; };
  /**
   * List of field names that must be answered.
   */
  "required"?: Array<string>;
  /**
   * The title of the form schema.
   */
  "title"?: string;
  /**
   * The root schema type.
   */
  "type"?: FormDataDefinitionType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
    },
    properties: {
      baseName: "properties",
      type: "{ [key: string]: any; }",
    },
    required: {
      baseName: "required",
      type: "Array<string>",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "FormDataDefinitionType",
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
    return FormDataDefinition.attributeTypeMap;
  }

  public constructor() {}
}
