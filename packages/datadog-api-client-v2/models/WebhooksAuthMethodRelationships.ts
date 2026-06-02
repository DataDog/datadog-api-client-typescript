/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebhooksOAuth2ClientCredentialsRelationship } from "./WebhooksOAuth2ClientCredentialsRelationship";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
