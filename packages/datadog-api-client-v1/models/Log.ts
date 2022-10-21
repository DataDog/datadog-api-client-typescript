/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogContent } from "./LogContent";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object describing a log after being processed and stored by Datadog.
 */
export class Log {
  /**
   * JSON object containing all log attributes and their associated values.
   */
  "content"?: LogContent;
  /**
   * Unique ID of the Log.
   */
  "id"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    content: {
      baseName: "content",
      type: "LogContent",
    },
    id: {
      baseName: "id",
      type: "string",
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
