import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Deprecated: Override WAF ruleset parameters. Use `protectionPresets` instead.
 */
export class ApplicationSecurityPolicyRulesetOverride {
  /**
   * When blocking is enabled, the ruleset will block the traffic it matches.
   */
  "blocking": boolean;
  /**
   * When false, this ruleset will not match any traffic.
   */
  "enabled": boolean;
  /**
   * The identifier of the ruleset to override.
   */
  "id": string;
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
    blocking: {
      baseName: "blocking",
      type: "boolean",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
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
    return ApplicationSecurityPolicyRulesetOverride.attributeTypeMap;
  }

  public constructor() {}
}
