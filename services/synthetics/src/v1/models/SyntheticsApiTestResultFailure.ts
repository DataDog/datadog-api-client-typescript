import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsApiTestFailureCode } from "./SyntheticsApiTestFailureCode";

/**
 * The API test failure details.
 */
export class SyntheticsApiTestResultFailure {
  /**
   * Error code that can be returned by a Synthetic test.
   */
  "code"?: SyntheticsApiTestFailureCode;
  /**
   * The API test error message.
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
      type: "SyntheticsApiTestFailureCode",
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
    return SyntheticsApiTestResultFailure.attributeTypeMap;
  }

  public constructor() {}
}
