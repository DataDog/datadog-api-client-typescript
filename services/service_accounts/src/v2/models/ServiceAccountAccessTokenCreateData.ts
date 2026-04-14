import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PersonalAccessTokensType } from "./PersonalAccessTokensType";
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
      type: "ServiceAccountAccessTokenCreateAttributes",
      required: true,
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
    return ServiceAccountAccessTokenCreateData.attributeTypeMap;
  }

  public constructor() {}
}
