/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumPermanentCrossProductSampling } from "./RumPermanentCrossProductSampling";
import { RumPermanentCrossProductSamplingEditability } from "./RumPermanentCrossProductSamplingEditability";
import { RumPermanentRetentionFilterEventType } from "./RumPermanentRetentionFilterEventType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The attributes of a permanent retention filter.
 */
export class RumPermanentRetentionFilterAttributes {
  /**
   * Cross-product retention settings for a permanent retention filter.
   */
  "crossProductSampling"?: RumPermanentCrossProductSampling;
  /**
   * Flags indicating which `cross_product_sampling` rates can be updated for this filter. Read-only.
   */
  "crossProductSamplingEditability"?: RumPermanentCrossProductSamplingEditability;
  /**
   * Indicates whether the permanent retention filter is active. Read-only.
   */
  "enabled"?: boolean;
  /**
   * The type of RUM events the filter applies to. Read-only.
   */
  "eventType"?: RumPermanentRetentionFilterEventType;
  /**
   * The name of a permanent retention filter. Read-only.
   */
  "name"?: string;
  /**
   * The query string for a permanent retention filter. Read-only.
   */
  "query"?: string;
  /**
   * The retention sample rate for a permanent retention filter, from 0 to 100. Read-only.
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
      type: "RumPermanentCrossProductSampling",
    },
    crossProductSamplingEditability: {
      baseName: "cross_product_sampling_editability",
      type: "RumPermanentCrossProductSamplingEditability",
    },
    enabled: {
      baseName: "enabled",
      type: "boolean",
    },
    eventType: {
      baseName: "event_type",
      type: "RumPermanentRetentionFilterEventType",
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
    return RumPermanentRetentionFilterAttributes.attributeTypeMap;
  }

  public constructor() {}
}
