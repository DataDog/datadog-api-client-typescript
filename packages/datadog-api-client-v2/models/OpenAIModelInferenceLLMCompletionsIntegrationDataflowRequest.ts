/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Makes the key in `authentication` available to run evaluations in [LLM Observability](https://docs.datadoghq.com/llm_observability/). While this dataflow is enabled, the API returns a `422` response for a key that cannot call the OpenAI chat completions endpoint.
 */
export class OpenAIModelInferenceLLMCompletionsIntegrationDataflowRequest {
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
    return OpenAIModelInferenceLLMCompletionsIntegrationDataflowRequest.attributeTypeMap;
  }

  public constructor() {}
}
