/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { UserTeamAttributes } from "./UserTeamAttributes";
import { UserTeamType } from "./UserTeamType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * A user's relationship with a team
 */
export class UserTeamUpdate {
  /**
   * Team membership attributes
   */
  "attributes"?: UserTeamAttributes;
  /**
   * Team membership type
   */
  "type": UserTeamType;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    attributes: {
      baseName: "attributes",
      type: "UserTeamAttributes",
    },
    type: {
      baseName: "type",
      type: "UserTeamType",
      required: true,
    },
  };
}
