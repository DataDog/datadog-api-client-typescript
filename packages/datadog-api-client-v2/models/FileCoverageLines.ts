/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap, Int64 } from "../../datadog-api-client-common/util";

/**
 * Per-file line coverage data including executable, covered, and added lines.
 */
export class FileCoverageLines {
  /**
   * Line numbers that were added in the specified scope (for example, in a PR diff).
   */
  "addedLines"?: Array<Int64>;
  /**
   * Line numbers that were covered by tests.
   */
  "coveredLines"?: Array<Int64>;
  /**
   * Line numbers that are executable (can be covered).
   */
  "executableLines"?: Array<Int64>;

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
    addedLines: {
      baseName: "added_lines",
      type: "Array<number>",
      format: "int64",
    },
    coveredLines: {
      baseName: "covered_lines",
      type: "Array<number>",
      format: "int64",
    },
    executableLines: {
      baseName: "executable_lines",
      type: "Array<number>",
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
    return FileCoverageLines.attributeTypeMap;
  }

  public constructor() {}
}
