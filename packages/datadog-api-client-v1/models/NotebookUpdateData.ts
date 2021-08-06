/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { NotebookResourceType } from "./NotebookResourceType";
import { NotebookUpdateDataAttributes } from "./NotebookUpdateDataAttributes";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * The data for a notebook update request.
 */

export class NotebookUpdateData {
  "attributes": NotebookUpdateDataAttributes;
  "type": NotebookResourceType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    attributes: {
      baseName: "attributes",
      type: "NotebookUpdateDataAttributes",
      format: "",
    },
    type: {
      baseName: "type",
      type: "NotebookResourceType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return NotebookUpdateData.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): NotebookUpdateData {
    const res = new NotebookUpdateData();

    if (data.attributes === undefined) {
      throw new TypeError(
        "missing required attribute 'attributes' on 'NotebookUpdateData' object"
      );
    }
    res.attributes = ObjectSerializer.deserialize(
      data.attributes,
      "NotebookUpdateDataAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NotebookUpdateData' object"
      );
    }
    if (["notebooks", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new NotebookUpdateData();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: NotebookUpdateData): { [key: string]: any } {
    const attributeTypes = NotebookUpdateData.getAttributeTypeMap();
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
        "missing required attribute 'attributes' on 'NotebookUpdateData' object"
      );
    }
    res.attributes = ObjectSerializer.serialize(
      data.attributes,
      "NotebookUpdateDataAttributes",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'NotebookUpdateData' object"
      );
    }
    if (["notebooks", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
