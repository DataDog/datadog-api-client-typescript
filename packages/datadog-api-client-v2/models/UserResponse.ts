/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { User } from "./User";
import { UserResponseIncludedItem } from "./UserResponseIncludedItem";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Response containing information about a single user.
 */
export class UserResponse {
  /**
   * User object returned by the API.
   */
  "data"?: User;
  /**
   * Array of objects related to the user.
   */
  "included"?: Array<UserResponseIncludedItem>;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "User",
    },
    included: {
      type: "Array<UserResponseIncludedItem>",
    },
  };
}
