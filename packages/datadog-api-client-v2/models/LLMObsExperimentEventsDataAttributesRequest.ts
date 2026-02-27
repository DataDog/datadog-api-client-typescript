/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentMetric } from "./LLMObsExperimentMetric";
import { LLMObsExperimentSpan } from "./LLMObsExperimentSpan";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for pushing experiment events including spans and metrics.
 */
export class LLMObsExperimentEventsDataAttributesRequest {
  /**
   * List of metrics to push for the experiment.
   */
  "metrics"?: Array<LLMObsExperimentMetric>;
  /**
   * List of spans to push for the experiment.
   */
  "spans"?: Array<LLMObsExperimentSpan>;

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
    metrics: {
      baseName: "metrics",
      type: "Array<LLMObsExperimentMetric>",
    },
    spans: {
      baseName: "spans",
      type: "Array<LLMObsExperimentSpan>",
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
    return LLMObsExperimentEventsDataAttributesRequest.attributeTypeMap;
  }

  public constructor() {}
}
