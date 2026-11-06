import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthPersonaMappingDataResponse } from "./OIDCCloudAuthPersonaMappingDataResponse";

/**
 * Custom OIDC persona mapping response.
 */
export class OIDCCloudAuthPersonaMappingResponse {
  /**
   * Custom OIDC persona mapping resource.
   */
  "data": OIDCCloudAuthPersonaMappingDataResponse;
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
      type: "OIDCCloudAuthPersonaMappingDataResponse",
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
    return OIDCCloudAuthPersonaMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
