/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IoCTriageState } from "./IoCTriageState";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A single entry in an indicator's triage history timeline.
*/
export class IoCTriageEvent {
  /**
   * Current triage state of the indicator.
  */
  "triageState"?: IoCTriageState;
  /**
   * Timestamp when this triage action occurred.
  */
  "triagedAt"?: Date;
  /**
   * UUID of the user who performed this triage action.
  */
  "triagedBy"?: string;

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
    "triageState": {
      "baseName": "triage_state",
      "type": "IoCTriageState",
    },
    "triagedAt": {
      "baseName": "triaged_at",
      "type": "Date",
      "format": "date-time",
    },
    "triagedBy": {
      "baseName": "triaged_by",
      "type": "string",
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




    return IoCTriageEvent.attributeTypeMap;

  }

  public constructor() {











  }
}









