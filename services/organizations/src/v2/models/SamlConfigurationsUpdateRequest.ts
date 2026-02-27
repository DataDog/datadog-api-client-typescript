import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { SamlConfigurationsUpdateRequestData } from "./SamlConfigurationsUpdateRequestData";

/**
 * Request to update organization SAML preferences.
 */
export class SamlConfigurationsUpdateRequest {
  /**
   * Data wrapper for SAML preferences update.
   */
  "data": SamlConfigurationsUpdateRequestData;
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
      type: "SamlConfigurationsUpdateRequestData",
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
    return SamlConfigurationsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
