/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of the edited user.
 */
export class UserUpdateAttributes {
  /**
   * When set to `true`, the user is deactivated and can no longer log in.
   * When `false`, the user is active.
   */
  "disabled"?: boolean;
  /**
   * The email address of the user, used for login and notifications.
   * Must be a valid email format.
   */
  "email"?: string;
  /**
   * The full display name of the user as shown in the Datadog UI.
   * Maximum 55 characters, cannot contain `<` or `>`.
   */
  "name"?: string;
  /**
   * The job title of the user (for example, "Senior Engineer" or "Product Manager").
   */
  "title"?: string;

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
    name: {
      baseName: "name",
      type: "string",
    },
    title: {
      baseName: "title",
      type: "string",
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
    return UserUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
