/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsGlobalVariableParserType } from "./SyntheticsGlobalVariableParserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Details of the parser to use for the global variable.
 */
export class SyntheticsVariableParser {
  /**
   * Type of parser for a Synthetic global variable from a synthetics test.
   */
  "type": SyntheticsGlobalVariableParserType;
  /**
   * Regex or JSON path used for the parser. Not used with type `raw`.
   */
  "value"?: string;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      type: "SyntheticsGlobalVariableParserType",
      required: true,
    },
    value: {
      type: "string",
    },
  };
}
