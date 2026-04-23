import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsTestResultBounds } from "./SyntheticsTestResultBounds";

/**
 * A warning captured during a browser test step.
 */
export class SyntheticsTestResultWarning {
  /**
   * Bounds of elements related to the warning.
   */
  "elementBounds"?: Array<SyntheticsTestResultBounds>;
  /**
   * Warning message.
   */
  "message"?: string;
  /**
   * Type of the warning.
   */
  "type"?: string;
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
    elementBounds: {
      baseName: "element_bounds",
      type: "Array<SyntheticsTestResultBounds>",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    type: {
      baseName: "type",
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
    return SyntheticsTestResultWarning.attributeTypeMap;
  }

  public constructor() {}
}
