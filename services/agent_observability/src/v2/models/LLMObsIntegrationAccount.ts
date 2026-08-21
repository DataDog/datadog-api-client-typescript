import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsAzureOpenAIMetadata } from "./LLMObsAzureOpenAIMetadata";
import { LLMObsVertexAIMetadata } from "./LLMObsVertexAIMetadata";

/**
 * A configured account for an LLM provider integration.
 */
export class LLMObsIntegrationAccount {
  /**
   * Provider-specific account identifier.
   */
  "accountId": string;
  /**
   * Human-readable name for the integration account.
   */
  "accountName": string;
  /**
   * Provider region associated with the account, if applicable.
   */
  "accountRegion"?: string;
  /**
   * Azure OpenAI-specific metadata for an integration account or inference request.
   */
  "azureOpenaiMetadata"?: LLMObsAzureOpenAIMetadata;
  /**
   * Unique identifier for the integration account.
   */
  "id": string;
  /**
   * The name of the LLM provider integration.
   */
  "integration": string;
  /**
   * Vertex AI-specific metadata for an integration account or inference request.
   */
  "vertexAiMetadata"?: LLMObsVertexAIMetadata;
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
    accountId: {
      baseName: "account_id",
      type: "string",
      required: true,
    },
    accountName: {
      baseName: "account_name",
      type: "string",
      required: true,
    },
    accountRegion: {
      baseName: "account_region",
      type: "string",
    },
    azureOpenaiMetadata: {
      baseName: "azure_openai_metadata",
      type: "LLMObsAzureOpenAIMetadata",
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
    vertexAiMetadata: {
      baseName: "vertex_ai_metadata",
      type: "LLMObsVertexAIMetadata",
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
    return LLMObsIntegrationAccount.attributeTypeMap;
  }

  public constructor() {}
}
