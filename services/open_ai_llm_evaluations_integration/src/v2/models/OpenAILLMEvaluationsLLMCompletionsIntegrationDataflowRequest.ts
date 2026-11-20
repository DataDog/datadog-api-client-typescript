import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Makes the key in `authentication` available to run evaluations in [LLM Observability](https://docs.datadoghq.com/llm_observability/). While this dataflow is enabled, a key that cannot call the OpenAI chat completions endpoint is rejected with a `422` response.
 */
export class OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest {
  /**
   * Whether Datadog collects this data. Defaults to `true`. Set to `false` to stop collection.
   */
  "enabled"?: boolean;
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
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return OpenAILLMEvaluationsLLMCompletionsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
