/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCustomEvalConfigBedrockOptions } from "./LLMObsCustomEvalConfigBedrockOptions";
import { LLMObsCustomEvalConfigIntegrationProvider } from "./LLMObsCustomEvalConfigIntegrationProvider";
import { LLMObsCustomEvalConfigVertexAIOptions } from "./LLMObsCustomEvalConfigVertexAIOptions";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * LLM provider configuration for a custom evaluator.
 */
export class LLMObsCustomEvalConfigLLMProvider {
  /**
   * AWS Bedrock-specific options for LLM provider configuration.
   */
  "bedrock"?: LLMObsCustomEvalConfigBedrockOptions;
  /**
   * Integration account identifier.
   */
  "integrationAccountId"?: string;
  /**
   * Name of the LLM integration provider.
   */
  "integrationProvider"?: LLMObsCustomEvalConfigIntegrationProvider;
  /**
   * Name of the LLM model.
   */
  "modelName"?: string;
  /**
   * Google Vertex AI-specific options for LLM provider configuration.
   */
  "vertexAi"?: LLMObsCustomEvalConfigVertexAIOptions;

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
    bedrock: {
      baseName: "bedrock",
      type: "LLMObsCustomEvalConfigBedrockOptions",
    },
    integrationAccountId: {
      baseName: "integration_account_id",
      type: "string",
    },
    integrationProvider: {
      baseName: "integration_provider",
      type: "LLMObsCustomEvalConfigIntegrationProvider",
    },
    modelName: {
      baseName: "model_name",
      type: "string",
    },
    vertexAi: {
      baseName: "vertex_ai",
      type: "LLMObsCustomEvalConfigVertexAIOptions",
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
    return LLMObsCustomEvalConfigLLMProvider.attributeTypeMap;
  }

  public constructor() {}
}
