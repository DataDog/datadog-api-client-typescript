import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A step to remediate the issue.
 */
export class AgentHealthRemediationStep {
  /**
   * The order in which to perform the step.
   */
  "order"?: number;
  /**
   * The instructions for the step.
   */
  "text"?: string;
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
    order: {
      baseName: "order",
      type: "number",
      format: "int64",
    },
    text: {
      baseName: "text",
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
    return AgentHealthRemediationStep.attributeTypeMap;
  }

  public constructor() {}
}
