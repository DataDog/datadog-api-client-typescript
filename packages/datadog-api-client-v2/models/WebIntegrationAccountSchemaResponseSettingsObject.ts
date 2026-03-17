/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { WebIntegrationAccountSchemaResponseSettingsField } from "./WebIntegrationAccountSchemaResponseSettingsField";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON Schema definition for the settings object.
 * Contains integration-specific configuration fields such as account identifiers,
 * feature toggles, and non-sensitive configuration options.
 */
export class WebIntegrationAccountSchemaResponseSettingsObject {
  /**
   * Whether additional properties are allowed (typically false).
   */
  "additionalProperties"?: boolean;
  /**
   * The individual setting fields for this integration.
   * Field names and types vary by integration.
   */
  "properties"?: {
    [key: string]: WebIntegrationAccountSchemaResponseSettingsField;
  };
  /**
   * List of required setting field names.
   */
  "required"?: Array<string>;
  /**
   * Always "object" for the settings container.
   */
  "type"?: string;

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
    additionalProperties: {
      baseName: "additionalProperties",
      type: "boolean",
    },
    properties: {
      baseName: "properties",
      type: "{ [key: string]: WebIntegrationAccountSchemaResponseSettingsField; }",
    },
    required: {
      baseName: "required",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return WebIntegrationAccountSchemaResponseSettingsObject.attributeTypeMap;
  }

  public constructor() {}
}
