import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsUpdateData } from "./WebhooksOAuth2ClientCredentialsUpdateData";

/**
 * Update request for an OAuth2 client credentials auth method.
 */
export class WebhooksOAuth2ClientCredentialsUpdateRequest {
  /**
   * OAuth2 client credentials data for an update request.
   */
  "data": WebhooksOAuth2ClientCredentialsUpdateData;
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
      type: "WebhooksOAuth2ClientCredentialsUpdateData",
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
    return WebhooksOAuth2ClientCredentialsUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}
