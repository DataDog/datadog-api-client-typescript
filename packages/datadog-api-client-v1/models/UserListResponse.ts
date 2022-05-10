/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { User } from "./User";

import { AttributeTypeMap } from "../util";

/**
 * Array of Datadog users for a given organization.
 */
export class UserListResponse {
  /**
   * Array of users.
   */
  "users"?: Array<User>;

  /**
   * @ignore
   */
  "unparsedObject"?: any;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    users: {
      baseName: "users",
      type: "Array<User>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserListResponse.attributeTypeMap;
  }

  public constructor() {}
}
