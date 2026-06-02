import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsRelationship } from "./WebhooksOAuth2ClientCredentialsRelationship";

/**
 * Relationships of a webhooks auth method to its protocol-specific resource.
 */
export class WebhooksAuthMethodRelationships {
  /**
   * Relationship pointing to the OAuth2 client credentials resource for this auth method.
   */
  "oauth2ClientCredentials"?: WebhooksOAuth2ClientCredentialsRelationship;
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
    oauth2ClientCredentials: {
      baseName: "oauth2-client-credentials",
      type: "WebhooksOAuth2ClientCredentialsRelationship",
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
    return WebhooksAuthMethodRelationships.attributeTypeMap;
  }

  public constructor() {}
}
