import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineRemapVrlProcessorRemap } from "./ObservabilityPipelineRemapVrlProcessorRemap";
import { ObservabilityPipelineRemapVrlProcessorType } from "./ObservabilityPipelineRemapVrlProcessorType";

/**
 * The `remap_vrl` processor (also called  "Custom processor") transforms events using [Vector Remap Language (VRL)](https://vector.dev/docs/reference/vrl/) scripts with advanced filtering capabilities.
 */
export class ObservabilityPipelineRemapVrlProcessor {
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets. This field should always be set to `*` for the remap_vrl processor.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the input for this processor.
   */
  "inputs": Array<string>;
  /**
   * Array of VRL remap rules.
   */
  "remaps": Array<ObservabilityPipelineRemapVrlProcessorRemap>;
  /**
   * The processor type. The value should always be `remap_vrl`.
   */
  "type": ObservabilityPipelineRemapVrlProcessorType;
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
      type: "Array<ObservabilityPipelineRemapVrlProcessorRemap>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineRemapVrlProcessorType",
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
    return ObservabilityPipelineRemapVrlProcessor.attributeTypeMap;
  }

  public constructor() {}
}
