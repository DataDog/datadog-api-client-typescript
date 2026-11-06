/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Object containing the definition of a metric's ingested and indexed volume.
 */
export class MetricIngestedIndexedVolumeAttributes {
  /**
   * Estimated average hourly number of indexed time series for the given metric over the last hour. For organizations on Metric Name Pricing, this represents the estimated sum of indexed data points over the last hour.
   */
  "indexedVolume"?: Int64;
  /**
   * Change in `indexed_volume` compared with the previous hour: the last hour's value minus the value for
   * the hour before. Negative when volume decreased.
   */
  "indexedVolumeDelta"?: Int64;
  /**
   * Estimated average hourly number of ingested time series for the given metric over the last hour. This value is `0` for metrics not configured with Metrics Without Limits. For organizations on Metric Name Pricing, this represents the estimated sum of ingested data points over the last hour.
   */
  "ingestedVolume"?: Int64;
  /**
   * Change in `ingested_volume` compared with the previous hour: the last hour's value minus the value for
   * the hour before. Negative when volume decreased.
   */
  "ingestedVolumeDelta"?: Int64;

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
    indexedVolume: {
      baseName: "indexed_volume",
      type: "number",
      format: "int64",
    },
    indexedVolumeDelta: {
      baseName: "indexed_volume_delta",
      type: "number",
      format: "int64",
    },
    ingestedVolume: {
      baseName: "ingested_volume",
      type: "number",
      format: "int64",
    },
    ingestedVolumeDelta: {
      baseName: "ingested_volume_delta",
      type: "number",
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
    return MetricIngestedIndexedVolumeAttributes.attributeTypeMap;
  }

  public constructor() {}
}
