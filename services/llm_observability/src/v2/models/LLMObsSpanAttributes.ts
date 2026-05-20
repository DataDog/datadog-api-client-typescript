import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LLMObsSpanEvaluationMetric } from "./LLMObsSpanEvaluationMetric";
import { LLMObsSpanIO } from "./LLMObsSpanIO";
import { LLMObsSpanToolDefinition } from "./LLMObsSpanToolDefinition";

/**
 * Attributes of an LLM Observability span.
 */
export class LLMObsSpanAttributes {
  /**
   * Duration of the span in nanoseconds.
   */
  "duration": number;
  /**
   * Evaluation metrics keyed by evaluator name.
   */
  "evaluation"?: { [key: string]: LLMObsSpanEvaluationMetric };
  /**
   * Input or output content of an LLM Observability span.
   */
  "input"?: LLMObsSpanIO;
  /**
   * Detected intent of the span.
   */
  "intent"?: string;
  /**
   * Arbitrary metadata associated with the span.
   */
  "metadata"?: { [key: string]: any };
  /**
   * Numeric metrics associated with the span (e.g., token counts).
   */
  "metrics"?: { [key: string]: number };
  /**
   * Name of the ML application this span belongs to.
   */
  "mlApp": string;
  /**
   * Name of the model used in this span.
   */
  "modelName"?: string;
  /**
   * Provider of the model used in this span.
   */
  "modelProvider"?: string;
  /**
   * Name of the span.
   */
  "name": string;
  /**
   * Input or output content of an LLM Observability span.
   */
  "output"?: LLMObsSpanIO;
  /**
   * Identifier of the parent span, if any.
   */
  "parentId"?: string;
  /**
   * Unique identifier of the span.
   */
  "spanId": string;
  /**
   * Kind of span (e.g., llm, agent, tool, task, workflow).
   */
  "spanKind": string;
  /**
   * Start time of the span in nanoseconds since Unix epoch.
   */
  "startNs": number;
  /**
   * Status of the span (e.g., ok, error).
   */
  "status": string;
  /**
   * Tags associated with the span.
   */
  "tags"?: Array<string>;
  /**
   * Tool definitions available to the span.
   */
  "toolDefinitions"?: Array<LLMObsSpanToolDefinition>;
  /**
   * Trace identifier this span belongs to.
   */
  "traceId": string;
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
    duration: {
      baseName: "duration",
      type: "number",
      required: true,
      format: "double",
    },
    evaluation: {
      baseName: "evaluation",
      type: "{ [key: string]: LLMObsSpanEvaluationMetric; }",
    },
    input: {
      baseName: "input",
      type: "LLMObsSpanIO",
    },
    intent: {
      baseName: "intent",
      type: "string",
    },
    metadata: {
      baseName: "metadata",
      type: "{ [key: string]: any; }",
    },
    metrics: {
      baseName: "metrics",
      type: "{ [key: string]: number; }",
    },
    mlApp: {
      baseName: "ml_app",
      type: "string",
      required: true,
    },
    modelName: {
      baseName: "model_name",
      type: "string",
    },
    modelProvider: {
      baseName: "model_provider",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    output: {
      baseName: "output",
      type: "LLMObsSpanIO",
    },
    parentId: {
      baseName: "parent_id",
      type: "string",
    },
    spanId: {
      baseName: "span_id",
      type: "string",
      required: true,
    },
    spanKind: {
      baseName: "span_kind",
      type: "string",
      required: true,
    },
    startNs: {
      baseName: "start_ns",
      type: "number",
      required: true,
      format: "int64",
    },
    status: {
      baseName: "status",
      type: "string",
      required: true,
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    toolDefinitions: {
      baseName: "tool_definitions",
      type: "Array<LLMObsSpanToolDefinition>",
    },
    traceId: {
      baseName: "trace_id",
      type: "string",
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
    return LLMObsSpanAttributes.attributeTypeMap;
  }

  public constructor() {}
}
