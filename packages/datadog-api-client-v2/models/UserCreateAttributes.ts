/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the created user.
 */
export class UserCreateAttributes {
  /**
   * The `UserCreateAttributes` `created_at`.
   */
  "createdAt"?: Date;
  /**
   * The `UserCreateAttributes` `disabled`.
   */
  "disabled"?: boolean;
  /**
   * The email of the user.
   */
  "email": string;
  /**
   * The `UserCreateAttributes` `handle`.
   */
  "handle"?: string;
  /**
   * The `UserCreateAttributes` `modified_at`.
   */
  "modifiedAt"?: Date;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * The `UserCreateAttributes` `service_account`.
   */
  "serviceAccount"?: boolean;
  /**
   * The title of the user.
   */
  "title"?: string;
  /**
   * The `UserCreateAttributes` `verified`.
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
      required: true,
    },
    handle: {
      baseName: "handle",
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
    title: {
      baseName: "title",
      type: "string",
    },
    verified: {
      baseName: "verified",
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
    return UserCreateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
