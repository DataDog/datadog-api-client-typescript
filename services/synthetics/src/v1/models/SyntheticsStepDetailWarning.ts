import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsWarningType } from "./SyntheticsWarningType";

/**
 * Object collecting warnings for a given step.
 */
export class SyntheticsStepDetailWarning {
  /**
   * Message for the warning.
   */
  "message": string;
  /**
   * User locator used.
   */
  "type": SyntheticsWarningType;
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
    message: {
      baseName: "message",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsWarningType",
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
    return SyntheticsStepDetailWarning.attributeTypeMap;
  }

  public constructor() {}
}
