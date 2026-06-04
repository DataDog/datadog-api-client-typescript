/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentSpanType } from "./LLMObsExperimentSpanType";
import { LLMObsExperimentSpanWithEvals } from "./LLMObsExperimentSpanWithEvals";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * JSON:API data item wrapping a single experiment span with evaluations.
 */
export class LLMObsExperimentSpanDataResponse {
  /**
   * An experiment span enriched with its associated evaluation metrics.
   */
  "attributes": LLMObsExperimentSpanWithEvals;
  /**
   * Unique identifier of the span.
   */
  "id": string;
  /**
   * Resource type for a span item in an experiment spans response.
   */
  "type": LLMObsExperimentSpanType;

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
    attributes: {
      baseName: "attributes",
      type: "LLMObsExperimentSpanWithEvals",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LLMObsExperimentSpanType",
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
    return LLMObsExperimentSpanDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
