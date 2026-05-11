/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes object for creating a web integration account.
 */
export class WebIntegrationAccountCreateRequestAttributes {
  /**
   * A human-readable name for the account. Must be unique among accounts of the same integration.
   */
  "name": string;
  /**
   * Integration-specific secrets. The shape of this object varies by integration. Secrets
   * are write-only and never returned by the API.
   */
  "secrets": { [key: string]: any };
  /**
   * Integration-specific settings. The shape of this object varies by integration.
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
