import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsExperimentMetricError } from "./LLMObsExperimentMetricError";
import { LLMObsMetricAssessment } from "./LLMObsMetricAssessment";
import { LLMObsMetricScoreType } from "./LLMObsMetricScoreType";

/**
 * A metric associated with an LLM Observability experiment span.
 */
export class LLMObsExperimentMetric {
  /**
   * Assessment result for an LLM Observability experiment metric.
   */
  "assessment"?: LLMObsMetricAssessment;
  /**
   * Boolean value. Used when `metric_type` is `boolean`.
   */
  "booleanValue"?: boolean;
  /**
   * Categorical value. Used when `metric_type` is `categorical`.
   */
  "categoricalValue"?: string;
  /**
   * Error details for an experiment metric evaluation.
   */
  "error"?: LLMObsExperimentMetricError;
  /**
   * JSON value. Used when `metric_type` is `json`.
   */
  "jsonValue"?: { [key: string]: any };
  /**
   * Label or name for the metric.
   */
  "label": string;
  /**
   * Arbitrary metadata associated with the metric.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Type of metric recorded for an LLM Observability experiment.
   */
  "metricType": LLMObsMetricScoreType;
  /**
   * Human-readable reasoning for the metric value.
   */
  "reasoning"?: string;
  /**
   * Numeric score value. Used when `metric_type` is `score`.
   */
  "scoreValue"?: number;
  /**
   * Identifier of the span this metric is associated with.
   */
  "spanId": string;
  /**
   * List of tags associated with the metric.
   */
  "tags"?: Array<string>;
  /**
   * Timestamp when the metric was recorded, in milliseconds since Unix epoch.
   */
  "timestampMs": number;
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
      type: "LLMObsMetricAssessment",
    },
    booleanValue: {
      baseName: "boolean_value",
      type: "boolean",
    },
    categoricalValue: {
      baseName: "categorical_value",
      type: "string",
    },
    error: {
      baseName: "error",
      type: "LLMObsExperimentMetricError",
    },
    jsonValue: {
      baseName: "json_value",
      type: "{ [key: string]: any; }",
    },
    label: {
      baseName: "label",
      type: "string",
      required: true,
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    metricType: {
      baseName: "metric_type",
      type: "LLMObsMetricScoreType",
      required: true,
    },
    reasoning: {
      baseName: "reasoning",
      type: "string",
    },
    scoreValue: {
      baseName: "score_value",
      type: "number",
      format: "double",
    },
    spanId: {
      baseName: "span_id",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    timestampMs: {
      baseName: "timestamp_ms",
      type: "number",
      required: true,
      format: "int64",
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
    return LLMObsExperimentMetric.attributeTypeMap;
  }

  public constructor() {}
}
