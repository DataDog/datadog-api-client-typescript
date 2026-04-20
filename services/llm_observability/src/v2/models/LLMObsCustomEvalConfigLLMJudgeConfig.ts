import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigAssessmentCriteria } from "./LLMObsCustomEvalConfigAssessmentCriteria";
import { LLMObsCustomEvalConfigInferenceParams } from "./LLMObsCustomEvalConfigInferenceParams";
import { LLMObsCustomEvalConfigParsingType } from "./LLMObsCustomEvalConfigParsingType";
import { LLMObsCustomEvalConfigPromptMessage } from "./LLMObsCustomEvalConfigPromptMessage";

/**
 * LLM judge configuration for a custom evaluator.
 */
export class LLMObsCustomEvalConfigLLMJudgeConfig {
  /**
   * Criteria used to assess the pass/fail result of a custom evaluator.
   */
  "assessmentCriteria"?: LLMObsCustomEvalConfigAssessmentCriteria;
  /**
   * LLM inference parameters for a custom evaluator.
   */
  "inferenceParams": LLMObsCustomEvalConfigInferenceParams;
  /**
   * Name of the last library prompt template used.
   */
  "lastUsedLibraryPromptTemplateName"?: string;
  /**
   * Whether the library prompt template was modified.
   */
  "modifiedLibraryPromptTemplate"?: boolean;
  /**
   * JSON schema describing the expected output format of the LLM judge.
   */
  "outputSchema"?: { [key: string]: any };
  /**
   * Output parsing type for a custom LLM judge evaluator.
   */
  "parsingType"?: LLMObsCustomEvalConfigParsingType;
  /**
   * List of messages forming the LLM judge prompt template.
   */
  "promptTemplate"?: Array<LLMObsCustomEvalConfigPromptMessage>;
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
    assessmentCriteria: {
      baseName: "assessment_criteria",
      type: "LLMObsCustomEvalConfigAssessmentCriteria",
    },
    inferenceParams: {
      baseName: "inference_params",
      type: "LLMObsCustomEvalConfigInferenceParams",
      required: true,
    },
    lastUsedLibraryPromptTemplateName: {
      baseName: "last_used_library_prompt_template_name",
      type: "string",
    },
    modifiedLibraryPromptTemplate: {
      baseName: "modified_library_prompt_template",
      type: "boolean",
    },
    outputSchema: {
      baseName: "output_schema",
      type: "{ [key: string]: any; }",
    },
    parsingType: {
      baseName: "parsing_type",
      type: "LLMObsCustomEvalConfigParsingType",
    },
    promptTemplate: {
      baseName: "prompt_template",
      type: "Array<LLMObsCustomEvalConfigPromptMessage>",
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
    return LLMObsCustomEvalConfigLLMJudgeConfig.attributeTypeMap;
  }

  public constructor() {}
}
