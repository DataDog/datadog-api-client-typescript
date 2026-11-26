/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExternalTeamPermissionSettingDefaultsType } from "./ExternalTeamPermissionSettingDefaultsType";
import { ExternalTeamPermissionSettingDefaultUpdateAttributes } from "./ExternalTeamPermissionSettingDefaultUpdateAttributes";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Data for upserting an external team permission setting default.
 */
export class ExternalTeamPermissionSettingDefaultUpdateData {
  /**
   * Attributes for upserting an external team permission setting default.
   */
  "attributes": ExternalTeamPermissionSettingDefaultUpdateAttributes;
  /**
   * The resource identifier, formatted as `{source}:{action}`. Must match the path parameters.
   */
  "id": string;
  /**
   * Resource type for external team permission setting defaults.
   */
  "type": ExternalTeamPermissionSettingDefaultsType;

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
      type: "ExternalTeamPermissionSettingDefaultUpdateAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ExternalTeamPermissionSettingDefaultsType",
      required: true,
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return ExternalTeamPermissionSettingDefaultUpdateData.attributeTypeMap;
  }

  public constructor() {}
}
