import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAssertionJavascriptType } from "./SyntheticsAssertionJavascriptType";

/**
 * A JavaScript assertion.
 */
export class SyntheticsAssertionJavascript {
  /**
   * The JavaScript code that performs the assertions.
   */
  "code": string;
  /**
   * Type of the assertion.
   */
  "type": SyntheticsAssertionJavascriptType;
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
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsAssertionJavascriptType",
      required: true,
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
    return SyntheticsAssertionJavascript.attributeTypeMap;
  }

  public constructor() {}
}
