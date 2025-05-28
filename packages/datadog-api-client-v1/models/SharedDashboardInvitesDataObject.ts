/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardInviteType } from "./DashboardInviteType";
import { SharedDashboardInvitesDataObjectAttributes } from "./SharedDashboardInvitesDataObjectAttributes";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Object containing the information for an invitation to a shared dashboard.
*/
export class SharedDashboardInvitesDataObject {
  /**
   * Attributes of the shared dashboard invitation
  */
  "attributes": SharedDashboardInvitesDataObjectAttributes;
  /**
   * Type for shared dashboard invitation request body.
  */
  "type": DashboardInviteType;

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
      "type": "SharedDashboardInvitesDataObjectAttributes",
      "required": true,
    },
    "type": {
      "baseName": "type",
      "type": "DashboardInviteType",
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




    return SharedDashboardInvitesDataObject.attributeTypeMap;

  }

  public constructor() {











  }
}









