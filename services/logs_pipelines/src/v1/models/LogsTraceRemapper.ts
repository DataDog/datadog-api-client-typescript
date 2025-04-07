import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsTraceRemapperType } from "./LogsTraceRemapperType";

/**
 * There are two ways to improve correlation between application traces and logs.
 * 
 *   1. Follow the documentation on [how to inject a trace ID in the application logs](https://docs.datadoghq.com/tracing/connect_logs_and_traces)
 *   and by default log integrations take care of all the rest of the setup.
 * 
 *   2. Use the Trace remapper processor to define a log attribute as its associated trace ID.
 */
export class LogsTraceRemapper {
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
   * Type of logs trace remapper.
   */
  "type": LogsTraceRemapperType;
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
      type: "LogsTraceRemapperType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return LogsTraceRemapper.attributeTypeMap;
  }

  public constructor() {}
}
