/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UsersType } from "./UsersType";
import { UserUpdateAttributes } from "./UserUpdateAttributes";

import {
  AttributeTypeMap,
  UnparsedObject,
} from "../../datadog-api-client-common/util";

/**
 * Object to update a user.
 */
export class UserUpdateData {
  /**
   * Attributes of the edited user.
   */
  "attributes": UserUpdateAttributes;
  /**
   * ID of the user.
   */
  "id": string;
  /**
   * Users resource type.
   */
  "type": UsersType;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
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

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
