import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthProviderAttributesResponse } from "./OIDCCloudAuthProviderAttributesResponse";
import { OIDCCloudAuthProviderType } from "./OIDCCloudAuthProviderType";

/**
 * Custom OIDC provider resource.
 */
export class OIDCCloudAuthProviderDataResponse {
  /**
   * Stored Custom OIDC provider attributes.
   */
  "attributes": OIDCCloudAuthProviderAttributesResponse;
  /**
   * Unique resource identifier.
   */
  "id": string;
  /**
   * Resource type.
   */
  "type": OIDCCloudAuthProviderType;
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
      type: "OIDCCloudAuthProviderAttributesResponse",
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
      type: "OIDCCloudAuthProviderType",
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
    return OIDCCloudAuthProviderDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
