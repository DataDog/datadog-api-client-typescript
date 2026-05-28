import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FullPersonalAccessTokenAttributes } from "./FullPersonalAccessTokenAttributes";
import { PersonalAccessTokenRelationships } from "./PersonalAccessTokenRelationships";
import { PersonalAccessTokensType } from "./PersonalAccessTokensType";

/**
 * Datadog access token, including the token key.
 */
export class FullPersonalAccessToken {
  /**
   * Attributes of a full access token, including the token key.
   */
  "attributes"?: FullPersonalAccessTokenAttributes;
  /**
   * ID of the access token.
   */
  "id"?: string;
  /**
   * Resources related to the access token.
   */
  "relationships"?: PersonalAccessTokenRelationships;
  /**
   * Personal access tokens resource type.
   */
  "type"?: PersonalAccessTokensType;
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
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "PersonalAccessTokenRelationships",
    },
    type: {
      baseName: "type",
      type: "PersonalAccessTokensType",
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
