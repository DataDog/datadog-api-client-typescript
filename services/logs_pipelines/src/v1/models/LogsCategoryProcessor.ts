import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsCategoryProcessorCategory } from "./LogsCategoryProcessorCategory";
import { LogsCategoryProcessorType } from "./LogsCategoryProcessorType";

/**
 * Use the Category Processor to add a new attribute (without spaces or special characters in the new attribute name)
 * to a log matching a provided search query. Use categories to create groups for an analytical view.
 * For example, URL groups, machine groups, environments, and response time buckets.
 * 
 * **Notes**:
 * 
 * - The syntax of the query is the one of Logs Explorer search bar.
 *   The query can be done on any log attribute or tag, whether it is a facet or not.
 *   Wildcards can also be used inside your query.
 * - Once the log has matched one of the Processor queries, it stops.
 *   Make sure they are properly ordered in case a log could match several queries.
 * - The names of the categories must be unique.
 * - Once defined in the Category Processor, you can map categories to log status using the Log Status Remapper.
 */
export class LogsCategoryProcessor {
  /**
   * Array of filters to match or not a log and their
   * corresponding `name` to assign a custom value to the log.
   */
  "categories": Array<LogsCategoryProcessorCategory>;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Name of the target attribute which value is defined by the matching category.
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
  "additionalProperties"?: { [key: string]: any };
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
    isEnabled: {
      baseName: "is_enabled",
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
      type: "LogsCategoryProcessorType",
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
    return LogsCategoryProcessor.attributeTypeMap;
  }

  public constructor() {}
}
