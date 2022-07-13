/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Error returned by the Logs API
 */
export class LogsAPIError {
  /**
   * Code identifying the error
   */
  "code"?: string;
  /**
   * Additional error details
   */
  "details"?: Array<LogsAPIError>;
  /**
   * Error message
   */
  "message"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    code: {
      baseName: "code",
      type: "string",
    },
    details: {
      baseName: "details",
      type: "Array<LogsAPIError>",
    },
    message: {
      baseName: "message",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsAPIError.attributeTypeMap;
  }

  public constructor() {}
}
