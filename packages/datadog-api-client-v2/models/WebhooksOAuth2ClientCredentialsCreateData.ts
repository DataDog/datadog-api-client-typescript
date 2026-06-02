/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebhooksOAuth2ClientCredentialsCreateAttributes } from "./WebhooksOAuth2ClientCredentialsCreateAttributes";
import { WebhooksOAuth2ClientCredentialsType } from "./WebhooksOAuth2ClientCredentialsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
