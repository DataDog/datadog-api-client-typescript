import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsResponseData } from "./WebhooksOAuth2ClientCredentialsResponseData";

/**
 * Response containing an OAuth2 client credentials auth method.
 */
export class WebhooksOAuth2ClientCredentialsResponse {
  /**
   * OAuth2 client credentials data from a response.
   */
  "data": WebhooksOAuth2ClientCredentialsResponseData;
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
      type: "WebhooksOAuth2ClientCredentialsResponseData",
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
    return WebhooksOAuth2ClientCredentialsResponse.attributeTypeMap;
  }

  public constructor() {}
}
