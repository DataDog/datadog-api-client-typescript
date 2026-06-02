/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebhooksOAuth2ClientCredentialsType } from "./WebhooksOAuth2ClientCredentialsType";
import { WebhooksOAuth2ClientCredentialsUpdateAttributes } from "./WebhooksOAuth2ClientCredentialsUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * OAuth2 client credentials data for an update request.
 */
export class WebhooksOAuth2ClientCredentialsUpdateData {
  /**
   * OAuth2 client credentials attributes for an update request.
   */
  "attributes": WebhooksOAuth2ClientCredentialsUpdateAttributes;
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
      type: "WebhooksOAuth2ClientCredentialsUpdateAttributes",
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
    return WebhooksOAuth2ClientCredentialsUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
