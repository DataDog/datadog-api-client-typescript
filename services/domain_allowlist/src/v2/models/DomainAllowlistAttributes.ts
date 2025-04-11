import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * The details of the email domain allowlist.
 */
export class DomainAllowlistAttributes {
  /**
   * The list of domains in the email domain allowlist.
   */
  "domains"?: Array<string>;
  /**
   * Whether the email domain allowlist is enabled for the org.
   */
  "enabled"?: boolean;
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
    domains: {
      baseName: "domains",
      type: "Array<string>",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
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
    return DomainAllowlistAttributes.attributeTypeMap;
  }

  public constructor() {}
}
