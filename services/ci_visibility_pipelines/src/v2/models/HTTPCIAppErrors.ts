import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPCIAppError } from "./HTTPCIAppError";

/**
 * Errors occurred.
 */
export class HTTPCIAppErrors {
  /**
   * Structured errors.
   */
  "errors"?: Array<HTTPCIAppError>;
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
      type: "Array<HTTPCIAppError>",
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
    return HTTPCIAppErrors.attributeTypeMap;
  }

  public constructor() {}
}
