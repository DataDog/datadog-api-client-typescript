/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest } from "./ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest";
import { ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest } from "./ChatGPTEnterpriseCloudCostDataIntegrationDataflowRequest";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data Datadog collects from ChatGPT Enterprise, keyed by dataflow id. Each dataflow turns on a distinct kind of collection: set `enabled` to start or stop it. Defaults listed on each dataflow apply when the account is created; on update, omitted fields keep their current values. Every dataflow requires a ChatGPT Enterprise workspace with access to the OpenAI Costs API; a dataflow enabled without it is stored but collects no data.
 */
export class ChatGPTEnterpriseIntegrationDataflowsRequest {
  /**
   * Activity, token consumption, credits, and estimated usage costs across ChatGPT Chat, ChatGPT Work, and Codex, shown in Agent Console with breakdowns by product, model, and user where OpenAI provides them. Data already available from OpenAI appears within 1 hour of enabling this dataflow.
   */
  "chatgptEnterpriseAgentConsole"?: ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest;
  /**
   * ChatGPT Enterprise costs from the OpenAI Costs API, so that ChatGPT Enterprise spend can be analyzed in [Cloud Cost Management](https://docs.datadoghq.com/cloud_cost_management/). These costs are excluded from Cloud Cost Management spend-monitored billing. Reported costs are estimates, not final invoice amounts.
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
