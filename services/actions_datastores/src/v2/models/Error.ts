import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ErrorErrorsItems } from "./ErrorErrorsItems";

/**
 * The definition of `Error` object.
 */
export class Error {
  /**
   * The `Error` `errors`.
   */
  "errors"?: Array<ErrorErrorsItems | null>;
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
      type: "Array<ErrorErrorsItems>",
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
    return Error.attributeTypeMap;
  }

  public constructor() {}
}
