/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogAttributes } from "./LogAttributes";
import { LogType } from "./LogType";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object description of a log after being processed and stored by Datadog.
 */
export class Log {
  /**
   * JSON object containing all log attributes and their associated values.
   */
  "attributes"?: LogAttributes;
  /**
   * Unique ID of the Log.
   */
  "id"?: string;
  /**
   * Type of the event.
   */
  "type"?: LogType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "LogAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    type: {
      baseName: "type",
      type: "LogType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return Log.attributeTypeMap;
  }

  public constructor() {}
}
