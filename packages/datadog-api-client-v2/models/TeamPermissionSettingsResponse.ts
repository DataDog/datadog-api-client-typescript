/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamPermissionSetting } from "./TeamPermissionSetting";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team permission settings response
 */
export class TeamPermissionSettingsResponse {
  /**
   * Team permission settings response data
   */
  "data"?: Array<TeamPermissionSetting>;

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
      type: "Array<TeamPermissionSetting>",
    },
  };
}
