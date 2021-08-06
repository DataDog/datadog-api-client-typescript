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
 * Object containing the definition of a metric tag configuration to be updated.
 */

export class MetricTagConfigurationUpdateAttributes {
  /**
   * Toggle to include/exclude percentiles for a distribution metric. Defaults to false. Can only be applied to metrics that have a `metric_type` of `distribution`.
   */
  "includePercentiles"?: boolean;
  /**
   * A list of tag keys that will be queryable for your metric.
   */
  "tags"?: Array<string>;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    includePercentiles: {
      baseName: "include_percentiles",
      type: "boolean",
      format: "",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfigurationUpdateAttributes.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MetricTagConfigurationUpdateAttributes {
    const res = new MetricTagConfigurationUpdateAttributes();

    res.includePercentiles = ObjectSerializer.deserialize(
      data.include_percentiles,
      "boolean",
      ""
    );

    res.tags = ObjectSerializer.deserialize(data.tags, "Array<string>", "");

    return res;
  }

  static serialize(
    data: MetricTagConfigurationUpdateAttributes
  ): { [key: string]: any } {
    const attributeTypes = MetricTagConfigurationUpdateAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.include_percentiles = ObjectSerializer.serialize(
      data.includePercentiles,
      "boolean",
      ""
    );

    res.tags = ObjectSerializer.serialize(data.tags, "Array<string>", "");

    return res;
  }

  public constructor() {}
}
