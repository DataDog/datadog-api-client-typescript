/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MuteReason } from "./MuteReason";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The action to take when the mute rule matches a finding.
*/
export class MuteRuleAction {
  /**
   * The Unix timestamp in milliseconds at which the mute expires. If omitted, the mute does not expire.
  */
  "expireAt"?: number;
  /**
   * The reason for muting a security finding.
  */
  "reason": MuteReason;
  /**
   * An optional description providing more context for the mute reason.
  */
  "reasonDescription"?: string;

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
    "expireAt": {
      "baseName": "expire_at",
      "type": "number",
      "format": "int64",
    },
    "reason": {
      "baseName": "reason",
      "type": "MuteReason",
      "required": true,
    },
    "reasonDescription": {
      "baseName": "reason_description",
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




    return MuteRuleAction.attributeTypeMap;

  }

  public constructor() {











  }
}









