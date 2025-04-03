import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { HTTPLogError } from "./HTTPLogError";

/**
 * Invalid query performed.
 */
export class HTTPLogErrors {
  /**
   * Structured errors.
   */
  "errors"?: Array<HTTPLogError>;
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
      type: "Array<HTTPLogError>",
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
    return HTTPLogErrors.attributeTypeMap;
  }

  public constructor() {}
}
