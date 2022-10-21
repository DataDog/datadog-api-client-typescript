/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { User } from "./User";
import { UserResponseIncludedItem } from "./UserResponseIncludedItem";

import { UnparsedObject } from "../../datadog-api-client-common/util";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing information about multiple users.
 */
export class UsersResponse {
  /**
   * Array of returned users.
   */
  "data"?: Array<User>;
  /**
   * Array of objects related to the users.
   */
  "included"?: Array<UserResponseIncludedItem>;
  /**
   * Object describing meta attributes of response.
   */
  "meta"?: ResponseMetaAttributes;

  /**
   * @ignore
   */
  "unparsedObject"?: UnparsedObject;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "Array<User>",
    },
    included: {
      baseName: "included",
      type: "Array<UserResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "ResponseMetaAttributes",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UsersResponse.attributeTypeMap;
  }

  public constructor() {}
}
