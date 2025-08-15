/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArrayProcessorOperation } from "./LogsArrayProcessorOperation";
import { LogsArrayProcessorType } from "./LogsArrayProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A processor for extracting, aggregating, or transforming values from JSON arrays within your logs.
 * Supported operations are:
 * - Select value from matching element
 * - Compute array length
 * - Append a value to an array
 */
export class LogsArrayProcessor {
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Configuration of the array processor operation to perform.
   */
  "operation": LogsArrayProcessorOperation;
  /**
   * Type of logs array processor.
   */
  "type": LogsArrayProcessorType;

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
    operation: {
      baseName: "operation",
      type: "LogsArrayProcessorOperation",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsArrayProcessorType",
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
    return LogsArrayProcessor.attributeTypeMap;
  }

  public constructor() {}
}
