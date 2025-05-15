import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ObservabilityPipelineOcsfMapperProcessorMappingMapping } from "./ObservabilityPipelineOcsfMapperProcessorMappingMapping";

/**
 * Defines how specific events are transformed to OCSF using a mapping configuration.
 */
export class ObservabilityPipelineOcsfMapperProcessorMapping {
  /**
   * A Datadog search query used to select the logs that this mapping should apply to.
   */
  "include": string;
  /**
   * Defines a single mapping rule for transforming logs into the OCSF schema.
   */
  "mapping": ObservabilityPipelineOcsfMapperProcessorMappingMapping;
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
    include: {
      baseName: "include",
      type: "string",
      required: true,
    },
    mapping: {
      baseName: "mapping",
      type: "ObservabilityPipelineOcsfMapperProcessorMappingMapping",
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
    return ObservabilityPipelineOcsfMapperProcessorMapping.attributeTypeMap;
  }

  public constructor() {}
}
