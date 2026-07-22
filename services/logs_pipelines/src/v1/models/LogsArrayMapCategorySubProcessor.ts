import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsCategoryProcessorCategory } from "./LogsCategoryProcessorCategory";
import { LogsCategoryProcessorType } from "./LogsCategoryProcessorType";

/**
 * A category sub-processor for use inside an array-map processor.
 * Unlike the top-level category processor, `is_enabled` is not supported.
 */
export class LogsArrayMapCategorySubProcessor {
  /**
   * Array of filters to match against a log and the corresponding value to assign.
   */
  "categories": Array<LogsCategoryProcessorCategory>;
  /**
   * Name of the sub-processor.
   */
  "name"?: string;
  /**
   * Target attribute path for the category value.
   */
  "target": string;
  /**
   * Type of logs category processor.
   */
  "type": LogsCategoryProcessorType;
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
    categories: {
      baseName: "categories",
      type: "Array<LogsCategoryProcessorCategory>",
      required: true,
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
      type: "LogsCategoryProcessorType",
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
    return LogsArrayMapCategorySubProcessor.attributeTypeMap;
  }

  public constructor() {}
}
