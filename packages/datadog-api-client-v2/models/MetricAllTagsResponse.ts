/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricAllTags } from "./MetricAllTags";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Response object that includes a single metric's indexed tags.
 */

export class MetricAllTagsResponse {
  "data"?: MetricAllTags;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "MetricAllTags",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricAllTagsResponse.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): MetricAllTagsResponse {
    const res = new MetricAllTagsResponse();

    res.data = ObjectSerializer.deserialize(data.data, "MetricAllTags", "");

    return res;
  }

  static serialize(data: MetricAllTagsResponse): { [key: string]: any } {
    const attributeTypes = MetricAllTagsResponse.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.data = ObjectSerializer.serialize(data.data, "MetricAllTags", "");

    return res;
  }

  public constructor() {}
}
