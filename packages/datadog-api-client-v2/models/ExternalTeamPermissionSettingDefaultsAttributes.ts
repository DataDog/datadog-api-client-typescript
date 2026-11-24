/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExternalTeamPermissionSettingDefaultsSource } from "./ExternalTeamPermissionSettingDefaultsSource";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes of an external team permission setting default.
 */
export class ExternalTeamPermissionSettingDefaultsAttributes {
  /**
   * The permission action this default applies to.
   */
  "action": string;
  /**
   * The external integration source for the permission setting default.
   */
  "source": ExternalTeamPermissionSettingDefaultsSource;
  /**
   * The default permission value for the action.
   */
  "value": string;

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
    action: {
      baseName: "action",
      type: "string",
      required: true,
    },
    source: {
      baseName: "source",
      type: "ExternalTeamPermissionSettingDefaultsSource",
      required: true,
    },
    value: {
      baseName: "value",
      type: "string",
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
    return ExternalTeamPermissionSettingDefaultsAttributes.attributeTypeMap;
  }

  public constructor() {}
}
