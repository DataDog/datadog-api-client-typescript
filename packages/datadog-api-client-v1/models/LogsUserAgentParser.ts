/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsUserAgentParserType } from "./LogsUserAgentParserType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The User-Agent parser takes a User-Agent attribute and extracts the OS, browser, device, and other user data.
 * It recognizes major bots like the Google Bot, Yahoo Slurp, and Bing.
 */
export class LogsUserAgentParser {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Define if the source attribute is URL encoded or not.
   */
  "isEncoded"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Array of source attributes.
   */
  "sources": Array<string>;
  /**
   * Name of the parent attribute that contains all the extracted details from the `sources`.
   */
  "target": string;
  /**
   * Type of logs User-Agent parser.
   */
  "type": LogsUserAgentParserType;

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
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    isEncoded: {
      baseName: "is_encoded",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
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
      type: "LogsUserAgentParserType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsUserAgentParser.attributeTypeMap;
  }

  public constructor() {}
}
