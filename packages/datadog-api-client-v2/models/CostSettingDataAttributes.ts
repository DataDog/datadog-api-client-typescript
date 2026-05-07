/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Attributes for a cost setting.
 */
export class CostSettingDataAttributes {
  /**
   * The timestamp when the setting was created.
   */
  "createdAt": string;
  /**
   * The UUID of the user who created the setting.
   */
  "createdBy": string;
  /**
   * The setting data as a flexible key-value map.
   */
  "data"?: { [key: string]: any };
  /**
   * A human-readable description of the setting.
   */
  "description": string;
  /**
   * The UUID of the user who last modified the setting.
   */
  "lastModifiedBy": string;
  /**
   * The name of the setting.
   */
  "settingName": string;
  /**
   * The timestamp when the setting was last updated.
   */
  "updatedAt": string;
  /**
   * The version of the setting.
   */
  "version": string;

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
    createdAt: {
      baseName: "created_at",
      type: "string",
      required: true,
    },
    createdBy: {
      baseName: "created_by",
      type: "string",
      required: true,
    },
    data: {
      baseName: "data",
      type: "{ [key: string]: any; }",
    },
    description: {
      baseName: "description",
      type: "string",
      required: true,
    },
    lastModifiedBy: {
      baseName: "last_modified_by",
      type: "string",
      required: true,
    },
    settingName: {
      baseName: "setting_name",
      type: "string",
      required: true,
    },
    updatedAt: {
      baseName: "updated_at",
      type: "string",
      required: true,
    },
    version: {
      baseName: "version",
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
    return CostSettingDataAttributes.attributeTypeMap;
  }

  public constructor() {}
}
