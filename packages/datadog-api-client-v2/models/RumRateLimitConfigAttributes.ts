/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { RumRateLimitAdaptiveConfig } from "./RumRateLimitAdaptiveConfig";
import { RumRateLimitCustomConfig } from "./RumRateLimitCustomConfig";
import { RumRateLimitMode } from "./RumRateLimitMode";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * The RUM rate limit configuration properties.
*/
export class RumRateLimitConfigAttributes {
  /**
   * The configuration used when `mode` is `adaptive`.
  */
  "adaptive"?: RumRateLimitAdaptiveConfig;
  /**
   * The configuration used when `mode` is `custom`.
  */
  "custom"?: RumRateLimitCustomConfig;
  /**
   * The rate limit mode. `custom` enforces a fixed session limit, while
   * `adaptive` dynamically adjusts retention.
  */
  "mode": RumRateLimitMode;
  /**
   * The ID of the organization the rate limit configuration belongs to.
  */
  "orgId": number;
  /**
   * The date the rate limit configuration was last updated.
  */
  "updatedAt"?: string;
  /**
   * The handle of the user who last updated the rate limit configuration.
  */
  "updatedBy"?: string;

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
    "adaptive": {
      "baseName": "adaptive",
      "type": "RumRateLimitAdaptiveConfig",
    },
    "custom": {
      "baseName": "custom",
      "type": "RumRateLimitCustomConfig",
    },
    "mode": {
      "baseName": "mode",
      "type": "RumRateLimitMode",
      "required": true,
    },
    "orgId": {
      "baseName": "org_id",
      "type": "number",
      "required": true,
      "format": "int64",
    },
    "updatedAt": {
      "baseName": "updated_at",
      "type": "string",
    },
    "updatedBy": {
      "baseName": "updated_by",
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




    return RumRateLimitConfigAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









