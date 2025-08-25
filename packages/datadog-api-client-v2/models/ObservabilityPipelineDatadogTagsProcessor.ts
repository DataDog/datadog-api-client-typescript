/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineDatadogTagsProcessorAction } from "./ObservabilityPipelineDatadogTagsProcessorAction";
import { ObservabilityPipelineDatadogTagsProcessorMode } from "./ObservabilityPipelineDatadogTagsProcessorMode";
import { ObservabilityPipelineDatadogTagsProcessorType } from "./ObservabilityPipelineDatadogTagsProcessorType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The `datadog_tags` processor includes or excludes specific Datadog tags in your logs.
*/
export class ObservabilityPipelineDatadogTagsProcessor {
  /**
   * The action to take on tags with matching keys.
  */
  "action": ObservabilityPipelineDatadogTagsProcessorAction;
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
   * A list of tag keys.
  */
  "keys": Array<string>;
  /**
   * The processing mode.
  */
  "mode": ObservabilityPipelineDatadogTagsProcessorMode;
  /**
   * The processor type. The value should always be `datadog_tags`.
  */
  "type": ObservabilityPipelineDatadogTagsProcessorType;

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
    "action": {
      "baseName": "action",
      "type": "ObservabilityPipelineDatadogTagsProcessorAction",
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
    "keys": {
      "baseName": "keys",
      "type": "Array<string>",
      "required": true,
    },
    "mode": {
      "baseName": "mode",
      "type": "ObservabilityPipelineDatadogTagsProcessorMode",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineDatadogTagsProcessorType",
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




    return ObservabilityPipelineDatadogTagsProcessor.attributeTypeMap;

  }

  public constructor() {











  }
}









