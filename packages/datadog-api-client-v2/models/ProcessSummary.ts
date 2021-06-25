/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ProcessSummaryAttributes } from "./ProcessSummaryAttributes";
import { ProcessSummaryType } from "./ProcessSummaryType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Process summary object.
 */

export class ProcessSummary {
  "attributes"?: ProcessSummaryAttributes;
  /**
   * Process ID.
   */
  "id"?: string;
  "type"?: ProcessSummaryType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "ProcessSummaryAttributes",
      format: "",
    },
    id: {
      baseName: "id",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "ProcessSummaryType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return ProcessSummary.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): ProcessSummary {
    const res = new ProcessSummary();

    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "ProcessSummaryAttributes",
      ""
    );

    res.id = ObjectSerializer.deserialize(data.id, "string", "");

    if (["process", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  static serialize(data: ProcessSummary): { [key: string]: any } {
    const attributeTypes = ProcessSummary.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "ProcessSummaryAttributes",
      ""
    );

    res.id = ObjectSerializer.serialize(data.id, "string", "");

    if (["process", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
