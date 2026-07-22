import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { Role } from "./Role";
import { SAMLConfiguration } from "./SAMLConfiguration";

/**
 * Response containing a list of SAML configurations.
 */
export class SAMLConfigurationsResponse {
  /**
   * Array of SAML configurations. An organization has at most one SAML configuration.
   */
  "data"?: Array<SAMLConfiguration>;
  /**
   * Resources related to the SAML configurations, such as the default roles.
   */
  "included"?: Array<Role>;
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
    data: {
      baseName: "data",
      type: "Array<SAMLConfiguration>",
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
    return SAMLConfigurationsResponse.attributeTypeMap;
  }

  public constructor() {}
}
