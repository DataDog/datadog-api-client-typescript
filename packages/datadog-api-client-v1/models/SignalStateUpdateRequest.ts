/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SignalArchiveReason } from "./SignalArchiveReason";
import { SignalTriageState } from "./SignalTriageState";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes describing the change of state for a given state.
*/
export class SignalStateUpdateRequest {
  /**
   * Optional comment to explain why a signal is being archived.
  */
  "archiveComment"?: string;
  /**
   * Reason why a signal has been archived.
  */
  "archiveReason"?: SignalArchiveReason;
  /**
   * The new triage state of the signal.
  */
  "state": SignalTriageState;
  /**
   * Version of the updated signal. If server side version is higher, update will be rejected.
  */
  "version"?: number;

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
    "archiveComment": {
      "baseName": "archiveComment",
      "type": "string",
    },
    "archiveReason": {
      "baseName": "archiveReason",
      "type": "SignalArchiveReason",
    },
    "state": {
      "baseName": "state",
      "type": "SignalTriageState",
      "required": true,
    },
    "version": {
      "baseName": "version",
      "type": "number",
      "format": "int64",
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




    return SignalStateUpdateRequest.attributeTypeMap;

  }

  public constructor() {











  }
}









