/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamPermissionSettingAttributes } from "./TeamPermissionSettingAttributes";
import { TeamPermissionSettingType } from "./TeamPermissionSettingType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team permission setting
 */
export class TeamPermissionSetting {
  /**
   * Team permission setting attributes
   */
  "attributes"?: TeamPermissionSettingAttributes;
  /**
   * The team permission setting's identifier
   */
  "id": string;
  /**
   * Team permission setting type
   */
  "type": TeamPermissionSettingType;

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
      type: "TeamPermissionSettingAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "TeamPermissionSettingType",
      required: true,
    },
  };
}
