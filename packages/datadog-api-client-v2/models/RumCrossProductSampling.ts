/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Configuration for additional APM trace data retention for sessions that match this retention filter.
 * When a session matches the filter and is retained (based on `sample_rate`), you can configure
 * the percentage of retained sessions with ingested traces whose traces are indexed.
 */
export class RumCrossProductSampling {
  /**
   * Indicates whether trace cross-product sampling is enabled. If `false`, no traces are indexed regardless of `trace_sample_rate`.
   */
  "traceEnabled"?: boolean;
  /**
   * The percentage (0-100) of retained sessions with ingested traces whose traces are indexed.
   * For example, 25.0 means 25% of retained sessions with ingested traces have their traces indexed.
   */
  "traceSampleRate"?: number;

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
    traceEnabled: {
      baseName: "trace_enabled",
      type: "boolean",
    },
    traceSampleRate: {
      baseName: "trace_sample_rate",
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
    return RumCrossProductSampling.attributeTypeMap;
  }

  public constructor() {}
}
