import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSampleStackFrame } from "./IssueSampleStackFrame";

/**
 * Parsed stack trace of the error. Only the sample picked by the `git_metadata` bias has frames.
 */
export class IssueSampleErrorStack {
  /**
   * Stack frames, from the top of the stack.
   */
  "frames"?: Array<IssueSampleStackFrame>;
  /**
   * Language the stack trace was parsed as.
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
