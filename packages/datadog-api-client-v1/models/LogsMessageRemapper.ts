/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsMessageRemapperType } from "./LogsMessageRemapperType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The message is a key attribute in Datadog.
 * It is displayed in the message column of the Log Explorer and you can do full string search on it.
 * Use this Processor to define one or more attributes as the official log message.
 *
 * **Note:** If multiple log message remapper processors can be applied to a given log,
 * only the first one (according to the pipeline order) is taken into account.
 */
export class LogsMessageRemapper {
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
  "sources": Array<string>;
  /**
   * Type of logs message remapper.
   */
  "type": LogsMessageRemapperType;

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
      type: "string",
    },
    sources: {
      type: "Array<string>",
      required: true,
    },
    type: {
      type: "LogsMessageRemapperType",
      required: true,
    },
  };
}
