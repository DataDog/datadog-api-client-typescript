import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineDedupeProcessorMode } from "./ObservabilityPipelineDedupeProcessorMode";
import { ObservabilityPipelineDedupeProcessorType } from "./ObservabilityPipelineDedupeProcessorType";

/**
 * The `dedupe` processor removes duplicate fields in log events.
 */
export class ObservabilityPipelineDedupeProcessor {
  /**
   * The processor passes through all events if it is set to `false`. Defaults to `true`.
   */
  "enabled"?: boolean;
  /**
   * A list of log field paths to check for duplicates.
   */
  "fields": Array<string>;
  /**
   * The unique identifier for this processor.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the input for this processor.
   */
  "inputs": Array<string>;
  /**
   * The deduplication mode to apply to the fields.
   */
  "mode": ObservabilityPipelineDedupeProcessorMode;
  /**
   * The processor type. The value should always be `dedupe`.
   */
  "type": ObservabilityPipelineDedupeProcessorType;
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
    },
    fields: {
      baseName: "fields",
      type: "Array<string>",
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
    mode: {
      baseName: "mode",
      type: "ObservabilityPipelineDedupeProcessorMode",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineDedupeProcessorType",
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
    return ObservabilityPipelineDedupeProcessor.attributeTypeMap;
  }

  public constructor() {}
}
