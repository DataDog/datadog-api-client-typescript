/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsCustomEvalConfigLLMJudgeConfig } from "./LLMObsCustomEvalConfigLLMJudgeConfig";
import { LLMObsCustomEvalConfigLLMProvider } from "./LLMObsCustomEvalConfigLLMProvider";
import { LLMObsCustomEvalConfigTarget } from "./LLMObsCustomEvalConfigTarget";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for creating or updating a custom LLM Observability evaluator configuration.
 */
export class LLMObsCustomEvalConfigUpdateAttributes {
  /**
   * Category of the evaluator.
   */
  "category"?: string;
  /**
   * Name of the custom evaluator. If provided, must match the eval_name path parameter.
   */
  "evalName"?: string;
  /**
   * LLM judge configuration for a custom evaluator.
   */
  "llmJudgeConfig"?: LLMObsCustomEvalConfigLLMJudgeConfig;
  /**
   * LLM provider configuration for a custom evaluator.
   */
  "llmProvider"?: LLMObsCustomEvalConfigLLMProvider;
  /**
   * Target application configuration for a custom evaluator.
   */
  "target": LLMObsCustomEvalConfigTarget;

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
    category: {
      baseName: "category",
      type: "string",
    },
    evalName: {
      baseName: "eval_name",
      type: "string",
    },
    llmJudgeConfig: {
      baseName: "llm_judge_config",
      type: "LLMObsCustomEvalConfigLLMJudgeConfig",
    },
    llmProvider: {
      baseName: "llm_provider",
      type: "LLMObsCustomEvalConfigLLMProvider",
    },
    target: {
      baseName: "target",
      type: "LLMObsCustomEvalConfigTarget",
      required: true,
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
    return LLMObsCustomEvalConfigUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
