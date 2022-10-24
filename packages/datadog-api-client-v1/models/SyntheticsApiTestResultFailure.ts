/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsApiTestFailureCode } from "./SyntheticsApiTestFailureCode";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * The API test failure details.
 */
export class SyntheticsApiTestResultFailure {
  /**
   * Error code that can be returned by a Synthetic test.
   */
  "code"?: SyntheticsApiTestFailureCode;
  /**
   * The API test error message.
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
      type: "SyntheticsApiTestFailureCode",
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
    return SyntheticsApiTestResultFailure.attributeTypeMap;
  }

  public constructor() {}
}
