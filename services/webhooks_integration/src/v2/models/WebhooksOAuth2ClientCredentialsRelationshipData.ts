import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WebhooksOAuth2ClientCredentialsType } from "./WebhooksOAuth2ClientCredentialsType";

/**
 * Relationship data referencing an OAuth2 client credentials resource.
 */
export class WebhooksOAuth2ClientCredentialsRelationshipData {
  /**
   * The ID of the OAuth2 client credentials resource.
   */
  "id"?: string;
  /**
   * OAuth2 client credentials resource type.
   */
  "type"?: WebhooksOAuth2ClientCredentialsType;
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
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "WebhooksOAuth2ClientCredentialsType",
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
    return WebhooksOAuth2ClientCredentialsRelationshipData.attributeTypeMap;
  }

  public constructor() {}
}
