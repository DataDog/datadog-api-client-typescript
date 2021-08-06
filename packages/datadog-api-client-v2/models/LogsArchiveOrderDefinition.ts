/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsArchiveOrderAttributes } from "./LogsArchiveOrderAttributes";
import { LogsArchiveOrderDefinitionType } from "./LogsArchiveOrderDefinitionType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The definition of an archive order.
 */

export class LogsArchiveOrderDefinition {
  "attributes": LogsArchiveOrderAttributes;
  "type": LogsArchiveOrderDefinitionType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "LogsArchiveOrderAttributes",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsArchiveOrderDefinitionType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsArchiveOrderDefinition.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsArchiveOrderDefinition {
    const res = new LogsArchiveOrderDefinition();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'LogsArchiveOrderDefinition' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "LogsArchiveOrderAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsArchiveOrderDefinition' object"
      );
    }
    if (["archive_order", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new LogsArchiveOrderDefinition();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: LogsArchiveOrderDefinition): { [key: string]: any } {
    const attributeTypes = LogsArchiveOrderDefinition.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'LogsArchiveOrderDefinition' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "LogsArchiveOrderAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsArchiveOrderDefinition' object"
      );
    }
    if (["archive_order", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
