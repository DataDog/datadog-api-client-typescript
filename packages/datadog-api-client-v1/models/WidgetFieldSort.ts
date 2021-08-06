/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { WidgetSort } from "./WidgetSort";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Which column and order to sort by
 */

export class WidgetFieldSort {
  /**
   * Facet path for the column
   */
  "column": string;
  "order": WidgetSort;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    column: {
      baseName: "column",
      type: "string",
      format: "",
    },
    order: {
      baseName: "order",
      type: "WidgetSort",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return WidgetFieldSort.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): WidgetFieldSort {
    const res = new WidgetFieldSort();

    if (data.column === undefined) {
      throw new TypeError(
        "missing required attribute 'column' on 'WidgetFieldSort' object"
      );
    }
    res.column = ObjectSerializer.deserialize(data.column, "string", "");

    if (data.order === undefined) {
      throw new TypeError(
        "missing required attribute 'order' on 'WidgetFieldSort' object"
      );
    }
    if (["asc", "desc", undefined].includes(data.order)) {
      res.order = data.order;
    } else {
      const raw = new WidgetFieldSort();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: WidgetFieldSort): { [key: string]: any } {
    const attributeTypes = WidgetFieldSort.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.column === undefined) {
      throw new TypeError(
        "missing required attribute 'column' on 'WidgetFieldSort' object"
      );
    }
    res.column = ObjectSerializer.serialize(data.column, "string", "");

    if (data.order === undefined) {
      throw new TypeError(
        "missing required attribute 'order' on 'WidgetFieldSort' object"
      );
    }
    if (["asc", "desc", undefined].includes(data.order)) {
      res.order = data.order;
    } else {
      throw TypeError(`invalid enum value ${data.order} for order`);
    }

    return res;
  }

  public constructor() {}
}
