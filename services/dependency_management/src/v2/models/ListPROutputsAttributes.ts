import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PROutput } from "./PROutput";

/**
 * Attributes of a PR outputs response.
 */
export class ListPROutputsAttributes {
  /**
   * The list of pull requests created by the workflow execution.
   */
  "prOutputs": Array<PROutput>;
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
    prOutputs: {
      baseName: "pr_outputs",
      type: "Array<PROutput>",
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
    return ListPROutputsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
