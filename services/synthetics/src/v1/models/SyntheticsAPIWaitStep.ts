import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SyntheticsAPIWaitStepSubtype } from "./SyntheticsAPIWaitStepSubtype";

/**
 * The Wait step used in a Synthetic multi-step API test.
 */
export class SyntheticsAPIWaitStep {
  /**
   * The name of the step.
   */
  "name": string;
  /**
   * The subtype of the Synthetic multi-step API wait step.
   */
  "subtype": SyntheticsAPIWaitStepSubtype;
  /**
   * The time to wait in seconds. Minimum value: 0. Maximum value: 180.
   */
  "value": number;
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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    subtype: {
      baseName: "subtype",
      type: "SyntheticsAPIWaitStepSubtype",
      required: true,
    },
    value: {
      baseName: "value",
      type: "number",
      required: true,
      format: "int32",
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
    return SyntheticsAPIWaitStep.attributeTypeMap;
  }

  public constructor() {}
}
