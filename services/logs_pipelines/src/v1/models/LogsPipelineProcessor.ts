import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { LogsFilter } from "./LogsFilter";
import { LogsPipelineProcessorType } from "./LogsPipelineProcessorType";
import { LogsProcessor } from "./LogsProcessor";

/**
 * Nested Pipelines are pipelines within a pipeline. Use Nested Pipelines to split the processing into two steps.
 * For example, first use a high-level filtering such as team and then a second level of filtering based on the
 * integration, service, or any other tag or attribute.
 *
 * A pipeline can contain Nested Pipelines and Processors whereas a Nested Pipeline can only contain Processors.
 */
export class LogsPipelineProcessor {
  /**
   * Filter for logs.
   */
  "filter"?: LogsFilter;
  /**
   * Whether or not the processor is enabled.
   */
  "isEnabled"?: boolean;
  /**
   * Name of the processor.
   */
  "name"?: string;
  /**
   * Ordered list of processors in this pipeline.
   */
  "processors"?: Array<LogsProcessor>;
  /**
   * Type of logs pipeline processor.
   */
  "type": LogsPipelineProcessorType;
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
    filter: {
      baseName: "filter",
      type: "LogsFilter",
    },
    isEnabled: {
      baseName: "is_enabled",
      type: "boolean",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    processors: {
      baseName: "processors",
      type: "Array<LogsProcessor>",
    },
    type: {
      baseName: "type",
      type: "LogsPipelineProcessorType",
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
    return LogsPipelineProcessor.attributeTypeMap;
  }

  public constructor() {}
}
