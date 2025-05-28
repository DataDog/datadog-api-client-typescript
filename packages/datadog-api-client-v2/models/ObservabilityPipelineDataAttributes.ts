/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineConfig } from "./ObservabilityPipelineConfig";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Defines the pipeline’s name and its components (sources, processors, and destinations).
*/
export class ObservabilityPipelineDataAttributes {
  /**
   * Specifies the pipeline's configuration, including its sources, processors, and destinations.
  */
  "config": ObservabilityPipelineConfig;
  /**
   * Name of the pipeline.
  */
  "name": string;

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
    "config": {
      "baseName": "config",
      "type": "ObservabilityPipelineConfig",
      "required": true,
    },
    "name": {
      "baseName": "name",
      "type": "string",
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




    return ObservabilityPipelineDataAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









