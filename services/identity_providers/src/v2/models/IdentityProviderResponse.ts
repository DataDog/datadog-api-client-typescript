import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IdentityProviderData } from "./IdentityProviderData";

/**
 * Response containing a single organization identity provider.
 */
export class IdentityProviderResponse {
  /**
   * Data object representing an organization identity provider.
   */
  "data": IdentityProviderData;
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
      type: "IdentityProviderData",
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
    return IdentityProviderResponse.attributeTypeMap;
  }

  public constructor() {}
}
