/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamPermissionSettingValue } from "./TeamPermissionSettingValue";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team permission setting update attributes
 */
export class TeamPermissionSettingUpdateAttributes {
  /**
   * What type of user is allowed to perform the specified action
   */
  "value"?: TeamPermissionSettingValue;

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    value: {
      baseName: "value",
      type: "TeamPermissionSettingValue",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamPermissionSettingUpdateAttributes.attributeTypeMap;
  }

  public constructor() {}
}
