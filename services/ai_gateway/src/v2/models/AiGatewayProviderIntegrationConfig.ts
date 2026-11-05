import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AiGatewayCustomProviderSupportedOperation } from "./AiGatewayCustomProviderSupportedOperation";

/**
 * Provider-specific integration configuration.
 */
export class AiGatewayProviderIntegrationConfig {
  /**
   * AWS region used for Bedrock model discovery, routing, and request signing.
   */
  "bedrockRegion"?: string;
  /**
   * Azure AI Foundry project name, used to call the project's agents.
   */
  "foundryProject"?: string;
  /**
   * ARM resource ID of the Azure AI Foundry resource, such as `/subscriptions/<id>/resourceGroups/<group>/providers/Microsoft.CognitiveServices/accounts/<name>`. Required for `azure_foundry` providers.
   */
  "foundryResourceId"?: string;
  /**
   * GCP location used for Gemini model discovery and credential resolution.
   */
  "location"?: string;
  /**
   * GCP project ID used for Gemini model discovery and credential resolution.
   */
  "projectId"?: string;
  /**
   * Custom provider default for discovered and new manual models. Omit to use Chat Completions. An empty list is invalid.
   */
  "supportedOperations"?: Array<AiGatewayCustomProviderSupportedOperation>;
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
    bedrockRegion: {
      baseName: "bedrock_region",
      type: "string",
    },
    foundryProject: {
      baseName: "foundry_project",
      type: "string",
    },
    foundryResourceId: {
      baseName: "foundry_resource_id",
      type: "string",
    },
    location: {
      baseName: "location",
      type: "string",
    },
    projectId: {
      baseName: "project_id",
      type: "string",
    },
    supportedOperations: {
      baseName: "supported_operations",
      type: "Array<AiGatewayCustomProviderSupportedOperation>",
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
    return AiGatewayProviderIntegrationConfig.attributeTypeMap;
  }

  public constructor() {}
}
