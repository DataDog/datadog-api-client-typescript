import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthProviderDataResponse } from "./OIDCCloudAuthProviderDataResponse";

/**
 * Custom OIDC provider response.
 */
export class OIDCCloudAuthProviderResponse {
  /**
   * Custom OIDC provider resource.
   */
  "data": OIDCCloudAuthProviderDataResponse;
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
      type: "OIDCCloudAuthProviderDataResponse",
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
    return OIDCCloudAuthProviderResponse.attributeTypeMap;
  }

  public constructor() {}
}
