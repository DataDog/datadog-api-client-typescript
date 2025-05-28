/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineOcsfMapperProcessorMapping } from "./ObservabilityPipelineOcsfMapperProcessorMapping";
import { ObservabilityPipelineOcsfMapperProcessorType } from "./ObservabilityPipelineOcsfMapperProcessorType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The `ocsf_mapper` processor transforms logs into the OCSF schema using a predefined mapping configuration.
*/
export class ObservabilityPipelineOcsfMapperProcessor {
  /**
   * The unique identifier for this component. Used to reference this component in other parts of the pipeline.
  */
  "id": string;
  /**
   * A Datadog search query used to determine which logs this processor targets.
  */
  "include": string;
  /**
   * A list of component IDs whose output is used as the `input` for this processor.
  */
  "inputs": Array<string>;
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
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "include": {
      "baseName": "include",
      "type": "string",
      "required": true,
    },
    "inputs": {
      "baseName": "inputs",
      "type": "Array<string>",
      "required": true,
    },
    "mappings": {
      "baseName": "mappings",
      "type": "Array<ObservabilityPipelineOcsfMapperProcessorMapping>",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineOcsfMapperProcessorType",
      "required": true,
    },
    "additionalProperties": {
      "baseName": "additionalProperties",
      "type": "any",
    }
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {




    return ObservabilityPipelineOcsfMapperProcessor.attributeTypeMap;

  }

  public constructor() {











  }
}









