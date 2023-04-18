/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeamUpdate } from "./UserTeamUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team membership request
 */
export class UserTeamUpdateRequest {
  /**
   * A user's relationship with a team
   */
  "data": UserTeamUpdate;

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
      type: "UserTeamUpdate",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserTeamUpdateRequest.attributeTypeMap;
  }

  public constructor() {}
}