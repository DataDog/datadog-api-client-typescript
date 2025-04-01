/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorConfigPolicyAttributeEditRequest } from "./MonitorConfigPolicyAttributeEditRequest";
import { MonitorConfigPolicyResourceType } from "./MonitorConfigPolicyResourceType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A monitor configuration policy data.
*/
export class MonitorConfigPolicyEditData {
  /**
   * Policy and policy type for a monitor configuration policy.
  */
  "attributes": MonitorConfigPolicyAttributeEditRequest;
  /**
   * ID of this monitor configuration policy.
  */
  "id": string;
  /**
   * Monitor configuration policy resource type.
  */
  "type": MonitorConfigPolicyResourceType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "MonitorConfigPolicyAttributeEditRequest",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "MonitorConfigPolicyResourceType",
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




    return MonitorConfigPolicyEditData.attributeTypeMap;

  }

  public constructor() {











  }
}









