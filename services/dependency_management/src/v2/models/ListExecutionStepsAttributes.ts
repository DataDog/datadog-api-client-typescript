import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExecutionStep } from "./ExecutionStep";

/**
 * Attributes of an execution steps response.
 */
export class ListExecutionStepsAttributes {
  /**
   * The list of steps for the workflow execution.
   */
  "steps": Array<ExecutionStep>;
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
    steps: {
      baseName: "steps",
      type: "Array<ExecutionStep>",
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
    return ListExecutionStepsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
