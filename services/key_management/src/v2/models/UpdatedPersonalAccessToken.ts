import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokenAttributes } from "./PersonalAccessTokenAttributes";
import { PersonalAccessTokensType } from "./PersonalAccessTokensType";
import { UpdatedPersonalAccessTokenRelationships } from "./UpdatedPersonalAccessTokenRelationships";

/**
 * Datadog access token returned by the update endpoint.
 */
export class UpdatedPersonalAccessToken {
  /**
   * Attributes of an access token.
   */
  "attributes"?: PersonalAccessTokenAttributes;
  /**
   * ID of the access token.
   */
  "id": string;
  /**
   * Resources related to the access token.
   */
  "relationships"?: UpdatedPersonalAccessTokenRelationships;
  /**
   * Personal access tokens resource type.
   */
  "type": PersonalAccessTokensType;
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
      type: "PersonalAccessTokenAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UpdatedPersonalAccessTokenRelationships",
    },
    type: {
      baseName: "type",
      type: "PersonalAccessTokensType",
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
    return UpdatedPersonalAccessToken.attributeTypeMap;
  }

  public constructor() {}
}
