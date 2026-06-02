import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsCreateData } from "./WebhooksOAuth2ClientCredentialsCreateData";

/**
 * Create request for an OAuth2 client credentials auth method.
 */
export class WebhooksOAuth2ClientCredentialsCreateRequest {
  /**
   * OAuth2 client credentials data for a create request.
   */
  "data": WebhooksOAuth2ClientCredentialsCreateData;
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
      type: "WebhooksOAuth2ClientCredentialsCreateData",
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
    return WebhooksOAuth2ClientCredentialsCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
