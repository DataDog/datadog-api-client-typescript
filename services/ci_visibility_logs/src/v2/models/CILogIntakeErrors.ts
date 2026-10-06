import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CILogIntakeError } from "./CILogIntakeError";

/**
 * Request errors returned by the CI logs intake API.
 */
export class CILogIntakeErrors {
  /**
   * Request errors.
   */
  "errors"?: Array<CILogIntakeError>;
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
      type: "Array<CILogIntakeError>",
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
    return CILogIntakeErrors.attributeTypeMap;
  }

  public constructor() {}
}
