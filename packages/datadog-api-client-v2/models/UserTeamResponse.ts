/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeam } from "./UserTeam";
import { UserTeamIncluded } from "./UserTeamIncluded";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team membership response
 */
export class UserTeamResponse {
  /**
   * A user's relationship with a team
   */
  "data"?: UserTeam;
  /**
   * Resources related to the team memberships
   */
  "included"?: Array<UserTeamIncluded>;

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
      type: "UserTeam",
    },
    included: {
      baseName: "included",
      type: "Array<UserTeamIncluded>",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return UserTeamResponse.attributeTypeMap;
  }

  public constructor() {}
}
