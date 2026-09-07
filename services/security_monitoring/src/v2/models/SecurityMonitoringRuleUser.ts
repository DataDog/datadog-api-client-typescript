import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The user who created or last updated the rule.
 */
export class SecurityMonitoringRuleUser {
  /**
   * The user handle. Empty for a default rule with no user.
   */
  "handle"?: string;
  /**
   * The user name. Empty for a default rule with no user.
   */
  "name"?: string;
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
    handle: {
      baseName: "handle",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return SecurityMonitoringRuleUser.attributeTypeMap;
  }

  public constructor() {}
}
