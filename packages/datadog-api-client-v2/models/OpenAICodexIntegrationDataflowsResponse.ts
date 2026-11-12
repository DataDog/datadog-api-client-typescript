/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OpenAICodexDoraIntegrationDataflowResponse } from "./OpenAICodexDoraIntegrationDataflowResponse";
import { OpenAICodexMetricsIntegrationDataflowResponse } from "./OpenAICodexMetricsIntegrationDataflowResponse";
import { OpenAICodexTurnMetricsIntegrationDataflowResponse } from "./OpenAICodexTurnMetricsIntegrationDataflowResponse";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from OpenAI Codex, keyed by dataflow id.
 */
export class OpenAICodexIntegrationDataflowsResponse {
  /**
   * A daily per-engineer engagement signal that [AI Impact](https://docs.datadoghq.com/delivery_performance/ai_impact/) uses to attribute AI-assisted pull requests.
   */
  "openaiCodexDora"?: OpenAICodexDoraIntegrationDataflowResponse;
  /**
   * Daily Codex analytics metrics under the `openai.codex.*` namespace: usage totals, token counts by model, thread and turn counts by client, lines of code attributable to Codex, and code reviews. This dataflow is always on and cannot be turned off, which is why it appears in responses only.
   */
  "openaiCodexMetrics"?: OpenAICodexMetricsIntegrationDataflowResponse;
  /**
   * Hourly turn-level metrics from the OpenAI Compliance Logs Platform, including turn and session identity, Work Insights classification, token usage, credits, estimated cost, duration, and skill, plugin, and artifact activity. Turn cost is a provider estimate and can differ from invoiced charges. Requires the `chatgpt.enterprise.compliance_logs_platform.workspace_analytics.read` scope on the key in `authentication`; without it this dataflow collects no data.
   */
  "openaiCodexTurnMetrics"?: OpenAICodexTurnMetricsIntegrationDataflowResponse;

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
    openaiCodexDora: {
      baseName: "openai-codex-dora",
      type: "OpenAICodexDoraIntegrationDataflowResponse",
    },
    openaiCodexMetrics: {
      baseName: "openai-codex-metrics",
      type: "OpenAICodexMetricsIntegrationDataflowResponse",
    },
    openaiCodexTurnMetrics: {
      baseName: "openai-codex-turn-metrics",
      type: "OpenAICodexTurnMetricsIntegrationDataflowResponse",
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
    return OpenAICodexIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
