import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ValidationErrorMeta } from "./ValidationErrorMeta";

/**
 * Represents a single validation error, including a human-readable title and metadata.
 */
export class ValidationError {
  /**
   * Describes additional metadata for validation errors, including field names and error messages.
   */
  "meta": ValidationErrorMeta;
  /**
   * A short, human-readable summary of the error.
   */
  "title": string;
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
    meta: {
      baseName: "meta",
      type: "ValidationErrorMeta",
      required: true,
    },
    title: {
      baseName: "title",
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
    return ValidationError.attributeTypeMap;
  }

  public constructor() {}
}
