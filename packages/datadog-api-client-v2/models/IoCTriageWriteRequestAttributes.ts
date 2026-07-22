/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IoCTriageState } from "./IoCTriageState";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes for setting an indicator's triage state.
*/
export class IoCTriageWriteRequestAttributes {
  /**
   * The indicator value to triage (for example, an IP address or domain).
  */
  "indicator": string;
  /**
   * Current triage state of the indicator.
  */
  "triageState": IoCTriageState;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any; };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    "indicator": {
      "baseName": "indicator",
      "type": "string",
      "required": true,
    },
    "triageState": {
      "baseName": "triage_state",
      "type": "IoCTriageState",
      "required": true,
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




    return IoCTriageWriteRequestAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









