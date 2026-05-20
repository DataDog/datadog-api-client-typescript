import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * An evaluation metric associated with an LLM Observability span.
 */
export class LLMObsSpanEvaluationMetric {
  /**
   * Assessment result (e.g., pass or fail).
   */
  "assessment"?: string;
  /**
   * Type of the evaluation metric (e.g., score, categorical, boolean).
   */
  "evalMetricType"?: string;
  /**
   * Human-readable reasoning for the evaluation result.
   */
  "reasoning"?: string;
  /**
   * Status of the evaluation execution.
   */
  "status"?: string;
  /**
   * Tags associated with the evaluation metric.
   */
  "tags"?: Array<string>;
  /**
   * Value of the evaluation result.
   */
  "value"?: any;
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
    assessment: {
      baseName: "assessment",
      type: "string",
    },
    evalMetricType: {
      baseName: "eval_metric_type",
      type: "string",
    },
    reasoning: {
      baseName: "reasoning",
      type: "string",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    value: {
      baseName: "value",
      type: "any",
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
    return LLMObsSpanEvaluationMetric.attributeTypeMap;
  }

  public constructor() {}
}
