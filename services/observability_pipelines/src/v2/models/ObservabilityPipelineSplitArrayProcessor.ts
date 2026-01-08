import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineSplitArrayProcessorArrayConfig } from "./ObservabilityPipelineSplitArrayProcessorArrayConfig";
import { ObservabilityPipelineSplitArrayProcessorType } from "./ObservabilityPipelineSplitArrayProcessorType";

/**
 * The `split_array` processor splits array fields into separate events based on configured rules.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineSplitArrayProcessor {
  /**
   * A list of array split configurations.
   */
  "arrays": Array<ObservabilityPipelineSplitArrayProcessorArrayConfig>;
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
   * A Datadog search query used to determine which logs this processor targets. For split_array, this should typically be `*`.
   */
  "include": string;
  /**
   * The processor type. The value should always be `split_array`.
   */
  "type": ObservabilityPipelineSplitArrayProcessorType;
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
    arrays: {
      baseName: "arrays",
      type: "Array<ObservabilityPipelineSplitArrayProcessorArrayConfig>",
      required: true,
    },
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
    type: {
      baseName: "type",
      type: "ObservabilityPipelineSplitArrayProcessorType",
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
    return ObservabilityPipelineSplitArrayProcessor.attributeTypeMap;
  }

  public constructor() {}
}
