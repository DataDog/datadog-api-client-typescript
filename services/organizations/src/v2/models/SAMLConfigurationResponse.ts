import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Role } from "./Role";
import { SAMLConfiguration } from "./SAMLConfiguration";

/**
 * Response containing a single SAML configuration.
 */
export class SAMLConfigurationResponse {
  /**
   * A SAML configuration object.
   */
  "data": SAMLConfiguration;
  /**
   * Resources related to the SAML configuration, such as the default roles.
   */
  "included"?: Array<Role>;
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
    data: {
      baseName: "data",
      type: "SAMLConfiguration",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<Role>",
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
    return SAMLConfigurationResponse.attributeTypeMap;
  }

  public constructor() {}
}
