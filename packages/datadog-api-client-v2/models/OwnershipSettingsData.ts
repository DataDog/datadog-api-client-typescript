/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { OwnershipSettingsAttributes } from "./OwnershipSettingsAttributes";
import { OwnershipSettingsType } from "./OwnershipSettingsType";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * The data wrapper for an ownership settings response.
 */
export class OwnershipSettingsData {
  /**
   * The attributes of the ownership settings response.
   */
  "attributes": OwnershipSettingsAttributes;
  /**
   * The identifier of the ownership settings resource.
   */
  "id": string;
  /**
   * The type of the ownership settings resource. The value should always be `ownership_settings`.
   */
  "type": OwnershipSettingsType;

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
      type: "OwnershipSettingsAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "OwnershipSettingsType",
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
    return OwnershipSettingsData.attributeTypeMap;
  }

  public constructor() {}
}
