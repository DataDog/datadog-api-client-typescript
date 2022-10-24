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
 * Description of errors.
 */
export class AWSLogsAsyncError {
  /**
   * Code properties
   */
  "code"?: string;
  /**
   * Message content.
   */
  "message"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    code: {
      baseName: "code",
      type: "string",
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
    return AWSLogsAsyncError.attributeTypeMap;
  }

  public constructor() {}
}
