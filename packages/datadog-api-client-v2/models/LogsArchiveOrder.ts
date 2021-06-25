/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveOrderDefinition } from "./LogsArchiveOrderDefinition";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * A ordered list of archive IDs.
 */

export class LogsArchiveOrder {
  "data"?: LogsArchiveOrderDefinition;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    data: {
      baseName: "data",
      type: "LogsArchiveOrderDefinition",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsArchiveOrder.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsArchiveOrder {
    const res = new LogsArchiveOrder();

    res.data = ObjectSerializer.deserialize(
      data.data,
      "LogsArchiveOrderDefinition",
      ""
    );

    return res;
  }

  static serialize(data: LogsArchiveOrder): { [key: string]: any } {
    const attributeTypes = LogsArchiveOrder.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.data = ObjectSerializer.serialize(
      data.data,
      "LogsArchiveOrderDefinition",
      ""
    );

    return res;
  }

  public constructor() {}
}
