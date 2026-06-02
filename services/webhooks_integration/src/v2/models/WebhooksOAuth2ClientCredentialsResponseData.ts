import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsResponseAttributes } from "./WebhooksOAuth2ClientCredentialsResponseAttributes";
import { WebhooksOAuth2ClientCredentialsType } from "./WebhooksOAuth2ClientCredentialsType";

/**
 * OAuth2 client credentials data from a response.
 */
export class WebhooksOAuth2ClientCredentialsResponseData {
  /**
   * OAuth2 client credentials attributes returned by the API. The `client_secret` is never echoed.
   */
  "attributes": WebhooksOAuth2ClientCredentialsResponseAttributes;
  /**
   * The ID of the OAuth2 client credentials auth method.
   */
  "id": string;
  /**
   * OAuth2 client credentials resource type.
   */
  "type": WebhooksOAuth2ClientCredentialsType;
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
      type: "WebhooksOAuth2ClientCredentialsResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "WebhooksOAuth2ClientCredentialsType",
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
    return WebhooksOAuth2ClientCredentialsResponseData.attributeTypeMap;
  }

  public constructor() {}
}
