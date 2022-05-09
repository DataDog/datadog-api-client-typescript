/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsURLParserType } from "./LogsURLParserType";

import { AttributeTypeMap } from "../util";

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
  /**
   * Type of logs URL parser.
   */
  "type": LogsURLParserType;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    normalizeEndingSlashes: {
      baseName: "normalize_ending_slashes",
      type: "boolean",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
      required: true,
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsURLParserType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsURLParser.attributeTypeMap;
  }

  public constructor() {}
}
