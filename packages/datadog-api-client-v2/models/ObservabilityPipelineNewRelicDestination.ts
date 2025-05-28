/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineNewRelicDestinationRegion } from "./ObservabilityPipelineNewRelicDestinationRegion";
import { ObservabilityPipelineNewRelicDestinationType } from "./ObservabilityPipelineNewRelicDestinationType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The `new_relic` destination sends logs to the New Relic platform.
*/
export class ObservabilityPipelineNewRelicDestination {
  /**
   * The unique identifier for this component.
  */
  "id": string;
  /**
   * A list of component IDs whose output is used as the `input` for this component.
  */
  "inputs": Array<string>;
  /**
   * The New Relic region.
  */
  "region": ObservabilityPipelineNewRelicDestinationRegion;
  /**
   * The destination type. The value should always be `new_relic`.
  */
  "type": ObservabilityPipelineNewRelicDestinationType;

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
    "inputs": {
      "baseName": "inputs",
      "type": "Array<string>",
      "required": true,
    },
    "region": {
      "baseName": "region",
      "type": "ObservabilityPipelineNewRelicDestinationRegion",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "ObservabilityPipelineNewRelicDestinationType",
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




    return ObservabilityPipelineNewRelicDestination.attributeTypeMap;

  }

  public constructor() {











  }
}









