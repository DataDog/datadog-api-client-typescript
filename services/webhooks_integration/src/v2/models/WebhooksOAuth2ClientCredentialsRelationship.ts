import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsRelationshipData } from "./WebhooksOAuth2ClientCredentialsRelationshipData";

/**
 * Relationship pointing to the OAuth2 client credentials resource for this auth method.
 */
export class WebhooksOAuth2ClientCredentialsRelationship {
  /**
   * Relationship data referencing an OAuth2 client credentials resource.
   */
  "data"?: WebhooksOAuth2ClientCredentialsRelationshipData;
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
      type: "WebhooksOAuth2ClientCredentialsRelationshipData",
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
    return WebhooksOAuth2ClientCredentialsRelationship.attributeTypeMap;
  }

  public constructor() {}
}
