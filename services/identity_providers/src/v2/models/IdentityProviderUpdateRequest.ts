import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IdentityProviderUpdateData } from "./IdentityProviderUpdateData";

/**
 * Request body for updating an organization identity provider.
 */
export class IdentityProviderUpdateRequest {
  /**
   * Data object for updating an organization identity provider.
   */
  "data": IdentityProviderUpdateData;
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
      type: "IdentityProviderUpdateData",
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
    return IdentityProviderUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
