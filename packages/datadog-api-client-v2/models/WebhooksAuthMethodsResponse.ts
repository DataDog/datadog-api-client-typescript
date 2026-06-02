/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebhooksAuthMethodResponseData } from "./WebhooksAuthMethodResponseData";
import { WebhooksOAuth2ClientCredentialsResponseData } from "./WebhooksOAuth2ClientCredentialsResponseData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing a list of webhooks auth methods.
 */
export class WebhooksAuthMethodsResponse {
  /**
   * An array of webhooks auth methods.
   */
  "data": Array<WebhooksAuthMethodResponseData>;
  /**
   * Resources related to the auth methods, included when requested via the `include` query parameter.
   */
  "included"?: Array<WebhooksOAuth2ClientCredentialsResponseData>;

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
      type: "Array<WebhooksAuthMethodResponseData>",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<WebhooksOAuth2ClientCredentialsResponseData>",
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
    return WebhooksAuthMethodsResponse.attributeTypeMap;
  }

  public constructor() {}
}
