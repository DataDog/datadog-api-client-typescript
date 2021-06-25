/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ObjectSerializer } from "./ObjectSerializer";

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

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: { baseName: string; type: string; format: string };
  } = {
    createdAt: {
      baseName: "created_at",
      type: "Date",
      format: "date-time",
    },
    disabled: {
      baseName: "disabled",
      type: "boolean",
      format: "",
    },
    email: {
      baseName: "email",
      type: "string",
      format: "",
    },
    handle: {
      baseName: "handle",
      type: "string",
      format: "",
    },
    icon: {
      baseName: "icon",
      type: "string",
      format: "",
    },
    modifiedAt: {
      baseName: "modified_at",
      type: "Date",
      format: "date-time",
    },
    name: {
      baseName: "name",
      type: "string",
      format: "",
    },
    status: {
      baseName: "status",
      type: "string",
      format: "",
    },
    title: {
      baseName: "title",
      type: "string",
      format: "",
    },
    verified: {
      baseName: "verified",
      type: "boolean",
      format: "",
    },
  };

  static getAttributeTypeMap() {
    return UserAttributes.attributeTypeMap;
  }

  static deserialize(data: { [key: string]: any }): UserAttributes {
    const res = new UserAttributes();

    res.createdAt = ObjectSerializer.deserialize(
      data.created_at,
      "Date",
      "date-time"
    );

    res.disabled = ObjectSerializer.deserialize(data.disabled, "boolean", "");

    res.email = ObjectSerializer.deserialize(data.email, "string", "");

    res.handle = ObjectSerializer.deserialize(data.handle, "string", "");

    res.icon = ObjectSerializer.deserialize(data.icon, "string", "");

    res.modifiedAt = ObjectSerializer.deserialize(
      data.modified_at,
      "Date",
      "date-time"
    );

    res.name = ObjectSerializer.deserialize(data.name, "string", "");

    res.status = ObjectSerializer.deserialize(data.status, "string", "");

    res.title = ObjectSerializer.deserialize(data.title, "string", "");

    res.verified = ObjectSerializer.deserialize(data.verified, "boolean", "");

    return res;
  }

  static serialize(data: UserAttributes): { [key: string]: any } {
    const attributeTypes = UserAttributes.getAttributeTypeMap();
    const res: { [index: string]: any } = {};
    for (const [key, value] of Object.entries(data)) {
      if (!(key in attributeTypes)) {
        throw new TypeError(`${key} attribute not in schema`);
      }
    }
    res.created_at = ObjectSerializer.serialize(
      data.createdAt,
      "Date",
      "date-time"
    );

    res.disabled = ObjectSerializer.serialize(data.disabled, "boolean", "");

    res.email = ObjectSerializer.serialize(data.email, "string", "");

    res.handle = ObjectSerializer.serialize(data.handle, "string", "");

    res.icon = ObjectSerializer.serialize(data.icon, "string", "");

    res.modified_at = ObjectSerializer.serialize(
      data.modifiedAt,
      "Date",
      "date-time"
    );

    res.name = ObjectSerializer.serialize(data.name, "string", "");

    res.status = ObjectSerializer.serialize(data.status, "string", "");

    res.title = ObjectSerializer.serialize(data.title, "string", "");

    res.verified = ObjectSerializer.serialize(data.verified, "boolean", "");

    return res;
  }

  public constructor() {}
}
