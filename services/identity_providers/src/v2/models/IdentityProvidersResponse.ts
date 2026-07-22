import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IdentityProviderData } from "./IdentityProviderData";

/**
 * Response containing a list of identity providers for an organization.
 */
export class IdentityProvidersResponse {
  /**
   * List of organization identity provider data objects.
   */
  "data": Array<IdentityProviderData>;
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
      type: "Array<IdentityProviderData>",
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
    return IdentityProvidersResponse.attributeTypeMap;
  }

  public constructor() {}
}
