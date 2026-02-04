import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Update parameters for the form.
 */
export class FormUpdateAttributesFormUpdate {
  /**
   * The updated description of the form.
   */
  "description"?: string;
  /**
   * The updated name of the form.
   */
  "name"?: string;
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
    },
    name: {
      baseName: "name",
      type: "string",
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
    return FormUpdateAttributesFormUpdate.attributeTypeMap;
  }

  public constructor() {}
}
