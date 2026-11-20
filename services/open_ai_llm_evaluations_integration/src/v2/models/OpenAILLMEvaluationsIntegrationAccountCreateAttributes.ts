import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAILLMEvaluationsIntegrationAccountAuthenticationRequest } from "./OpenAILLMEvaluationsIntegrationAccountAuthenticationRequest";
import { OpenAILLMEvaluationsIntegrationAccountSettingsRequest } from "./OpenAILLMEvaluationsIntegrationAccountSettingsRequest";
import { OpenAILLMEvaluationsIntegrationDataflowsRequest } from "./OpenAILLMEvaluationsIntegrationDataflowsRequest";

/**
 * Writable attributes used to create an OpenAI LLM Evaluations integration account.
 */
export class OpenAILLMEvaluationsIntegrationAccountCreateAttributes {
  /**
   * Authentication for creating the OpenAI LLM Evaluations integration account. Exactly one method is set.
   */
  "authentication": OpenAILLMEvaluationsIntegrationAccountAuthenticationRequest;
  /**
   * Data Datadog collects from OpenAI LLM Evaluations, keyed by dataflow ID. Each dataflow turns on a distinct type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values.
   */
  "dataflows"?: OpenAILLMEvaluationsIntegrationDataflowsRequest;
  /**
   * Human-readable name of the OpenAI LLM Evaluations integration account.
   */
  "name": string;
  /**
   * Settings for creating the OpenAI LLM Evaluations integration account.
   */
  "settings": OpenAILLMEvaluationsIntegrationAccountSettingsRequest;
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
    authentication: {
      baseName: "authentication",
      type: "OpenAILLMEvaluationsIntegrationAccountAuthenticationRequest",
      required: true,
    },
    dataflows: {
      baseName: "dataflows",
      type: "OpenAILLMEvaluationsIntegrationDataflowsRequest",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    settings: {
      baseName: "settings",
      type: "OpenAILLMEvaluationsIntegrationAccountSettingsRequest",
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
    return OpenAILLMEvaluationsIntegrationAccountCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
