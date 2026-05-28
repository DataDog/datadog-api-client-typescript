import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccessTokensType } from "./ServiceAccessTokensType";
import { ServiceAccountAccessTokenCreateAttributes } from "./ServiceAccountAccessTokenCreateAttributes";

/**
 * Object used to create a service account access token.
 */
export class ServiceAccountAccessTokenCreateData {
  /**
   * Attributes used to create a service account access token.
   */
  "attributes": ServiceAccountAccessTokenCreateAttributes;
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
      type: "ServiceAccountAccessTokenCreateAttributes",
      required: true,
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
    return ServiceAccountAccessTokenCreateData.attributeTypeMap;
  }

  public constructor() {}
}
