import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OIDCCloudAuthProviderCreateAttributes } from "./OIDCCloudAuthProviderCreateAttributes";
import { OIDCCloudAuthProviderType } from "./OIDCCloudAuthProviderType";

/**
 * Custom OIDC provider creation data.
 */
export class OIDCCloudAuthProviderCreateData {
  /**
   * Attributes for creating a Custom OIDC provider.
   */
  "attributes": OIDCCloudAuthProviderCreateAttributes;
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
      type: "OIDCCloudAuthProviderCreateAttributes",
      required: true,
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
    return OIDCCloudAuthProviderCreateData.attributeTypeMap;
  }

  public constructor() {}
}
