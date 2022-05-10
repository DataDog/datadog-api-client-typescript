/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../util";

/**
 * Object containing the definition of a metric's ingested and indexed volume.
 */
export class MetricIngestedIndexedVolumeAttributes {
  /**
   * Indexed volume for the given metric.
   */
  "indexedVolume"?: number;
  /**
   * Ingested volume for the given metric.
   */
  "ingestedVolume"?: number;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    indexedVolume: {
      baseName: "indexed_volume",
      type: "number",
      format: "int64",
    },
    ingestedVolume: {
      baseName: "ingested_volume",
      type: "number",
      format: "int64",
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
