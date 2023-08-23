/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { User } from "./User";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A Datadog User.
 */
export class UserResponse {
  /**
   * Create, edit, and disable users.
   */
  "user"?: User;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    user: {
      type: "User",
    },
  };
}
