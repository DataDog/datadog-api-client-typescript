import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A step of the investigation.
 */
export class SecurityAgentInvestigationStep {
  /**
   * Name of the step, usually the question it answers.
   */
  "name": string;
  /**
   * Summary of what the step found. It can be empty.
   */
  "summary": string;
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
    summary: {
      baseName: "summary",
      type: "string",
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
    return SecurityAgentInvestigationStep.attributeTypeMap;
  }

  public constructor() {}
}
