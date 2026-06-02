/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebhooksOAuth2ClientCredentialsType } from "./WebhooksOAuth2ClientCredentialsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
