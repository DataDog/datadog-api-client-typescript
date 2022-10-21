/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
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
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
    },
    serviceAccount: {
      baseName: "service_account",
      type: "boolean",
    },
    status: {
      baseName: "status",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
    },
    verified: {
      baseName: "verified",
      type: "boolean",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserAttributes.attributeTypeMap;
  }

  public constructor() {}
}
