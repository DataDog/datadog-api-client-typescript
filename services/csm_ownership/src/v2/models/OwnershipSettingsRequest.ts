import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { OwnershipSettingsRequestData } from "./OwnershipSettingsRequestData";

/**
 * The request body for updating ownership settings.
 */
export class OwnershipSettingsRequest {
  /**
   * The data wrapper for an ownership settings request.
   */
  "data": OwnershipSettingsRequestData;
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
    data: {
      baseName: "data",
      type: "OwnershipSettingsRequestData",
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
    return OwnershipSettingsRequest.attributeTypeMap;
  }

  public constructor() {}
}
