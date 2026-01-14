import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAddFieldsProcessorType } from "./ObservabilityPipelineAddFieldsProcessorType";
import { ObservabilityPipelineFieldValue } from "./ObservabilityPipelineFieldValue";

/**
 * The `add_fields` processor adds static key-value fields to logs.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineAddFieldsProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Indicates whether the processor is enabled.
   */
  "enabled": boolean;
  /**
   * A list of static fields (key-value pairs) that is added to each log event processed by this component.
   */
  "fields": Array<ObservabilityPipelineFieldValue>;
  /**
   * The unique identifier for this component. Used in other parts of the pipeline to reference this component (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * The processor type. The value should always be `add_fields`.
   */
  "type": ObservabilityPipelineAddFieldsProcessorType;
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
    fields: {
      baseName: "fields",
      type: "Array<ObservabilityPipelineFieldValue>",
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAddFieldsProcessorType",
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
    return ObservabilityPipelineAddFieldsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
