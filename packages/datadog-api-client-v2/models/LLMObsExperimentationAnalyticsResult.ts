/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LLMObsExperimentationAnalyticsValue } from "./LLMObsExperimentationAnalyticsValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Analytics query result containing all buckets.
 */
export class LLMObsExperimentationAnalyticsResult {
  /**
   * List of result buckets.
   */
  "values": Array<LLMObsExperimentationAnalyticsValue>;

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
    values: {
      baseName: "values",
      type: "Array<LLMObsExperimentationAnalyticsValue>",
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
    return LLMObsExperimentationAnalyticsResult.attributeTypeMap;
  }

  public constructor() {}
}
