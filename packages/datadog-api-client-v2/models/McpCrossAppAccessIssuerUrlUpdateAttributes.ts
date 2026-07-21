/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for the MCP Cross-App Access issuer URL update request.
 */
export class McpCrossAppAccessIssuerUrlUpdateAttributes {
  /**
   * The Okta OIDC issuer URL for MCP Cross-App Access, for example
   * `https://your-subdomain.okta.com`. Provide an empty string to unset
   * the issuer URL and opt the organization out of MCP Cross-App Access.
   */
  "issuerUrl": string;

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
    issuerUrl: {
      baseName: "issuer_url",
      type: "string",
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
    return McpCrossAppAccessIssuerUrlUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
