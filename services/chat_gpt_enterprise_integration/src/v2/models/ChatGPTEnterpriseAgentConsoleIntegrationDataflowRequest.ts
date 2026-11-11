import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Activity, token consumption, credits, and estimated usage costs across ChatGPT Chat, ChatGPT Work, and Codex, shown in Agent Console with breakdowns by product, model, and user where OpenAI provides them. Data already available from OpenAI appears within 1 hour of enabling this dataflow.
 */
export class ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `true`; set to `false` to stop collection.
   */
  "enabled": boolean;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ChatGPTEnterpriseAgentConsoleIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
