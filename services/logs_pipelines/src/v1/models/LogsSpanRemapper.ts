import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsSpanRemapperType } from "./LogsSpanRemapperType";

/**
 * There are two ways to define correlation between application spans and logs:
 *
 *   1. Follow the documentation on [how to inject a span ID in the application logs](https://docs.datadoghq.com/tracing/connect_logs_and_traces).
 *   Log integrations automatically handle all remaining setup steps by default.
 *
 *   2. Use the span remapper processor to define a log attribute as its associated span ID.
 */
export class LogsSpanRemapper {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Array of source attributes.
   */
  "sources"?: Array<string>;
  /**
   * Type of logs span remapper.
   */
  "type": LogsSpanRemapperType;
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
    name: {
      baseName: "name",
      type: "string",
    },
    sources: {
      baseName: "sources",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "LogsSpanRemapperType",
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
    return LogsSpanRemapper.attributeTypeMap;
  }

  public constructor() {}
}
