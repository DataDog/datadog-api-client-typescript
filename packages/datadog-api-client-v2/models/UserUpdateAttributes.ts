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
   * If the user is enabled or disabled.
   */
  "disabled"?: boolean;
  /**
   * The email of the user.
   */
  "email"?: string;
  /**
   * The name of the user.
   */
  "name"?: string;

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
