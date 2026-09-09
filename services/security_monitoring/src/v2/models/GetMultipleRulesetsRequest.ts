import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { GetMultipleRulesetsRequestData } from "./GetMultipleRulesetsRequestData";

/**
 * The request payload for retrieving rules for multiple rulesets in a single batch call.
 */
export class GetMultipleRulesetsRequest {
  /**
   * CSRF token for security, sent by browser-based clients. Ignored by the API when absent.
   */
  "authenticationToken"?: string;
  /**
   * The primary data object in the get-multiple-rulesets request, containing request attributes and resource type.
   */
  "data"?: GetMultipleRulesetsRequestData;
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
    authenticationToken: {
      baseName: "_authentication_token",
      type: "string",
    },
    data: {
      baseName: "data",
      type: "GetMultipleRulesetsRequestData",
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
    return GetMultipleRulesetsRequest.attributeTypeMap;
  }

  public constructor() {}
}
