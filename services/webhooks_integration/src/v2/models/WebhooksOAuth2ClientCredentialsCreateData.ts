import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsCreateAttributes } from "./WebhooksOAuth2ClientCredentialsCreateAttributes";
import { WebhooksOAuth2ClientCredentialsType } from "./WebhooksOAuth2ClientCredentialsType";

/**
 * OAuth2 client credentials data for a create request.
 */
export class WebhooksOAuth2ClientCredentialsCreateData {
  /**
   * OAuth2 client credentials attributes for a create request.
   */
  "attributes": WebhooksOAuth2ClientCredentialsCreateAttributes;
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
      type: "WebhooksOAuth2ClientCredentialsCreateAttributes",
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
    return WebhooksOAuth2ClientCredentialsCreateData.attributeTypeMap;
  }

  public constructor() {}
}
