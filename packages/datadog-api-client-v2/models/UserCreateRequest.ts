/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserCreateData } from "./UserCreateData";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Create a user.
 */
export class UserCreateRequest {
  /**
   * Object to create a user.
   */
  "data": UserCreateData;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      baseName: "data",
      type: "UserCreateData",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserCreateRequest.attributeTypeMap;
  }

  public constructor() {}
}
