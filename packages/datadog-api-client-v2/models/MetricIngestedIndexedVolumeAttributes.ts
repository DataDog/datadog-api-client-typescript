/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

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

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
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

  static getAttributeTypeMap() {
    return MetricIngestedIndexedVolumeAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MetricIngestedIndexedVolumeAttributes {
    const res = new MetricIngestedIndexedVolumeAttributes();

    res.indexedVolume = ObjectSerializer.deserialize(
      data.indexed_volume,
      "number",
      "int64"
    );

    res.ingestedVolume = ObjectSerializer.deserialize(
      data.ingested_volume,
      "number",
      "int64"
    );

    return res;
  }

  static serialize(
    data: MetricIngestedIndexedVolumeAttributes
  ): { [key: string]: any } {
    const attributeTypes = MetricIngestedIndexedVolumeAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.indexed_volume = ObjectSerializer.serialize(
      data.indexedVolume,
      "number",
      "int64"
    );

    res.ingested_volume = ObjectSerializer.serialize(
      data.ingestedVolume,
      "number",
      "int64"
    );

    return res;
  }

  public constructor() {}
}
