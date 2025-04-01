/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Options on impossible travel detection method.
*/
export class SecurityMonitoringRuleImpossibleTravelOptions {
  /**
   * If true, signals are suppressed for the first 24 hours. In that time, Datadog learns the user's regular
   * access locations. This can be helpful to reduce noise and infer VPN usage or credentialed API access.
  */
  "baselineUserLocations"?: boolean;

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
    "baselineUserLocations": {
      "baseName": "baselineUserLocations",
      "type": "boolean",
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




    return SecurityMonitoringRuleImpossibleTravelOptions.attributeTypeMap;

  }

  public constructor() {











  }
}









