/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";




/**
 * Attributes of user object returned by the API.
*/
export class UserAttributes {
  /**
   * Creation time of the user.
  */
  "createdAt"?: Date;
  /**
   * Whether the user is disabled.
  */
  "disabled"?: boolean;
  /**
   * Email of the user.
  */
  "email"?: string;
  /**
   * Handle of the user.
  */
  "handle"?: string;
  /**
   * URL of the user's icon.
  */
  "icon"?: string;
  /**
   * If user has MFA enabled.
  */
  "mfaEnabled"?: boolean;
  /**
   * Time that the user was last modified.
  */
  "modifiedAt"?: Date;
  /**
   * Name of the user.
  */
  "name"?: string;
  /**
   * Whether the user is a service account.
  */
  "serviceAccount"?: boolean;
  /**
   * Status of the user.
  */
  "status"?: string;
  /**
   * Title of the user.
  */
  "title"?: string;
  /**
   * Whether the user is verified.
  */
  "verified"?: boolean;

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
    "createdAt": {
      "baseName": "created_at",
      "type": "Date",
      "format": "date-time",
    },
    "disabled": {
      "baseName": "disabled",
      "type": "boolean",
    },
    "email": {
      "baseName": "email",
      "type": "string",
    },
    "handle": {
      "baseName": "handle",
      "type": "string",
    },
    "icon": {
      "baseName": "icon",
      "type": "string",
    },
    "mfaEnabled": {
      "baseName": "mfa_enabled",
      "type": "boolean",
    },
    "modifiedAt": {
      "baseName": "modified_at",
      "type": "Date",
      "format": "date-time",
    },
    "name": {
      "baseName": "name",
      "type": "string",
    },
    "serviceAccount": {
      "baseName": "service_account",
      "type": "boolean",
    },
    "status": {
      "baseName": "status",
      "type": "string",
    },
    "title": {
      "baseName": "title",
      "type": "string",
    },
    "verified": {
      "baseName": "verified",
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




    return UserAttributes.attributeTypeMap;

  }

  public constructor() {











  }
}









