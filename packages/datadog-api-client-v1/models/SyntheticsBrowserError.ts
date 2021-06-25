/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { SyntheticsBrowserErrorType } from "./SyntheticsBrowserErrorType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * Error response object for a browser test.
 */

export class SyntheticsBrowserError {
  /**
   * Description of the error.
   */
  "description": string;
  /**
   * Name of the error.
   */
  "name": string;
  /**
   * Status Code of the error.
   */
  "statusCode"?: number;
  "type": SyntheticsBrowserErrorType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    description: {
      baseName: "description",
      type: "string",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    statusCode: {
      baseName: "statusCode",
      type: "number",
      format: "int64",
    },
    type: {
      baseName: "type",
      type: "SyntheticsBrowserErrorType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return SyntheticsBrowserError.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): SyntheticsBrowserError {
    const res = new SyntheticsBrowserError();

    if (data.description === undefined) {
      throw new TypeError(
        "missing required attribute 'description' on 'SyntheticsBrowserError' object"
      );
    }
    res.description = ObjectSerializer.deserialize(
      data.description,
      "string",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'SyntheticsBrowserError' object"
      );
    }
    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.statusCode = ObjectSerializer.deserialize(
      data.statusCode,
      "number",
      "int64"
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SyntheticsBrowserError' object"
      );
    }
    if (["network", "js", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  static serialize(data: SyntheticsBrowserError): { [key: string]: any } {
    const attributeTypes = SyntheticsBrowserError.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    if (data.description === undefined) {
      throw new TypeError(
        "missing required attribute 'description' on 'SyntheticsBrowserError' object"
      );
    }
    res.description = ObjectSerializer.serialize(
      data.description,
      "string",
      ""
    );

    if (data.name === undefined) {
      throw new TypeError(
        "missing required attribute 'name' on 'SyntheticsBrowserError' object"
      );
    }
    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.statusCode = ObjectSerializer.serialize(
      data.statusCode,
      "number",
      "int64"
    );

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'SyntheticsBrowserError' object"
      );
    }
    if (["network", "js", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
