/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardIncludedDashboardAttributes } from "./SharedDashboardIncludedDashboardAttributes";
import { SharedDashboardIncludedDashboardType } from "./SharedDashboardIncludedDashboardType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Included dashboard resource.
*/
export class SharedDashboardIncludedDashboard {
  /**
   * Attributes of the included dashboard.
  */
  "attributes": SharedDashboardIncludedDashboardAttributes;
  /**
   * ID of the dashboard.
  */
  "id": string;
  /**
   * Included dashboard resource type.
  */
  "type": SharedDashboardIncludedDashboardType;

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
    "attributes": {
      "baseName": "attributes",
      "type": "SharedDashboardIncludedDashboardAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "SharedDashboardIncludedDashboardType",
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




    return SharedDashboardIncludedDashboard.attributeTypeMap;

  }

  public constructor() {











  }
}









