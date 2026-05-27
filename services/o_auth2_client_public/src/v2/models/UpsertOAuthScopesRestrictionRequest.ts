import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpsertOAuthScopesRestrictionData } from "./UpsertOAuthScopesRestrictionData";

/**
 * Request payload for creating or updating the scopes restriction of an OAuth2 client.
 */
export class UpsertOAuthScopesRestrictionRequest {
  /**
   * Data object of an upsert OAuth2 scopes restriction request.
   */
  "data": UpsertOAuthScopesRestrictionData;
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
    data: {
      baseName: "data",
      type: "UpsertOAuthScopesRestrictionData",
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
    return UpsertOAuthScopesRestrictionRequest.attributeTypeMap;
  }

  public constructor() {}
}
