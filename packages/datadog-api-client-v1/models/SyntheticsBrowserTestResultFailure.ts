/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsBrowserTestFailureCode } from "./SyntheticsBrowserTestFailureCode";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The browser test failure details.
 */
export class SyntheticsBrowserTestResultFailure {
  /**
   * Error code that can be returned by a Synthetic test.
   */
  "code"?: SyntheticsBrowserTestFailureCode;
  /**
   * The browser test error message.
   */
  "message"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    code: {
      baseName: "code",
      type: "SyntheticsBrowserTestFailureCode",
    },
    message: {
      baseName: "message",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsBrowserTestResultFailure.attributeTypeMap;
  }

  public constructor() {}
}
