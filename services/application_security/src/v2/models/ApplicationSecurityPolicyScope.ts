import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The scope of the WAF policy.
 */
export class ApplicationSecurityPolicyScope {
  /**
   * The environment scope for the WAF policy.
   */
  "env": string;
  /**
   * The service scope for the WAF policy.
   */
  "service": string;
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
    env: {
      baseName: "env",
      type: "string",
      required: true,
    },
    service: {
      baseName: "service",
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
    return ApplicationSecurityPolicyScope.attributeTypeMap;
  }

  public constructor() {}
}
