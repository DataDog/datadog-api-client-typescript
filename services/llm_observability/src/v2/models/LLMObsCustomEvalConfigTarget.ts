import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsCustomEvalConfigEvalScope } from "./LLMObsCustomEvalConfigEvalScope";

/**
 * Target application configuration for a custom evaluator.
 */
export class LLMObsCustomEvalConfigTarget {
  /**
   * Name of the ML application this evaluator targets.
   */
  "applicationName": string;
  /**
   * Whether the evaluator is active for the target application.
   */
  "enabled": boolean;
  /**
   * Scope at which to evaluate spans.
   */
  "evalScope"?: LLMObsCustomEvalConfigEvalScope;
  /**
   * Filter expression to select which spans to evaluate.
   */
  "filter"?: string;
  /**
   * When true, only root spans are evaluated.
   */
  "rootSpansOnly"?: boolean;
  /**
   * Percentage of traces to evaluate. Must be greater than 0 and at most 100.
   */
  "samplingPercentage"?: number;
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
    applicationName: {
      baseName: "application_name",
      type: "string",
      required: true,
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    evalScope: {
      baseName: "eval_scope",
      type: "LLMObsCustomEvalConfigEvalScope",
    },
    filter: {
      baseName: "filter",
      type: "string",
    },
    rootSpansOnly: {
      baseName: "root_spans_only",
      type: "boolean",
    },
    samplingPercentage: {
      baseName: "sampling_percentage",
      type: "number",
      format: "double",
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
    return LLMObsCustomEvalConfigTarget.attributeTypeMap;
  }

  public constructor() {}
}
