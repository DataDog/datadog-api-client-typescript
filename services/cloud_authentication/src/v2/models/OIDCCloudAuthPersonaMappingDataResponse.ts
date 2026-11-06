import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthPersonaMappingAttributesResponse } from "./OIDCCloudAuthPersonaMappingAttributesResponse";
import { OIDCCloudAuthPersonaMappingType } from "./OIDCCloudAuthPersonaMappingType";

/**
 * Custom OIDC persona mapping resource.
 */
export class OIDCCloudAuthPersonaMappingDataResponse {
  /**
   * Stored Custom OIDC persona mapping attributes.
   */
  "attributes": OIDCCloudAuthPersonaMappingAttributesResponse;
  /**
   * Unique resource identifier.
   */
  "id": string;
  /**
   * Resource type returned by the existing Custom OIDC persona mapping API.
   */
  "type": OIDCCloudAuthPersonaMappingType;
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
      type: "OIDCCloudAuthPersonaMappingAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "OIDCCloudAuthPersonaMappingType",
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
    return OIDCCloudAuthPersonaMappingDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
