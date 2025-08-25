/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GCPUsageCostConfigPostRequestAttributes } from "./GCPUsageCostConfigPostRequestAttributes";
import { GCPUsageCostConfigPostRequestType } from "./GCPUsageCostConfigPostRequestType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * GCP Usage Cost config post data.
*/
export class GCPUsageCostConfigPostData {
  /**
   * Attributes for GCP Usage Cost config post request.
  */
  "attributes": GCPUsageCostConfigPostRequestAttributes;
  /**
   * Type of GCP Usage Cost config post request.
  */
  "type": GCPUsageCostConfigPostRequestType;

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
      "type": "GCPUsageCostConfigPostRequestAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "GCPUsageCostConfigPostRequestType",
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




    return GCPUsageCostConfigPostData.attributeTypeMap;

  }

  public constructor() {











  }
}









