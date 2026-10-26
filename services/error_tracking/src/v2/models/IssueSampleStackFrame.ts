import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSampleCodeSnippet } from "./IssueSampleCodeSnippet";
import { IssueSampleGitFileLocation } from "./IssueSampleGitFileLocation";

/**
 * A stack frame.
 */
export class IssueSampleStackFrame {
  /**
   * Source code around a stack frame. Empty when the source code is unavailable.
   */
  "codeSnippet"?: IssueSampleCodeSnippet;
  /**
   * Location of a stack frame in a repository file. Empty when the source code is unavailable.
   */
  "gitFileLocation"?: IssueSampleGitFileLocation;
  /**
   * Text of the frame, as it appears in the stack trace.
   */
  "text"?: string;
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
    codeSnippet: {
      baseName: "code_snippet",
      type: "IssueSampleCodeSnippet",
    },
    gitFileLocation: {
      baseName: "git_file_location",
      type: "IssueSampleGitFileLocation",
    },
    text: {
      baseName: "text",
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
    return IssueSampleStackFrame.attributeTypeMap;
  }

  public constructor() {}
}
