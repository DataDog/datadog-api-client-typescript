import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineRenameFieldsProcessorField } from "./ObservabilityPipelineRenameFieldsProcessorField";
import { ObservabilityPipelineRenameFieldsProcessorType } from "./ObservabilityPipelineRenameFieldsProcessorType";

/**
 * The `rename_fields` processor changes field names.
 */
export class ObservabilityPipelineRenameFieldsProcessor {
  /**
   * A list of rename rules specifying which fields to rename in the event, what to rename them to, and whether to preserve the original fields.
   */
  "fields": Array<ObservabilityPipelineRenameFieldsProcessorField>;
  /**
   * A unique identifier for this component. Used to reference this component in other parts of the pipeline (e.g., as input to downstream components).
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
   * The processor type. The value should always be `rename_fields`.
   */
  "type": ObservabilityPipelineRenameFieldsProcessorType;
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
      type: "Array<ObservabilityPipelineRenameFieldsProcessorField>",
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
      type: "ObservabilityPipelineRenameFieldsProcessorType",
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
    return ObservabilityPipelineRenameFieldsProcessor.attributeTypeMap;
  }

  public constructor() {}
}
