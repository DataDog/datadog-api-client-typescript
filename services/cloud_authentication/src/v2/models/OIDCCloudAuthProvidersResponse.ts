import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthProviderDataResponse } from "./OIDCCloudAuthProviderDataResponse";

/**
 * List of Custom OIDC provider resources.
 */
export class OIDCCloudAuthProvidersResponse {
  /**
   * Configured resources.
   */
  "data": Array<OIDCCloudAuthProviderDataResponse>;
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
      type: "Array<OIDCCloudAuthProviderDataResponse>",
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
    return OIDCCloudAuthProvidersResponse.attributeTypeMap;
  }

  public constructor() {}
}
