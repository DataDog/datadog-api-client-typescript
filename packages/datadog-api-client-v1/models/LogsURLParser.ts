/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { LogsURLParserType } from "./LogsURLParserType";
import { ObjectSerializer } from "./ObjectSerializer";

/**
 * This processor extracts query parameters and other important parameters from a URL.
 */

export class LogsURLParser {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Normalize the ending slashes or not.
   */
  "normalizeEndingSlashes"?: boolean;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  /**
   * Name of the parent attribute that contains all the extracted details from the `sources`.
   */
  "target": string;
  "type": LogsURLParserType;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
      format: "",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    normalizeEndingSlashes: {
      baseName: "normalize_ending_slashes",
      type: "boolean",
      format: "",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      format: "",
    },
    target: {
      baseName: "target",
      type: "string",
      format: "",
    },
    type: {
      baseName: "type",
      type: "LogsURLParserType",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return LogsURLParser.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): LogsURLParser {
    const res = new LogsURLParser();

    res.isEnabled = ObjectSerializer.deserialize(
      data.is_enabled,
      "boolean",
      ""
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.normalizeEndingSlashes = ObjectSerializer.deserialize(
      data.normalize_ending_slashes,
      "boolean",
      ""
    );

    if (data.sources === undefined) {
      throw new TypeError(
        "missing required attribute 'sources' on 'LogsURLParser' object"
      );
    }
    res.sources = ObjectSerializer.deserialize(
      data.sources,
      "Array<string>",
      ""
    );

    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'LogsURLParser' object"
      );
    }
    res.target = ObjectSerializer.deserialize(data.target, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsURLParser' object"
      );
    }
    if (["url-parser", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  static serialize(data: LogsURLParser): { [key: string]: any } {
    const attributeTypes = LogsURLParser.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.is_enabled = ObjectSerializer.serialize(data.isEnabled, "boolean", "");

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.normalize_ending_slashes = ObjectSerializer.serialize(
      data.normalizeEndingSlashes,
      "boolean",
      ""
    );

    if (data.sources === undefined) {
      throw new TypeError(
        "missing required attribute 'sources' on 'LogsURLParser' object"
      );
    }
    res.sources = ObjectSerializer.serialize(data.sources, "Array<string>", "");

    if (data.target === undefined) {
      throw new TypeError(
        "missing required attribute 'target' on 'LogsURLParser' object"
      );
    }
    res.target = ObjectSerializer.serialize(data.target, "string", "");

    if (data.type === undefined) {
      throw new TypeError(
        "missing required attribute 'type' on 'LogsURLParser' object"
      );
    }
    if (["url-parser", undefined].includes(data.type)) {
      res.type = data.type;
    } else {
      throw TypeError(`invalid enum value ${data.type} for type`);
    }

    return res;
  }

  public constructor() {}
}
