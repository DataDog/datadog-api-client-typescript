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
 * An object describing the error with error type and error message.
 */
export class SLOHistoryResponseErrorWithType {
  /**
   * A message with more details about the error.
   */
  "errorMessage": string;
  /**
   * Type of the error.
   */
  "errorType": string;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    errorMessage: {
      baseName: "error_message",
      type: "string",
      required: true,
    },
    errorType: {
      baseName: "error_type",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SLOHistoryResponseErrorWithType.attributeTypeMap;
  }

  public constructor() {}
}
