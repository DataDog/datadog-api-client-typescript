/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsAPIError } from "./LogsAPIError";

import { AttributeTypeMap } from "../util";

/**
 * Response returned by the Logs API when errors occur.
 */
export class LogsAPIErrorResponse {
  /**
   * Error returned by the Logs API
   */
  "error"?: LogsAPIError;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    error: {
      baseName: "error",
      type: "LogsAPIError",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAPIErrorResponse.attributeTypeMap;
  }

  public constructor() {}
}
