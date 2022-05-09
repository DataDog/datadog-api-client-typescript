/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariableParseTestOptionsType } from "./SyntheticsGlobalVariableParseTestOptionsType";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

import { AttributeTypeMap } from "../util";

/**
 * Parser options to use for retrieving a Synthetics global variable from a Synthetics Test. Used in conjunction with `parse_test_public_id`.
 */
export class SyntheticsGlobalVariableParseTestOptions {
  /**
   * When type is `http_header`, name of the header to use to extract the value.
   */
  "field"?: string;
  /**
   * Details of the parser to use for the global variable.
   */
  "parser": SyntheticsVariableParser;
  /**
   * Property of the Synthetics Test Response to use for a Synthetics global variable.
   */
  "type": SyntheticsGlobalVariableParseTestOptionsType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    field: {
      baseName: "field",
      type: "string",
    },
    parser: {
      baseName: "parser",
      type: "SyntheticsVariableParser",
      required: true,
    },
    type: {
      baseName: "type",
      type: "SyntheticsGlobalVariableParseTestOptionsType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsGlobalVariableParseTestOptions.attributeTypeMap;
  }

  public constructor() {}
}
