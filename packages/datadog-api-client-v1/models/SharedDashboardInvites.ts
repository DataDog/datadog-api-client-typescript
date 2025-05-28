/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SharedDashboardInvitesData } from "./SharedDashboardInvitesData";
import { SharedDashboardInvitesMeta } from "./SharedDashboardInvitesMeta";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Invitations data and metadata that exists for a shared dashboard returned by the API.
*/
export class SharedDashboardInvites {
  /**
   * An object or list of objects containing the information for an invitation to a shared dashboard.
  */
  "data": SharedDashboardInvitesData;
  /**
   * Pagination metadata returned by the API.
  */
  "meta"?: SharedDashboardInvitesMeta;

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
    "data": {
      "baseName": "data",
      "type": "SharedDashboardInvitesData",
      "required": true,
    },
    "meta": {
      "baseName": "meta",
      "type": "SharedDashboardInvitesMeta",
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




    return SharedDashboardInvites.attributeTypeMap;

  }

  public constructor() {











  }
}









