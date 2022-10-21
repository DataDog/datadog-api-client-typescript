/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserCreateAttributes } from "./UserCreateAttributes";
import { UserRelationships } from "./UserRelationships";
import { UsersType } from "./UsersType";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object to create a user.
 */
export class UserCreateData {
  /**
   * Attributes of the created user.
   */
  "attributes": UserCreateAttributes;
  /**
   * Relationships of the user object.
   */
  "relationships"?: UserRelationships;
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
      type: "UserCreateAttributes",
      required: true,
    },
    relationships: {
      baseName: "relationships",
      type: "UserRelationships",
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
    return UserCreateData.attributeTypeMap;
  }

  public constructor() {}
}
