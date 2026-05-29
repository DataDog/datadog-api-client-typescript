import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ServiceAccessTokensType } from "./ServiceAccessTokensType";
import { ServiceAccountAccessTokenUpdateAttributes } from "./ServiceAccountAccessTokenUpdateAttributes";

/**
 * Object used to update a service account access token.
 */
export class ServiceAccountAccessTokenUpdateData {
  /**
   * Attributes used to update a service account access token.
   */
  "attributes": ServiceAccountAccessTokenUpdateAttributes;
  /**
   * ID of the access token.
   */
  "id": string;
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
      type: "ServiceAccountAccessTokenUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
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
    return ServiceAccountAccessTokenUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
