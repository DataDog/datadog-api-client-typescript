import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Kill system call applied on the container matching the rule
 */
export class CloudWorkloadSecurityAgentRuleKill {
  /**
   * Supported signals for the kill system call
   */
  "signal"?: string;
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
    signal: {
      baseName: "signal",
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
    return CloudWorkloadSecurityAgentRuleKill.attributeTypeMap;
  }

  public constructor() {}
}
