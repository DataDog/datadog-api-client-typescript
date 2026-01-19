/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for updating a web integration account. All fields are optional -
 * only provide the fields you want to update. Partial updates are supported,
 * allowing you to modify specific settings or secrets without providing all fields.
 */
export class WebIntegrationAccountUpdateRequestAttributes {
  /**
   * The name of the account.
   */
  "name"?: string;
  /**
   * Sensitive credentials to update. Only the secrets provided will be updated.
   * These values are write-only and never returned in responses.
   */
  "secrets"?: { [key: string]: any };
  /**
   * Integration-specific settings to update. Only the fields provided will be updated.
   * The structure varies by integration type. Refer to the integration's schema for available fields.
   */
  "settings"?: { [key: string]: any };

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
    },
    secrets: {
      baseName: "secrets",
      type: "{ [key: string]: any; }",
    },
    settings: {
      baseName: "settings",
      type: "{ [key: string]: any; }",
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
    return WebIntegrationAccountUpdateRequestAttributes.attributeTypeMap;
  }

  public constructor() {}
}
