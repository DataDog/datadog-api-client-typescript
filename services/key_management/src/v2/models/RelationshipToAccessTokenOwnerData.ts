import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AccessTokenOwnerType } from "./AccessTokenOwnerType";

/**
 * Relationship to the access token's owner.
 */
export class RelationshipToAccessTokenOwnerData {
  /**
   * A unique identifier that represents the owner.
   */
  "id": string;
  /**
   * Owner resource type. Either a user or a service account.
   */
  "type": AccessTokenOwnerType;
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
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "AccessTokenOwnerType",
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
    return RelationshipToAccessTokenOwnerData.attributeTypeMap;
  }

  public constructor() {}
}
