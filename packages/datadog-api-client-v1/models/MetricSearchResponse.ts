/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricSearchResponseResults } from "./MetricSearchResponseResults";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object containing the list of metrics matching the search query.
 */

export class MetricSearchResponse {
  "results"?: MetricSearchResponseResults;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    results: {
      baseName: "results",
      type: "MetricSearchResponseResults",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricSearchResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MetricSearchResponse {
    const res = new MetricSearchResponse();

    res.results = ObjectSerializer.deserialize(
      data.results,
      "MetricSearchResponseResults",
      ""
    );

    return res;
  }

  static serialize(data: MetricSearchResponse): { [key: string]: any } {
    const attributeTypes = MetricSearchResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.results = ObjectSerializer.serialize(
      data.results,
      "MetricSearchResponseResults",
      ""
    );

    return res;
  }

  public constructor() {}
}
