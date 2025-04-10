import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineAddFieldsProcessorType } from "./ObservabilityPipelineAddFieldsProcessorType";
import { ObservabilityPipelineFieldValue } from "./ObservabilityPipelineFieldValue";

/**
 * The `add_fields` processor adds static key-value fields to logs.
 */
export class ObservabilityPipelineAddFieldsProcessor {
  /**
   * A list of static fields (key-value pairs) that is added to each log event processed by this component.
   */
  "fields": Array<ObservabilityPipelineFieldValue>;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline (for example, as the `input` to downstream components).
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
   */
  "inputs": Array<string>;
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
    inputs: {
      baseName: "inputs",
      type: "Array<string>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineAddFieldsProcessorType",
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
    return ObservabilityPipelineAddFieldsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
