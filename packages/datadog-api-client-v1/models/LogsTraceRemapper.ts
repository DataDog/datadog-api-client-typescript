/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsTraceRemapperType } from "./LogsTraceRemapperType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
    sources: {
      baseName: "sources",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "LogsTraceRemapperType",
      required: true,
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
