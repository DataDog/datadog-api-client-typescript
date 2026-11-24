import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SecurityAgentOutreachRuleUpdate } from "./SecurityAgentOutreachRuleUpdate";

/**
 * Attributes of an outreach policy rules update request.
 */
export class SecurityAgentOutreachRulesUpdateAttributes {
  /**
   * The rules to upsert, at least one.
   */
  "rules": Array<SecurityAgentOutreachRuleUpdate>;
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
    rules: {
      baseName: "rules",
      type: "Array<SecurityAgentOutreachRuleUpdate>",
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
    return SecurityAgentOutreachRulesUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
