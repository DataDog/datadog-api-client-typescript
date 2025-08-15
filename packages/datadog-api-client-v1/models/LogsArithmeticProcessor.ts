/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArithmeticProcessorType } from "./LogsArithmeticProcessorType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Use the Arithmetic Processor to add a new attribute (without spaces or special characters
 * in the new attribute name) to a log with the result of the provided formula.
 * This enables you to remap different time attributes with different units into a single attribute,
 * or to compute operations on attributes within the same log.
 *
 * The formula can use parentheses and the basic arithmetic operators `-`, `+`, `*`, `/`.
 *
 * By default, the calculation is skipped if an attribute is missing.
 * Select “Replace missing attribute by 0” to automatically populate
 * missing attribute values with 0 to ensure that the calculation is done.
 * An attribute is missing if it is not found in the log attributes,
 * or if it cannot be converted to a number.
 *
 * *Notes*:
 *
 * - The operator `-` needs to be space split in the formula as it can also be contained in attribute names.
 * - If the target attribute already exists, it is overwritten by the result of the formula.
 * - Results are rounded up to the 9th decimal. For example, if the result of the formula is `0.1234567891`,
 *   the actual value stored for the attribute is `0.123456789`.
 * - If you need to scale a unit of measure,
 *   see [Scale Filter](https://docs.datadoghq.com/logs/log_configuration/parsing/?tab=filter#matcher-and-filter).
 */
export class LogsArithmeticProcessor {
  /**
   * Arithmetic operation between one or more log attributes.
   */
  "expression": string;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * If `true`, it replaces all missing attributes of expression by `0`, `false`
   * skip the operation if an attribute is missing.
   */
  "isReplaceMissing"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Name of the attribute that contains the result of the arithmetic operation.
   */
  "target": string;
  /**
   * Type of logs arithmetic processor.
   */
  "type": LogsArithmeticProcessorType;

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
    expression: {
      baseName: "expression",
      type: "string",
      required: true,
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    isReplaceMissing: {
      baseName: "is_replace_missing",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    target: {
      baseName: "target",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsArithmeticProcessorType",
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
    return LogsArithmeticProcessor.attributeTypeMap;
  }

  public constructor() {}
}
