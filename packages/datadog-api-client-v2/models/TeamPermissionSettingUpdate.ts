/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TeamPermissionSettingType } from "./TeamPermissionSettingType";
import { TeamPermissionSettingUpdateAttributes } from "./TeamPermissionSettingUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Team permission setting update
 */
export class TeamPermissionSettingUpdate {
  /**
   * Team permission setting update attributes
   */
  "attributes"?: TeamPermissionSettingUpdateAttributes;
  /**
   * Team permission setting type
   */
  "type": TeamPermissionSettingType;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

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
      type: "TeamPermissionSettingUpdateAttributes",
    },
    type: {
      baseName: "type",
      type: "TeamPermissionSettingType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return TeamPermissionSettingUpdate.attributeTypeMap;
  }

  public constructor() {}
}
