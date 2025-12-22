import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOcsfMapperProcessorMapping } from "./ObservabilityPipelineOcsfMapperProcessorMapping";
import { ObservabilityPipelineOcsfMapperProcessorType } from "./ObservabilityPipelineOcsfMapperProcessorType";

/**
 * The `ocsf_mapper` processor transforms logs into the OCSF schema using a predefined mapping configuration.
 *
 * **Supported pipeline types:** logs
 */
export class ObservabilityPipelineOcsfMapperProcessor {
  /**
   * The display name for a component.
   */
  "displayName"?: string;
  /**
   * Whether this processor is enabled.
   */
  "enabled": boolean;
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline.
   */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
   */
  "include": string;
  /**
   * A list of mapping rules to convert events to the OCSF format.
   */
  "mappings": Array<ObservabilityPipelineOcsfMapperProcessorMapping>;
  /**
   * The processor type. The value should always be `ocsf_mapper`.
   */
  "type": ObservabilityPipelineOcsfMapperProcessorType;
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
    mappings: {
      baseName: "mappings",
      type: "Array<ObservabilityPipelineOcsfMapperProcessorMapping>",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ObservabilityPipelineOcsfMapperProcessorType",
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
    return ObservabilityPipelineOcsfMapperProcessor.attributeTypeMap;
  }

  public constructor() {}
}
