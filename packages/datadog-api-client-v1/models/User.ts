/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AccessRole } from "./AccessRole";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create, edit, and disable users.
 */
export class User {
  /**
   * The access role of the user. Options are **st** (standard user), **adm** (admin user), or **ro** (read-only user).
   */
  "accessRole"?: AccessRole;
  /**
   * The new disabled status of the user.
   */
  "disabled"?: boolean;
  /**
   * The new email of the user.
   */
  "email"?: string;
  /**
   * The user handle, must be a valid email.
   */
  "handle"?: string;
  /**
   * Gravatar icon associated to the user.
   */
  "icon"?: string;
  /**
   * The name of the user.
   */
  "name"?: string;
  /**
   * Whether or not the user logged in Datadog at least once.
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
    accessRole: {
      baseName: "access_role",
      type: "AccessRole",
    },
    disabled: {
      baseName: "disabled",
      type: "boolean",
    },
    email: {
      baseName: "email",
      type: "string",
      format: "email",
    },
    handle: {
      baseName: "handle",
      type: "string",
      format: "email",
    },
    icon: {
      baseName: "icon",
      type: "string",
    },
    name: {
      baseName: "name",
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
    return User.attributeTypeMap;
  }

  public constructor() {}
}
