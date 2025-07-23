import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineCustomProcessorProcessorRemap } from "./ObservabilityPipelineCustomProcessorProcessorRemap";
import { ObservabilityPipelineCustomProcessorProcessorType } from "./ObservabilityPipelineCustomProcessorProcessorType";

/**
 * The `custom_processor` processor transforms events using [Vector Remap Language (VRL)](https://vector.dev/docs/reference/vrl/) scripts with advanced filtering capabilities.
 */
export class ObservabilityPipelineCustomProcessorProcessor {
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets. This field should always be set to `*` for the custom_processor processor.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the input for this processor.
   */
  "inputs": Array<string>;
  /**
   * Array of VRL remap rules.
   */
  "remaps": Array<ObservabilityPipelineCustomProcessorProcessorRemap>;
  /**
   * The processor type. The value should always be `custom_processor`.
   */
  "type": ObservabilityPipelineCustomProcessorProcessorType;
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
    remaps: {
      baseName: "remaps",
      type: "Array<ObservabilityPipelineCustomProcessorProcessorRemap>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineCustomProcessorProcessorType",
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
    return ObservabilityPipelineCustomProcessorProcessor.attributeTypeMap;
  }

  public constructor() {}
}
