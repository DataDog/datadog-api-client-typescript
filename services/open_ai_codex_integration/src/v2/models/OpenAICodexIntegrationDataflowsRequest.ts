import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OpenAICodexDoraIntegrationDataflowRequest } from "./OpenAICodexDoraIntegrationDataflowRequest";
import { OpenAICodexTurnMetricsIntegrationDataflowRequest } from "./OpenAICodexTurnMetricsIntegrationDataflowRequest";

/**
 * Data Datadog collects from OpenAI Codex, keyed by dataflow id. Daily Codex analytics metrics are always collected; each dataflow here adds a further kind of collection on top of that baseline, so set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow requires an OpenAI enterprise subscription with Codex enabled; a dataflow enabled without it is stored but collects no data.
 */
export class OpenAICodexIntegrationDataflowsRequest {
  /**
   * A daily per-engineer engagement signal that [AI Impact](https://docs.datadoghq.com/delivery_performance/ai_impact/) uses to attribute AI-assisted pull requests.
   */
  "openaiCodexDora"?: OpenAICodexDoraIntegrationDataflowRequest;
  /**
   * Hourly turn-level metrics from the OpenAI Compliance Logs Platform, including turn and session identity, Work Insights classification, token usage, credits, estimated cost, duration, and skill, plugin, and artifact activity. Turn cost is a provider estimate and can differ from invoiced charges. Requires the `chatgpt.enterprise.compliance_logs_platform.workspace_analytics.read` scope on the key in `authentication`; without it this dataflow collects no data.
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
