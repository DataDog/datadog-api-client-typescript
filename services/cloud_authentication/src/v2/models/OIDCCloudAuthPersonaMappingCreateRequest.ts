import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthPersonaMappingCreateData } from "./OIDCCloudAuthPersonaMappingCreateData";

/**
 * Request to create a Custom OIDC persona mapping.
 */
export class OIDCCloudAuthPersonaMappingCreateRequest {
  /**
   * Custom OIDC persona mapping creation data.
   */
  "data": OIDCCloudAuthPersonaMappingCreateData;
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
      type: "OIDCCloudAuthPersonaMappingCreateData",
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
    return OIDCCloudAuthPersonaMappingCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
