import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SAMLConfigurationUpdateData } from "./SAMLConfigurationUpdateData";

/**
 * Request to update a SAML configuration.
 */
export class SAMLConfigurationUpdateRequest {
  /**
   * Data for updating a SAML configuration.
   */
  "data": SAMLConfigurationUpdateData;
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
      type: "SAMLConfigurationUpdateData",
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
    return SAMLConfigurationUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
