import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OrgSAMLPreferencesAttributes } from "./OrgSAMLPreferencesAttributes";
import { OrgSAMLPreferencesType } from "./OrgSAMLPreferencesType";

/**
 * Data for updating an organization's SAML preferences.
 */
export class OrgSAMLPreferencesData {
  /**
   * Attributes for updating an organization's SAML preferences.
   */
  "attributes": OrgSAMLPreferencesAttributes;
  /**
   * The identifier of the SAML preferences resource.
   */
  "id"?: string;
  /**
   * SAML preferences resource type.
   */
  "type": OrgSAMLPreferencesType;
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
      type: "OrgSAMLPreferencesAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "OrgSAMLPreferencesType",
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
    return OrgSAMLPreferencesData.attributeTypeMap;
  }

  public constructor() {}
}
