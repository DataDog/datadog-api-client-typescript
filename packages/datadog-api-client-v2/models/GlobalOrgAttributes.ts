/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GlobalOrg } from "./GlobalOrg";
import { GlobalOrgUser } from "./GlobalOrgUser";

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of an organization associated with the authenticated user.
*/
export class GlobalOrgAttributes {
  /**
   * Organization information for a global organization association.
  */
  "org": GlobalOrg;
  /**
   * The login URL used to switch into the organization, if available.
  */
  "redirectUrl"?: string;
  /**
   * The source region of the organization.
  */
  "sourceRegion": string;
  /**
   * User information for a global organization association.
  */
  "user": GlobalOrgUser;

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
    "org": {
      "baseName": "org",
      "type": "GlobalOrg",
      "required": true,
    },
    "redirectUrl": {
      "baseName": "redirect_url",
      "type": "string",
    },
    "sourceRegion": {
      "baseName": "source_region",
      "type": "string",
      "required": true,
    },
    "user": {
      "baseName": "user",
      "type": "GlobalOrgUser",
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




    return GlobalOrgAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









