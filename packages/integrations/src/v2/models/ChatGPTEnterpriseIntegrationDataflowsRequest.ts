import { AttributeTypeMap } from "@datadog/datadog-api-client-core";

import { ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest } from "./ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest";
import { ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest } from "./ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest";

/**
 * Data Datadog collects from ChatGPT Enterprise, keyed by dataflow ID. Each dataflow turns on a distinct type of collection. Set `enabled` to start or stop a dataflow. The default for each dataflow applies when the account is created. On update, omitted fields keep their current values. Every dataflow requires a ChatGPT Enterprise workspace with access to the OpenAI Costs API. If you enable a dataflow without this access, Datadog stores the setting but collects no data.
 */
export class ChatGPTEnterpriseIntegrationDataflowsRequest {
  /**
   * Activity, token consumption, credits, and estimated usage costs across ChatGPT Chat, ChatGPT Work, and Codex, shown in Agent Console with breakdowns by product, model, and user where OpenAI provides them. Data already available from OpenAI appears within 1 hour after you enable this dataflow.
   */
  "chatgptEnterpriseAgentConsole"?: ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest;
  /**
   * ChatGPT Enterprise costs from the OpenAI Costs API, which you can analyze in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). These costs are excluded from Cloud Cost Management spend-monitored billing. Reported costs are estimates, not final invoice amounts.
   */
  "chatgptEnterpriseCloudCostData"?: ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    chatgptEnterpriseAgentConsole: {
      baseName: "chatgpt-enterprise-agent-console",
      type: "ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest",
    },
    chatgptEnterpriseCloudCostData: {
      baseName: "chatgpt-enterprise-cloud-cost-data",
      type: "ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChatGPTEnterpriseIntegrationDataflowsRequest.attributeTypeMap;
  }

  public constructor() {}
}
