import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse } from "./ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse";
import { ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse } from "./ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse";

/**
 * Data Datadog collects from ChatGPT Enterprise, keyed by dataflow id.
 */
export class ChatGPTEnterpriseIntegrationDataflowsResponse {
  /**
   * Activity, token consumption, credits, and estimated usage costs across ChatGPT Chat, ChatGPT Work, and Codex, shown in Agent Console with breakdowns by product, model, and user where OpenAI provides them.
   */
  "chatgptEnterpriseAgentConsole"?: ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse;
  /**
   * ChatGPT Enterprise costs from the OpenAI Costs API, so that ChatGPT Enterprise spend can be analyzed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). These costs are excluded from Cloud Cost Management spend-monitored billing. Reported costs are estimates, not final invoice amounts.
   */
  "chatgptEnterpriseCloudCostData"?: ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse;
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
    chatgptEnterpriseAgentConsole: {
      baseName: "chatgpt-enterprise-agent-console",
      type: "ChatGPTEnterpriseAgentConsoleIntegrationDataflowResponse",
    },
    chatgptEnterpriseCloudCostData: {
      baseName: "chatgpt-enterprise-cloud-cost-data",
      type: "ChatGPTEnterpriseCloudCostDataIntegrationDataflowResponse",
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
    return ChatGPTEnterpriseIntegrationDataflowsResponse.attributeTypeMap;
  }

  public constructor() {}
}
