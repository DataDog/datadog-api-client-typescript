/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A clustered point attached inline to a topic. The metric fields are populated
 * only when the request includes `include_metrics=true`.
 */
export class LLMObsPatternsClusteredPointRef {
  /**
   * Duration of the source span in nanoseconds. Included only when metrics are requested.
   */
  "duration"?: number;
  /**
   * Estimated total cost of the source span. Included only when metrics are requested.
   */
  "estimatedTotalCost"?: number;
  /**
   * Evaluation results for the source span keyed by evaluation name. Included
   * only when metrics are requested.
   */
  "evaluation"?: { [key: string]: any };
  /**
   * Number of input tokens of the source span. Included only when metrics are requested.
   */
  "inputTokens"?: number;
  /**
   * Number of output tokens of the source span. Included only when metrics are requested.
   */
  "outputTokens"?: number;
  /**
   * Identifier of the source span.
   */
  "spanId": string;
  /**
   * Status of the source span. Included only when metrics are requested.
   */
  "status"?: string;
  /**
   * Total number of tokens of the source span. Included only when metrics are requested.
   */
  "totalTokens"?: number;

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
      format: "double",
    },
    estimatedTotalCost: {
      baseName: "estimated_total_cost",
      type: "number",
      format: "double",
    },
    evaluation: {
      baseName: "evaluation",
      type: "{ [key: string]: any; }",
    },
    inputTokens: {
      baseName: "input_tokens",
      type: "number",
      format: "double",
    },
    outputTokens: {
      baseName: "output_tokens",
      type: "number",
      format: "double",
    },
    spanId: {
      baseName: "span_id",
      type: "string",
      required: true,
    },
    status: {
      baseName: "status",
      type: "string",
    },
    totalTokens: {
      baseName: "total_tokens",
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
    return LLMObsPatternsClusteredPointRef.attributeTypeMap;
  }

  public constructor() {}
}
