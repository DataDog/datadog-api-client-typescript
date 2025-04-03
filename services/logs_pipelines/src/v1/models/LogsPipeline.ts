import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsFilter } from "./LogsFilter";
import { LogsProcessor } from "./LogsProcessor";

/**
 * Pipelines and processors operate on incoming logs,
 * parsing and transforming them into structured attributes for easier querying.
 *
 * **Note**: These endpoints are only available for admin users.
 * Make sure to use an application key created by an admin.
 */
export class LogsPipeline {
  /**
   * A description of the pipeline.
   */
  "description"?: string;
  /**
   * Filter for logs.
   */
  "filter"?: LogsFilter;
  /**
   * ID of the pipeline.
   */
  "id"?: string;
  /**
   * Whether or not the pipeline is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Whether or not the pipeline can be edited.
   */
  "isReadOnly"?: boolean;
  /**
   * Name of the pipeline.
   */
  "name": string;
  /**
   * Ordered list of processors in this pipeline.
   */
  "processors"?: Array<LogsProcessor>;
  /**
   * A list of tags associated with the pipeline.
   */
  "tags"?: Array<string>;
  /**
   * Type of pipeline.
   */
  "type"?: string;
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
    description: {
      baseName: "description",
      type: "string",
    },
    filter: {
      baseName: "filter",
      type: "LogsFilter",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    isReadOnly: {
      baseName: "is_read_only",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    processors: {
      baseName: "processors",
      type: "Array<LogsProcessor>",
    },
    tags: {
      baseName: "tags",
      type: "Array<string>",
    },
    type: {
      baseName: "type",
      type: "string",
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
    return LogsPipeline.attributeTypeMap;
  }

  public constructor() {}
}
