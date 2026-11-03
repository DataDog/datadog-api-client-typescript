/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Source code around a stack frame. Empty when the source code is unavailable.
 */
export class IssueSampleCodeSnippet {
  /**
   * Lines of source code.
   */
  "lines"?: Array<string>;
  /**
   * Line number of the first line of the snippet, starting at 1.
   */
  "offset"?: number;

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
    lines: {
      baseName: "lines",
      type: "Array<string>",
    },
    offset: {
      baseName: "offset",
      type: "number",
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
    return IssueSampleCodeSnippet.attributeTypeMap;
  }

  public constructor() {}
}
