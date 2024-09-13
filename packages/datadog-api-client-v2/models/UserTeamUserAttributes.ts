/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The definition of `UserTeamUserAttributes` object.
 */
export class UserTeamUserAttributes {
  /**
   * The `UserTeamUserAttributes` `disabled`.
   */
  "disabled"?: boolean;
  /**
   * The `UserTeamUserAttributes` `email`.
   */
  "email"?: string;
  /**
   * The `UserTeamUserAttributes` `handle`.
   */
  "handle"?: string;
  /**
   * The `UserTeamUserAttributes` `icon`.
   */
  "icon"?: string;
  /**
   * The `UserTeamUserAttributes` `name`.
   */
  "name"?: string;
  /**
   * The `UserTeamUserAttributes` `service_account`.
   */
  "serviceAccount"?: boolean;

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
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    email: {
      baseName: "email",
      type: "string",
    },
    handle: {
      baseName: "handle",
      type: "string",
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "boolean",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserTeamUserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
