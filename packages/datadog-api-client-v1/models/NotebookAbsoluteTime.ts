/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

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

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    end: {
      baseName: "end",
      type: "Date",
      required: true,
      format: "date-time",
    },
    live: {
      baseName: "live",
      type: "boolean",
    },
    start: {
      baseName: "start",
      type: "Date",
      required: true,
      format: "date-time",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return NotebookAbsoluteTime.attributeTypeMap;
  }

  public constructor() {}
}
