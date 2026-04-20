import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigLLMJudgeConfig } from "./LLMObsCustomEvalConfigLLMJudgeConfig";
import { LLMObsCustomEvalConfigLLMProvider } from "./LLMObsCustomEvalConfigLLMProvider";
import { LLMObsCustomEvalConfigTarget } from "./LLMObsCustomEvalConfigTarget";
import { LLMObsCustomEvalConfigUser } from "./LLMObsCustomEvalConfigUser";

/**
 * Attributes of a custom LLM Observability evaluator configuration.
 */
export class LLMObsCustomEvalConfigAttributes {
  /**
   * Category of the evaluator.
   */
  "category"?: string;
  /**
   * Timestamp when the evaluator configuration was created.
   */
  "createdAt": Date;
  /**
   * A Datadog user associated with a custom evaluator configuration.
   */
  "createdBy"?: LLMObsCustomEvalConfigUser;
  /**
   * Name of the custom evaluator.
   */
  "evalName": string;
  /**
   * A Datadog user associated with a custom evaluator configuration.
   */
  "lastUpdatedBy"?: LLMObsCustomEvalConfigUser;
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
  "target"?: LLMObsCustomEvalConfigTarget;
  /**
   * Timestamp when the evaluator configuration was last updated.
   */
  "updatedAt": Date;
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
    createdAt: {
      baseName: "created_at",
      type: "Date",
      required: true,
      format: "date-time",
    },
    createdBy: {
      baseName: "created_by",
      type: "LLMObsCustomEvalConfigUser",
    },
    evalName: {
      baseName: "eval_name",
      type: "string",
      required: true,
    },
    lastUpdatedBy: {
      baseName: "last_updated_by",
      type: "LLMObsCustomEvalConfigUser",
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
    },
    updatedAt: {
      baseName: "updated_at",
      type: "Date",
      required: true,
      format: "date-time",
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
    return LLMObsCustomEvalConfigAttributes.attributeTypeMap;
  }

  public constructor() {}
}
