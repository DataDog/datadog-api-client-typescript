import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The log action applied when the rule is triggered.
 */
export class CloudWorkloadSecurityAgentRuleActionLog {
  /**
   * The level of the log action.
   */
  "level"?: string;
  /**
   * The message of the log action.
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
    level: {
      baseName: "level",
      type: "string",
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
    return CloudWorkloadSecurityAgentRuleActionLog.attributeTypeMap;
  }

  public constructor() {}
}
