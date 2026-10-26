/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueSampleCodeSnippet } from "./IssueSampleCodeSnippet";
import { IssueSampleGitFileLocation } from "./IssueSampleGitFileLocation";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
