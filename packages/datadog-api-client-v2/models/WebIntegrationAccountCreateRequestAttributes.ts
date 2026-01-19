/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating a web integration account.
 */
export class WebIntegrationAccountCreateRequestAttributes {
  /**
   * The name of the account.
   */
  "name": string;
  /**
   * Sensitive credentials for the account. The structure and required fields vary by integration type.
   * These values are write-only and never returned in responses. Use the schema endpoint to determine
   * which secret fields are required for your specific integration.
   */
  "secrets": { [key: string]: any };
  /**
   * Integration-specific settings for the account. The structure and required fields vary by integration type.
   * Use the schema endpoint (GET /api/v2/web-integrations/{integration_name}/accounts/schema) to retrieve
   * the specific requirements for your integration before creating an account.
   */
  "settings": { [key: string]: any };

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
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    secrets: {
      baseName: "secrets",
      type: "{ [key: string]: any; }",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: any; }",
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
    return WebIntegrationAccountCreateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
