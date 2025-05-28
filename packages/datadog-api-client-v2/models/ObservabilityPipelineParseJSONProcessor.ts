/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineParseJSONProcessorType } from "./ObservabilityPipelineParseJSONProcessorType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The `parse_json` processor extracts JSON from a specified field and flattens it into the event. This is useful when logs contain embedded JSON as a string.
*/
export class ObservabilityPipelineParseJSONProcessor {
  /**
   * The name of the log field that contains a JSON string.
  */
  "field": string;
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
   * The processor type. The value should always be `parse_json`.
  */
  "type": ObservabilityPipelineParseJSONProcessorType;

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
    "field": {
      "baseName": "field",
      "type": "string",
      "required": true,
    },
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
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineParseJSONProcessorType",
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




    return ObservabilityPipelineParseJSONProcessor.attributeTypeMap;

  }

  public constructor() {











  }
}









