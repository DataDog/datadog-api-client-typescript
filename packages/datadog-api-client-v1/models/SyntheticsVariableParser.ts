/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsGlobalVariableParserType } from "./SyntheticsGlobalVariableParserType";
import { AttributeTypeMap } from "./ObjectSerializer";

/**
 * Details of the parser to use for the global variable.
 */

export class SyntheticsVariableParser {
  "type": SyntheticsGlobalVariableParserType;
  /**
   * Regex or JSON path used for the parser. Not used with type `raw`.
   */
  "value"?: string;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    type: {
      baseName: "type",
      type: "SyntheticsGlobalVariableParserType",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return SyntheticsVariableParser.attributeTypeMap;
  }

  public constructor() {}
}
