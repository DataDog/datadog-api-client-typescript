/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { MetricTagConfigurationType } from "./MetricTagConfigurationType";
import { MetricTagConfigurationUpdateAttributes } from "./MetricTagConfigurationUpdateAttributes";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Object for a single tag configuration to be edited.
 */

export class MetricTagConfigurationUpdateData {
  "attributes"?: MetricTagConfigurationUpdateAttributes;
  /**
   * The metric name for this resource.
   */
  "id": string;
  "type": MetricTagConfigurationType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "MetricTagConfigurationUpdateAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "MetricTagConfigurationType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return MetricTagConfigurationUpdateData.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): MetricTagConfigurationUpdateData {
    const res = new MetricTagConfigurationUpdateData();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "MetricTagConfigurationUpdateAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'MetricTagConfigurationUpdateData' object"
      );
    }
    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'MetricTagConfigurationUpdateData' object"
      );
    }
    if (["manage_tags", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new MetricTagConfigurationUpdateData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(
    data: MetricTagConfigurationUpdateData
  ): { [key: string]: any } {
    const attributeTypes = MetricTagConfigurationUpdateData.getAttributeTypeMap();
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
      "MetricTagConfigurationUpdateAttributes",
      ""
    );

    if (data.id === undefined) {
      throw new TypeError(
        "missing required attribute 'id' on 'MetricTagConfigurationUpdateData' object"
      );
    }
    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'MetricTagConfigurationUpdateData' object"
      );
    }
    if (["manage_tags", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
