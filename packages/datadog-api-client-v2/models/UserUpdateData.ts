/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { UserUpdateAttributes } from "./UserUpdateAttributes";
import { UsersType } from "./UsersType";

export class UserUpdateData {
  "attributes": UserUpdateAttributes;
  /**
   * ID of the user.
   */
  "id": string;
  "type": UsersType;

  "unparsedObject"?: any;

  static readonly discriminator: string | undefined = undefined;

  static readonly attributeTypeMap: {
    [key: string]: {
      baseName: string;
      type: string;
      required?: boolean;
      format?: string;
    };
  } = {
    attributes: {
      baseName: "attributes",
      type: "UserUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UsersType",
      required: true,
    },
  };

  static getAttributeTypeMap() {
    return UserUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
