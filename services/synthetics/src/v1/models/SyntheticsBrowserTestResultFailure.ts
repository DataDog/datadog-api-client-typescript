import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsBrowserTestFailureCode } from "./SyntheticsBrowserTestFailureCode";

/**
 * The browser test failure details.
 */
export class SyntheticsBrowserTestResultFailure {
  /**
   * Error code that can be returned by a Synthetic test.
   */
  "code"?: SyntheticsBrowserTestFailureCode;
  /**
   * The browser test error message.
   */
  "message"?: string;
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
    code: {
      baseName: "code",
      type: "SyntheticsBrowserTestFailureCode",
    },
    message: {
      baseName: "message",
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
    return SyntheticsBrowserTestResultFailure.attributeTypeMap;
  }

  public constructor() {}
}
