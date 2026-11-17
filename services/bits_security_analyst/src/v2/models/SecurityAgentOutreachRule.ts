import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The outreach automation state of one detection rule.
 */
export class SecurityAgentOutreachRule {
  /**
   * Whether the rule auto-sends automated interviews in `automated` mode.
   */
  "isEnabled": boolean;
  /**
   * ID of the detection rule.
   */
  "ruleId": string;
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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      required: true,
    },
    ruleId: {
      baseName: "rule_id",
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
    return SecurityAgentOutreachRule.attributeTypeMap;
  }

  public constructor() {}
}
