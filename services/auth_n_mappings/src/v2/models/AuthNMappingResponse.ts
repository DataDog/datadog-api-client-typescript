import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuthNMapping } from "./AuthNMapping";
import { AuthNMappingIncluded } from "./AuthNMappingIncluded";

/**
 * AuthN Mapping response from the API.
 */
export class AuthNMappingResponse {
  /**
   * The AuthN Mapping object returned by API.
   */
  "data"?: AuthNMapping;
  /**
   * Included data in the AuthN Mapping response.
   */
  "included"?: Array<AuthNMappingIncluded>;
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
      type: "AuthNMapping",
    },
    included: {
      baseName: "included",
      type: "Array<AuthNMappingIncluded>",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AuthNMappingResponse.attributeTypeMap;
  }

  public constructor() {}
}
