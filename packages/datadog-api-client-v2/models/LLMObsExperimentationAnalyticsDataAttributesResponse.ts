/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationAnalyticsResult } from "./LLMObsExperimentationAnalyticsResult";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an analytics response.
 */
export class LLMObsExperimentationAnalyticsDataAttributesResponse {
  /**
   * Total number of events matched by the query before grouping.
   */
  "hitCount": number;
  /**
   * Analytics query result containing all buckets.
   */
  "result": LLMObsExperimentationAnalyticsResult;

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
    hitCount: {
      baseName: "hit_count",
      type: "number",
      required: true,
      format: "int64",
    },
    result: {
      baseName: "result",
      type: "LLMObsExperimentationAnalyticsResult",
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
    return LLMObsExperimentationAnalyticsDataAttributesResponse.attributeTypeMap;
  }

  public constructor() {}
}
