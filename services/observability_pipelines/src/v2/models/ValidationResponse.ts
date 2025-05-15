import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ValidationError } from "./ValidationError";

/**
 * Response containing validation errors.
 */
export class ValidationResponse {
  /**
   * The `ValidationResponse` `errors`.
   */
  "errors"?: Array<ValidationError>;
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
    errors: {
      baseName: "errors",
      type: "Array<ValidationError>",
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
    return ValidationResponse.attributeTypeMap;
  }

  public constructor() {}
}
