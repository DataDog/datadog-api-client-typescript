/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariableParseTestOptionsType } from "./SyntheticsGlobalVariableParseTestOptionsType";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Parsing options for variables to extract.
 */
export class SyntheticsParsingOptions {
  /**
   * When type is `http_header`, name of the header to use to extract the value.
   */
  "field"?: string;
  /**
   * Name of the variable to extract.
   */
  "name"?: string;
  /**
   * Details of the parser to use for the global variable.
   */
  "parser"?: SyntheticsVariableParser;
  /**
   * Determines whether or not the extracted value will be obfuscated.
   */
  "secure"?: boolean;
  /**
   * Property of the Synthetic Test Response to use for a Synthetic global variable.
   */
  "type"?: SyntheticsGlobalVariableParseTestOptionsType;

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
    name: {
      type: "string",
    },
    parser: {
      type: "SyntheticsVariableParser",
    },
    secure: {
      type: "boolean",
    },
    type: {
      type: "SyntheticsGlobalVariableParseTestOptionsType",
    },
  };
}
