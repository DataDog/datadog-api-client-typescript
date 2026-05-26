import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { AnalysisRequestRule } from "./AnalysisRequestRule";

/**
 * The attributes of the analysis request, containing the source code and rules to apply.
 */
export class AnalysisRequestDataAttributes {
  /**
   * The base64-encoded source code to analyze.
   */
  "code": string;
  /**
   * The encoding of the source code file (must be `utf-8`).
   */
  "fileEncoding": string;
  /**
   * The name of the file being analyzed.
   */
  "filename": string;
  /**
   * The programming language of the source code.
   */
  "language": string;
  /**
   * The list of static analysis rules to apply during analysis.
   */
  "rules": Array<AnalysisRequestRule>;
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
      required: true,
    },
    fileEncoding: {
      baseName: "file_encoding",
      type: "string",
      required: true,
    },
    filename: {
      baseName: "filename",
      type: "string",
      required: true,
    },
    language: {
      baseName: "language",
      type: "string",
      required: true,
    },
    rules: {
      baseName: "rules",
      type: "Array<AnalysisRequestRule>",
      required: true,
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
    return AnalysisRequestDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
