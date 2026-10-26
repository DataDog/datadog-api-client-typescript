/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueSampleStackFrame } from "./IssueSampleStackFrame";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parsed stack trace of the error. Only the sample picked by the `git_metadata` bias has frames.
 */
export class IssueSampleErrorStack {
  /**
   * Stack frames, from the top of the stack.
   */
  "frames"?: Array<IssueSampleStackFrame>;
  /**
   * Programming language used to parse the stack trace.
   */
  "language"?: string;

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
    frames: {
      baseName: "frames",
      type: "Array<IssueSampleStackFrame>",
    },
    language: {
      baseName: "language",
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
    return IssueSampleErrorStack.attributeTypeMap;
  }

  public constructor() {}
}
