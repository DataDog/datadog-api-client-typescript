/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamPermissionSetting } from "./TeamPermissionSetting";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team permission setting response
 */
export class TeamPermissionSettingResponse {
  /**
   * Team permission setting
   */
  "data"?: TeamPermissionSetting;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "TeamPermissionSetting",
    },
  };
}
