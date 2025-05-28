/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SecurityTrigger } from "./SecurityTrigger";
import { StartStepNamesItem } from "./StartStepNamesItem";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Schema for a Security-based trigger.
*/
export class SecurityTriggerWrapper {
  /**
   * Trigger a workflow from a Security Signal or Finding. For automatic triggering a handle must be configured and the workflow must be published.
  */
  "securityTrigger": SecurityTrigger;
  /**
   * A list of steps that run first after a trigger fires.
  */
  "startStepNames"?: Array<string>;

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
    "securityTrigger": {
      "baseName": "securityTrigger",
      "type": "SecurityTrigger",
      "required": true,
    },
    "startStepNames": {
      "baseName": "startStepNames",
      "type": "Array<string>",
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




    return SecurityTriggerWrapper.attributeTypeMap;

  }

  public constructor() {











  }
}









