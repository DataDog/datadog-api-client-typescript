import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsArithmeticProcessorType } from "./LogsArithmeticProcessorType";

/**
 * An arithmetic sub-processor for use inside an array-map processor.
 * Unlike the top-level arithmetic processor, `is_enabled` is not supported.
 */
export class LogsArrayMapArithmeticSubProcessor {
  /**
   * Arithmetic operation to perform.
   */
  "expression": string;
  /**
   * Replace missing attribute values with 0.
   */
  "isReplaceMissing"?: boolean;
  /**
   * Name of the sub-processor.
   */
  "name"?: string;
  /**
   * Target attribute path for the result.
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
  "additionalProperties"?: { [key: string]: any; };
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
    return LogsArrayMapArithmeticSubProcessor.attributeTypeMap;
  }

  public constructor() {}
}
