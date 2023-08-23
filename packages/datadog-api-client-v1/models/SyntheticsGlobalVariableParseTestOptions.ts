/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariableParseTestOptionsType } from "./SyntheticsGlobalVariableParseTestOptionsType";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parser options to use for retrieving a Synthetic global variable from a Synthetic test. Used in conjunction with `parse_test_public_id`.
 */
export class SyntheticsGlobalVariableParseTestOptions {
  /**
   * When type is `http_header`, name of the header to use to extract the value.
   */
  "field"?: string;
  /**
   * When type is `local_variable`, name of the local variable to use to extract the value.
   */
  "localVariableName"?: string;
  /**
   * Details of the parser to use for the global variable.
   */
  "parser"?: SyntheticsVariableParser;
  /**
   * Property of the Synthetic Test Response to use for a Synthetic global variable.
   */
  "type": SyntheticsGlobalVariableParseTestOptionsType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    field: {
      type: "string",
    },
    localVariableName: {
      type: "string",
    },
    parser: {
      type: "SyntheticsVariableParser",
    },
    type: {
      type: "SyntheticsGlobalVariableParseTestOptionsType",
      required: true,
    },
  };
}
