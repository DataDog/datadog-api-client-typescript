import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UserAuthorizedClientAttributes } from "./UserAuthorizedClientAttributes";
import { UserAuthorizedClientRelationships } from "./UserAuthorizedClientRelationships";
import { UserAuthorizedClientType } from "./UserAuthorizedClientType";

/**
 * Data object representing a user authorized client.
 */
export class UserAuthorizedClientData {
  /**
   * Attributes of a user authorized client.
   */
  "attributes": UserAuthorizedClientAttributes;
  /**
   * The unique identifier of the user authorized client.
   */
  "id": string;
  /**
   * Relationships for a user authorized client.
   */
  "relationships": UserAuthorizedClientRelationships;
  /**
   * The resource type for user authorized clients.
   */
  "type": UserAuthorizedClientType;
  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };
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
      type: "UserAuthorizedClientAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UserAuthorizedClientRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UserAuthorizedClientType",
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
    return UserAuthorizedClientData.attributeTypeMap;
  }

  public constructor() {}
}
