import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipSettingsRequestAttributes } from "./OwnershipSettingsRequestAttributes";
import { OwnershipSettingsType } from "./OwnershipSettingsType";

/**
 * The data wrapper for an ownership settings request.
 */
export class OwnershipSettingsRequestData {
  /**
   * The attributes of an ownership settings request.
   */
  "attributes": OwnershipSettingsRequestAttributes;
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
      type: "OwnershipSettingsRequestAttributes",
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
    return OwnershipSettingsRequestData.attributeTypeMap;
  }

  public constructor() {}
}
