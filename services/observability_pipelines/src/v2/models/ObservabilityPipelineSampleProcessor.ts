import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSampleProcessorType } from "./ObservabilityPipelineSampleProcessorType";

/**
 * The `sample` processor allows probabilistic sampling of logs at a fixed rate.
 */
export class ObservabilityPipelineSampleProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * The percentage of logs to sample.
   */
  "percentage": number;
  /**
   * The processor type. The value should always be `sample`.
   */
  "type": ObservabilityPipelineSampleProcessorType;
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
    displayName: {
      baseName: "display_name",
      type: "string",
    },
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
    percentage: {
      baseName: "percentage",
      type: "number",
      required: true,
      format: "double",
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSampleProcessorType",
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
    return ObservabilityPipelineSampleProcessor.attributeTypeMap;
  }

  public constructor() {}
}
