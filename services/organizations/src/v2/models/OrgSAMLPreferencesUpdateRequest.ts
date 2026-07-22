import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgSAMLPreferencesData } from "./OrgSAMLPreferencesData";

/**
 * Request to update an organization's SAML preferences.
 */
export class OrgSAMLPreferencesUpdateRequest {
  /**
   * Data for updating an organization's SAML preferences.
   */
  "data": OrgSAMLPreferencesData;
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
      type: "OrgSAMLPreferencesData",
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
    return OrgSAMLPreferencesUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
