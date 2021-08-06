/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricIngestedIndexedVolumeAttributes } from "./MetricIngestedIndexedVolumeAttributes";
import { MetricIngestedIndexedVolumeType } from "./MetricIngestedIndexedVolumeType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object for a single metric's ingested and indexed volume.
 */

export class MetricIngestedIndexedVolume {
  "attributes"?: MetricIngestedIndexedVolumeAttributes;
  /**
   * The metric name for this resource.
   */
  "id"?: string;
  "type"?: MetricIngestedIndexedVolumeType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "MetricIngestedIndexedVolumeAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "MetricIngestedIndexedVolumeType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricIngestedIndexedVolume.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MetricIngestedIndexedVolume {
    const res = new MetricIngestedIndexedVolume();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "MetricIngestedIndexedVolumeAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (["metric_volumes", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new MetricIngestedIndexedVolume();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: MetricIngestedIndexedVolume): { [key: string]: any } {
    const attributeTypes = MetricIngestedIndexedVolume.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "MetricIngestedIndexedVolumeAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (["metric_volumes", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
