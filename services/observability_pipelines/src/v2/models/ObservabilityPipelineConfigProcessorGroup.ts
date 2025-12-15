import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineConfigProcessorItem } from "./ObservabilityPipelineConfigProcessorItem";

/**
 * A group of processors.
 */
export class ObservabilityPipelineConfigProcessorGroup {
  /**
   * Whether this processor group is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for the processor group.
   */
  "id": string;
  /**
   * Conditional expression for when this processor group should execute.
   */
  "include": string;
  /**
   * A list of IDs for components whose output is used as the input for this processor group.
   */
  "inputs": Array<string>;
  /**
   * Processors applied sequentially within this group. Events flow through each processor in order.
   */
  "processors": Array<ObservabilityPipelineConfigProcessorItem>;
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
    enabled: {
      baseName: "enabled",
      type: "boolean",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    processors: {
      baseName: "processors",
      type: "Array<ObservabilityPipelineConfigProcessorItem>",
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
    return ObservabilityPipelineConfigProcessorGroup.attributeTypeMap;
  }

  public constructor() {}
}
