import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Describes additional metadata for validation errors, including field names and error messages.
 */
export class ValidationErrorMeta {
  /**
   * The field name that caused the error.
   */
  "field"?: string;
  /**
   * The ID of the component in which the error occurred.
   */
  "id"?: string;
  /**
   * The detailed error message.
   */
  "message": string;
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
    field: {
      baseName: "field",
      type: "string",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    message: {
      baseName: "message",
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
    return ValidationErrorMeta.attributeTypeMap;
  }

  public constructor() {}
}
