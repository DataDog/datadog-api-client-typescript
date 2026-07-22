import { AttributeTypeMap } from "@datadog/datadog-api-client";


/**
 * Attributes for updating a SAML configuration.
 */
export class SAMLConfigurationUpdateAttributes {
  /**
   * Whether identity-provider-initiated login is enabled for the organization.
   */
  "idpInitiated"?: boolean;
  /**
   * Email domains for which users are automatically provisioned on first SAML login
   * (just-in-time provisioning). A default role is required to enable just-in-time provisioning.
   */
  "jitDomains"?: Array<string>;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    idpInitiated: {
      baseName: "idp_initiated",
      type: "boolean",
    },
    jitDomains: {
      baseName: "jit_domains",
      type: "Array<string>",
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
    return SAMLConfigurationUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
