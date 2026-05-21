/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsOpenAIReasoningEffort } from "./LLMObsOpenAIReasoningEffort";
import { LLMObsOpenAIReasoningSummary } from "./LLMObsOpenAIReasoningSummary";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * OpenAI-specific metadata for an inference request.
 */
export class LLMObsOpenAIMetadata {
  /**
   * The reasoning effort level for OpenAI models that support it.
   */
  "reasoningEffort"?: LLMObsOpenAIReasoningEffort;
  /**
   * The verbosity of the reasoning summary.
   */
  "reasoningSummary"?: LLMObsOpenAIReasoningSummary;

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
    reasoningEffort: {
      baseName: "reasoning_effort",
      type: "LLMObsOpenAIReasoningEffort",
    },
    reasoningSummary: {
      baseName: "reasoning_summary",
      type: "LLMObsOpenAIReasoningSummary",
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
    return LLMObsOpenAIMetadata.attributeTypeMap;
  }

  public constructor() {}
}
