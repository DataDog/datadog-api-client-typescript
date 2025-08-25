/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineOcsfMapperProcessorMappingMapping } from "./ObservabilityPipelineOcsfMapperProcessorMappingMapping";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
      type: "any",
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
