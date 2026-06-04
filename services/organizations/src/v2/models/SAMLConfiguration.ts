import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SAMLConfigurationAttributes } from "./SAMLConfigurationAttributes";
import { SAMLConfigurationRelationships } from "./SAMLConfigurationRelationships";
import { SAMLConfigurationsType } from "./SAMLConfigurationsType";

/**
 * A SAML configuration object.
 */
export class SAMLConfiguration {
  /**
   * Attributes of a SAML configuration.
   */
  "attributes"?: SAMLConfigurationAttributes;
  /**
   * The UUID of the SAML configuration.
   */
  "id": string;
  /**
   * Relationships of a SAML configuration.
   */
  "relationships"?: SAMLConfigurationRelationships;
  /**
   * SAML configurations resource type.
   */
  "type": SAMLConfigurationsType;
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
    attributes: {
      baseName: "attributes",
      type: "SAMLConfigurationAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "SAMLConfigurationRelationships",
    },
    type: {
      baseName: "type",
      type: "SAMLConfigurationsType",
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
    return SAMLConfiguration.attributeTypeMap;
  }

  public constructor() {}
}
