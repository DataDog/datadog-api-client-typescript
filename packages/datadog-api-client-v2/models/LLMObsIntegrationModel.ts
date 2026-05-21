/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A model available for a given LLM provider integration and account.
 */
export class LLMObsIntegrationModel {
  /**
   * Whether the account has access to this model.
   */
  "hasAccess": boolean;
  /**
   * Unique identifier for the model entry.
   */
  "id": string;
  /**
   * The name of the LLM provider integration.
   */
  "integration": string;
  /**
   * Human-readable name of the LLM provider integration.
   */
  "integrationDisplayName": string;
  /**
   * Whether the model supports structured output via JSON schema.
   */
  "jsonSchema": boolean;
  /**
   * Human-readable model name.
   */
  "modelDisplayName": string;
  /**
   * Provider-specific model identifier used in inference calls.
   */
  "modelId": string;
  /**
   * The underlying model provider.
   */
  "provider": string;
  /**
   * Human-readable name of the underlying model provider.
   */
  "providerDisplayName": string;
  /**
   * Map of region-specific model ID prefix overrides.
   */
  "regionPrefixOverrides"?: { [key: string]: string };

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
    hasAccess: {
      baseName: "has_access",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    integration: {
      baseName: "integration",
      type: "string",
      required: true,
    },
    integrationDisplayName: {
      baseName: "integration_display_name",
      type: "string",
      required: true,
    },
    jsonSchema: {
      baseName: "json_schema",
      type: "boolean",
      required: true,
    },
    modelDisplayName: {
      baseName: "model_display_name",
      type: "string",
      required: true,
    },
    modelId: {
      baseName: "model_id",
      type: "string",
      required: true,
    },
    provider: {
      baseName: "provider",
      type: "string",
      required: true,
    },
    providerDisplayName: {
      baseName: "provider_display_name",
      type: "string",
      required: true,
    },
    regionPrefixOverrides: {
      baseName: "region_prefix_overrides",
      type: "{ [key: string]: string; }",
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
    return LLMObsIntegrationModel.attributeTypeMap;
  }

  public constructor() {}
}
