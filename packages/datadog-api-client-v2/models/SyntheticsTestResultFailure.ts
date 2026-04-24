/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details about the failure of a Synthetic test.
 */
export class SyntheticsTestResultFailure {
  /**
   * Error code for the failure.
   */
  "code"?: string;
  /**
   * Internal error code used for debugging.
   */
  "internalCode"?: string;
  /**
   * Internal error message used for debugging.
   */
  "internalMessage"?: string;
  /**
   * Error message for the failure.
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
      type: "string",
    },
    internalCode: {
      baseName: "internal_code",
      type: "string",
    },
    internalMessage: {
      baseName: "internal_message",
      type: "string",
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
    return SyntheticsTestResultFailure.attributeTypeMap;
  }

  public constructor() {}
}
