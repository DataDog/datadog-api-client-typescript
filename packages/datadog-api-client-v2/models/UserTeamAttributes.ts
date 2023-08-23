/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeamRole } from "./UserTeamRole";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team membership attributes
 */
export class UserTeamAttributes {
  /**
   * The user's role within the team
   */
  "role"?: UserTeamRole;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    role: {
      baseName: "role",
      type: "UserTeamRole",
    },
  };
}
