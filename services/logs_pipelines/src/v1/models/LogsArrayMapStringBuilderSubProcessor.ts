import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsStringBuilderProcessorType } from "./LogsStringBuilderProcessorType";

/**
 * A string builder sub-processor for use inside an array-map processor.
 * Unlike the top-level string builder processor, `is_enabled` is not supported.
 */
export class LogsArrayMapStringBuilderSubProcessor {
  /**
   * Replace missing attribute values with an empty string.
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
   * Formula with one or more attributes and raw text.
   */
  "template": string;
  /**
   * Type of logs string builder processor.
   */
  "type": LogsStringBuilderProcessorType;
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
    template: {
      baseName: "template",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "LogsStringBuilderProcessorType",
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
    return LogsArrayMapStringBuilderSubProcessor.attributeTypeMap;
  }

  public constructor() {}
}
