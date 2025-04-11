import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AuthNMapping } from "./AuthNMapping";
import { AuthNMappingIncluded } from "./AuthNMappingIncluded";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";

/**
 * Array of AuthN Mappings response.
 */
export class AuthNMappingsResponse {
  /**
   * Array of returned AuthN Mappings.
   */
  "data"?: Array<AuthNMapping>;
  /**
   * Included data in the AuthN Mapping response.
   */
  "included"?: Array<AuthNMappingIncluded>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;
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
      type: "Array<AuthNMapping>",
    },
    included: {
      baseName: "included",
      type: "Array<AuthNMappingIncluded>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
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
    return AuthNMappingsResponse.attributeTypeMap;
  }

  public constructor() {}
}
