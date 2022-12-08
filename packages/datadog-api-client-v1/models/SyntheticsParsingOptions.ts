/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariableParseTestOptionsType } from "./SyntheticsGlobalVariableParseTestOptionsType";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

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
   * Property of the Synthetics Test Response to use for a Synthetics global variable.
   */
  "type"?: SyntheticsGlobalVariableParseTestOptionsType | UnparsedObject;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    field: {
      baseName: "field",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    parser: {
      baseName: "parser",
      type: "SyntheticsVariableParser",
    },
    type: {
      baseName: "type",
      type: "SyntheticsGlobalVariableParseTestOptionsType",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsParsingOptions.attributeTypeMap;
  }

  public constructor() {}
}
