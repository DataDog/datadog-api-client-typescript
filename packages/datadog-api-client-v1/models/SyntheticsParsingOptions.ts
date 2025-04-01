/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SyntheticsLocalVariableParsingOptionsType } from "./SyntheticsLocalVariableParsingOptionsType";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Parsing options for variables to extract.
*/
export class SyntheticsParsingOptions {
  /**
   * When type is `http_header` or `grpc_metadata`, name of the header or metadatum to extract.
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
   * Property of the Synthetic Test Response to extract into a local variable.
  */
  "type"?: SyntheticsLocalVariableParsingOptionsType;

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
    "field": {
      "baseName": "field",
      "type": "string",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "parser": {
      "baseName": "parser",
      "type": "SyntheticsVariableParser",
    },
    "secure": {
      "baseName": "secure",
      "type": "boolean",
    },
    "type": {
      "baseName": "type",
      "type": "SyntheticsLocalVariableParsingOptionsType",
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return SyntheticsParsingOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









