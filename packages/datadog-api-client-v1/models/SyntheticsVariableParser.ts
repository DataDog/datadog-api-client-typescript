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
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Details of the parser to use for the global variable.
 */

export class SyntheticsVariableParser {
  "type": SyntheticsGlobalVariableParserType;
  /**
   * Regex or JSON path used for the parser. Not used with type `raw`.
   */
  "value"?: string;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    type: {
      baseName: "type",
      type: "SyntheticsGlobalVariableParserType",
      format: "",
    },
    value: {
      baseName: "value",
      type: "string",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsVariableParser.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsVariableParser {
    const res = new SyntheticsVariableParser();

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SyntheticsVariableParser' object"
      );
    }
    if (
      ["raw", "json_path", "regex", "x_path", undefined].includes(data.type)
    ) {
      res.type = data.type;
    } else {
      const raw = new SyntheticsVariableParser();
      raw.unparsedObject = data;
      return raw;
    }

    res.value = ObjectSerializer.deserialize(data.value, "string", "");

    return res;
  }

  static serialize(data: SyntheticsVariableParser): { [key: string]: any } {
    const attributeTypes = SyntheticsVariableParser.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SyntheticsVariableParser' object"
      );
    }
    if (
      ["raw", "json_path", "regex", "x_path", undefined].includes(data.type)
    ) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    res.value = ObjectSerializer.serialize(data.value, "string", "");

    return res;
  }

  public constructor() {}
}
