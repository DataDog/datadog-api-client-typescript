import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexDoraIntegrationDataflowRequest } from "./OpenAICodexDoraIntegrationDataflowRequest";
import { OpenAICodexTurnMetricsIntegrationDataflowRequest } from "./OpenAICodexTurnMetricsIntegrationDataflowRequest";

/**
 * Data Datadog collects from OpenAI Codex, keyed by dataflow ID. Datadog always collects daily Codex analytics metrics. Each dataflow in this object adds another type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values. Every dataflow requires an OpenAI enterprise subscription with Codex enabled. If you enable a dataflow without this subscription, Datadog stores the setting but collects no data.
 */
export class OpenAICodexIntegrationDataflowsRequest {
  /**
   * A daily per-engineer engagement signal that [AI Impact](https://docs.datadoghq.com/delivery_performance/ai_impact/) uses to attribute AI-assisted pull requests.
   */
  "openaiCodexDora"?: OpenAICodexDoraIntegrationDataflowRequest;
  /**
   * Hourly turn-level metrics from the OpenAI Compliance Logs Platform, including turn and session identity, Work Insights classification, token usage, credits, estimated cost, duration, and activity for skills, plugins, and artifacts. Turn cost is a provider estimate and can differ from invoiced charges. Requires the `chatgpt.enterprise.compliance_logs_platform.workspace_analytics.read` scope on the key in `authentication`. Without this scope, the dataflow collects no data.
   */
  "openaiCodexTurnMetrics"?: OpenAICodexTurnMetricsIntegrationDataflowRequest;
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
      type: "OpenAICodexDoraIntegrationDataflowRequest",
    },
    openaiCodexTurnMetrics: {
      baseName: "openai-codex-turn-metrics",
      type: "OpenAICodexTurnMetricsIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAICodexIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
