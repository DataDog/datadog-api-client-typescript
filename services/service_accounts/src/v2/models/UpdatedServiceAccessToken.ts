import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccessTokenAttributes } from "./ServiceAccessTokenAttributes";
import { ServiceAccessTokensType } from "./ServiceAccessTokensType";
import { UpdatedServiceAccessTokenRelationships } from "./UpdatedServiceAccessTokenRelationships";

/**
 * Datadog access token returned by the update endpoint.
 */
export class UpdatedServiceAccessToken {
  /**
   * Attributes of an access token.
   */
  "attributes"?: ServiceAccessTokenAttributes;
  /**
   * ID of the access token.
   */
  "id": string;
  /**
   * Resources related to the access token.
   */
  "relationships"?: UpdatedServiceAccessTokenRelationships;
  /**
   * Service access tokens resource type.
   */
  "type": ServiceAccessTokensType;
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
      type: "ServiceAccessTokenAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UpdatedServiceAccessTokenRelationships",
    },
    type: {
      baseName: "type",
      type: "ServiceAccessTokensType",
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
    return UpdatedServiceAccessToken.attributeTypeMap;
  }

  public constructor() {}
}
