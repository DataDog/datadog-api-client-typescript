import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FullPersonalAccessTokenAttributes } from "./FullPersonalAccessTokenAttributes";
import { PersonalAccessTokenRelationships } from "./PersonalAccessTokenRelationships";
import { PersonalAccessTokenType } from "./PersonalAccessTokenType";

/**
 * Personal access token object with the secret key value. This is only
 * returned when creating a new token.
 */
export class FullPersonalAccessToken {
  /**
   * Attributes of a personal access token including the secret key value.
   * This is only returned when creating a new token.
   */
  "attributes": FullPersonalAccessTokenAttributes;
  /**
   * UUID of the personal access token.
   */
  "id": string;
  /**
   * Resources related to the personal access token.
   */
  "relationships": PersonalAccessTokenRelationships;
  /**
   * Personal access tokens resource type.
   */
  "type": PersonalAccessTokenType;
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
      type: "FullPersonalAccessTokenAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    relationships: {
      baseName: "relationships",
      type: "PersonalAccessTokenRelationships",
      required: true,
    },
    type: {
      baseName: "type",
      type: "PersonalAccessTokenType",
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
    return FullPersonalAccessToken.attributeTypeMap;
  }

  public constructor() {}
}
