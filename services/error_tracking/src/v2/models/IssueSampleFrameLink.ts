import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IssueSampleGitFileLocation } from "./IssueSampleGitFileLocation";

/**
 * Source code location of a stack frame.
 */
export class IssueSampleFrameLink {
  /**
   * Location of a stack frame in a repository file. Empty when the source code is unavailable.
   */
  "codeLocation": IssueSampleGitFileLocation;
  /**
   * Index of the frame in the stack trace, starting at 0.
   */
  "frameId": number;
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
    codeLocation: {
      baseName: "code_location",
      type: "IssueSampleGitFileLocation",
      required: true,
    },
    frameId: {
      baseName: "frame_id",
      type: "number",
      required: true,
      format: "int64",
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
    return IssueSampleFrameLink.attributeTypeMap;
  }

  public constructor() {}
}
