/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamPermissionSettingUpdate } from "./TeamPermissionSettingUpdate";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team permission setting update request
 */
export class TeamPermissionSettingUpdateRequest {
  /**
   * Team permission setting update
   */
  "data": TeamPermissionSettingUpdate;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    data: {
      type: "TeamPermissionSettingUpdate",
      required: true,
    },
  };
}
