/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsGlobalVariableParseTestOptionsType } from "./SyntheticsGlobalVariableParseTestOptionsType";
import { SyntheticsVariableParser } from "./SyntheticsVariableParser";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Parser options to use for retrieving a Synthetics global variable from a Synthetics Test. Used in conjunction with `parse_test_public_id`.
 */

export class SyntheticsGlobalVariableParseTestOptions {
  /**
   * When type is `http_header`, name of the header to use to extract the value.
   */
  "field"?: string;
  "parser": SyntheticsVariableParser;
  "type": SyntheticsGlobalVariableParseTestOptionsType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    field: {
      baseName: "field",
      type: "string",
      format: "",
    },
    parser: {
      baseName: "parser",
      type: "SyntheticsVariableParser",
      format: "",
    },
    type: {
      baseName: "type",
      type: "SyntheticsGlobalVariableParseTestOptionsType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsGlobalVariableParseTestOptions.attributeTypeMap;
  }

  static deserialize(data: {
    [key: string]: any;
  }): SyntheticsGlobalVariableParseTestOptions {
    const res = new SyntheticsGlobalVariableParseTestOptions();

    res.field = ObjectSerializer.deserialize(data.field, "string", "");

    if (data.parser === undefined) {
      throw new TypeError(
        "missing required attribute 'parser' on 'SyntheticsGlobalVariableParseTestOptions' object"
      );
    }
    res.parser = ObjectSerializer.deserialize(
      data.parser,
      "SyntheticsVariableParser",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SyntheticsGlobalVariableParseTestOptions' object"
      );
    }
    if (["http_body", "http_header", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      const raw = new SyntheticsGlobalVariableParseTestOptions();
      raw.unparsedObject = data;
      return raw;
    }

    return res;
  }

  static serialize(data: SyntheticsGlobalVariableParseTestOptions): {
    [key: string]: any;
  } {
    const attributeTypes =
      SyntheticsGlobalVariableParseTestOptions.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data?.unparsedObject !== undefined) {
      return data.unparsedObject;
    }
    res.field = ObjectSerializer.serialize(data.field, "string", "");

    if (data.parser === undefined) {
      throw new TypeError(
        "missing required attribute 'parser' on 'SyntheticsGlobalVariableParseTestOptions' object"
      );
    }
    res.parser = ObjectSerializer.serialize(
      data.parser,
      "SyntheticsVariableParser",
      ""
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SyntheticsGlobalVariableParseTestOptions' object"
      );
    }
    if (["http_body", "http_header", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
