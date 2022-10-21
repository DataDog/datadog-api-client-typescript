/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UsersType } from "./UsersType";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * User object returned by the API.
 */
export class User {
  /**
   * Attributes of user object returned by the API.
   */
  "attributes"?: UserAttributes;
  /**
   * ID of the user.
   */
  "id"?: string;
  /**
   * Relationships of the user object returned by the API.
   */
  "relationships"?: UserResponseRelationships;
  /**
   * Users resource type.
   */
  "type"?: UsersType;

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
      type: "UserAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
    },
    relationships: {
      baseName: "relationships",
      type: "UserResponseRelationships",
    },
    type: {
      baseName: "type",
      type: "UsersType",
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
