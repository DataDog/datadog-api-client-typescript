/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardRelationships } from "./SharedDashboardRelationships";
import { SharedDashboardResponseAttributes } from "./SharedDashboardResponseAttributes";
import { SharedDashboardType } from "./SharedDashboardType";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * A shared dashboard response resource.
*/
export class SharedDashboardResponse {
  /**
   * Attributes of a shared dashboard response.
  */
  "attributes": SharedDashboardResponseAttributes;
  /**
   * ID of the shared dashboard.
  */
  "id": string;
  /**
   * Relationships of a shared dashboard.
  */
  "relationships": SharedDashboardRelationships;
  /**
   * Shared dashboard resource type.
  */
  "type": SharedDashboardType;

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
      "type": "SharedDashboardResponseAttributes",
      "required": true,
    },
    "id": {
      "baseName": "id",
      "type": "string",
      "required": true,
    },
    "relationships": {
      "baseName": "relationships",
      "type": "SharedDashboardRelationships",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "SharedDashboardType",
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




    return SharedDashboardResponse.attributeTypeMap;

  }

  public constructor() {











  }
}









