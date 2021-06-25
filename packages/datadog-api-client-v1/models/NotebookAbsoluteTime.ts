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
 * Absolute timeframe.
 */

export class NotebookAbsoluteTime {
  /**
   * The end time.
   */
  "end": Date;
  /**
   * Indicates whether the timeframe should be shifted to end at the current time.
   */
  "live"?: boolean;
  /**
   * The start time.
   */
  "start": Date;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    end: {
      baseName: "end",
      type: "Date",
      format: "date-time",
    },
    live: {
      baseName: "live",
      type: "boolean",
      format: "",
    },
    start: {
      baseName: "start",
      type: "Date",
      format: "date-time",
    },
  };

  static getAttributeTypeMap() {
    return NotebookAbsoluteTime.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): NotebookAbsoluteTime {
    const res = new NotebookAbsoluteTime();

    if (data.end === undefined) {
      throw new TypeError(
        "missing required attribute 'end' on 'NotebookAbsoluteTime' object"
      );
    }
    res.end = ObjectSerializer.deserialize(data.end, "Date", "date-time");

    res.live = ObjectSerializer.deserialize(data.live, "boolean", "");

    if (data.start === undefined) {
      throw new TypeError(
        "missing required attribute 'start' on 'NotebookAbsoluteTime' object"
      );
    }
    res.start = ObjectSerializer.deserialize(data.start, "Date", "date-time");

    return res;
  }

  static serialize(data: NotebookAbsoluteTime): { [key: string]: any } {
    const attributeTypes = NotebookAbsoluteTime.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.end === undefined) {
      throw new TypeError(
        "missing required attribute 'end' on 'NotebookAbsoluteTime' object"
      );
    }
    res.end = ObjectSerializer.serialize(data.end, "Date", "date-time");

    res.live = ObjectSerializer.serialize(data.live, "boolean", "");

    if (data.start === undefined) {
      throw new TypeError(
        "missing required attribute 'start' on 'NotebookAbsoluteTime' object"
      );
    }
    res.start = ObjectSerializer.serialize(data.start, "Date", "date-time");

    return res;
  }

  public constructor() {}
}
