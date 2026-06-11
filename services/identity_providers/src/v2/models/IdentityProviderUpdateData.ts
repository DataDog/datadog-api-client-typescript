import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IdentityProviderType } from "./IdentityProviderType";
import { IdentityProviderUpdateAttributes } from "./IdentityProviderUpdateAttributes";

/**
 * Data object for updating an organization identity provider.
 */
export class IdentityProviderUpdateData {
  /**
   * Attributes for updating an organization identity provider.
   */
  "attributes": IdentityProviderUpdateAttributes;
  /**
   * The unique identifier of the identity provider to update.
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
      type: "IdentityProviderUpdateAttributes",
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
    return IdentityProviderUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
