import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IdentityProviderAttributes } from "./IdentityProviderAttributes";
import { IdentityProviderType } from "./IdentityProviderType";

/**
 * Data object representing an organization identity provider.
 */
export class IdentityProviderData {
  /**
   * Attributes of an organization identity provider.
   */
  "attributes": IdentityProviderAttributes;
  /**
   * The unique identifier of the identity provider.
   */
  "id": string;
  /**
   * The resource type for identity providers.
   */
  "type": IdentityProviderType;
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
      type: "IdentityProviderAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "IdentityProviderType",
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
    return IdentityProviderData.attributeTypeMap;
  }

  public constructor() {}
}
