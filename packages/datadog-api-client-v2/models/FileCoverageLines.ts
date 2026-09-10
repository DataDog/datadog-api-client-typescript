/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Per-file line coverage data including executable, covered, and added lines.
 */
export class FileCoverageLines {
  /**
   * Line numbers that were added in the specified scope (for example, in a PR diff).
   */
  "addedLines"?: Array<number>;
  /**
   * Line numbers that were covered by tests.
   */
  "coveredLines"?: Array<number>;
  /**
   * Line numbers that are executable (can be covered).
   */
  "executableLines"?: Array<number>;

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
    },
    coveredLines: {
      baseName: "covered_lines",
      type: "Array<number>",
    },
    executableLines: {
      baseName: "executable_lines",
      type: "Array<number>",
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
