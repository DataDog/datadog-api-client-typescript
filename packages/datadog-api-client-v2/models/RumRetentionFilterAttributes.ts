/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumCrossProductSampling } from "./RumCrossProductSampling";
import { RumRetentionFilterEventType } from "./RumRetentionFilterEventType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The object describing attributes of a RUM retention filter.
 */
export class RumRetentionFilterAttributes {
  /**
   * Configuration for additional APM trace data retention for sessions that match this retention filter.
   * When a session matches the filter and is retained (based on `sample_rate`), you can configure
   * the percentage of retained sessions with ingested traces whose traces are indexed.
   */
  "crossProductSampling"?: RumCrossProductSampling;
  /**
   * Whether the retention filter is enabled.
   */
  "enabled"?: boolean;
  /**
   * The type of RUM events to filter on.
   */
  "eventType"?: RumRetentionFilterEventType;
  /**
   * The name of a RUM retention filter.
   */
  "name"?: string;
  /**
   * The query string for a RUM retention filter.
   */
  "query"?: string;
  /**
   * The sample rate for a RUM retention filter, between 0.1 and 100.
   */
  "sampleRate"?: number;

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
    crossProductSampling: {
      baseName: "cross_product_sampling",
      type: "RumCrossProductSampling",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    eventType: {
      baseName: "event_type",
      type: "RumRetentionFilterEventType",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    query: {
      baseName: "query",
      type: "string",
    },
    sampleRate: {
      baseName: "sample_rate",
      type: "number",
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
    return RumRetentionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
