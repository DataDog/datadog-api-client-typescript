import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateTenancyConfigDataAttributes } from "./UpdateTenancyConfigDataAttributes";
import { UpdateTenancyConfigDataType } from "./UpdateTenancyConfigDataType";

export class UpdateTenancyConfigData {
  "attributes"?: UpdateTenancyConfigDataAttributes;
  "id": string;
  /**
   * OCI tenancy resource type.
   */
  "type": UpdateTenancyConfigDataType;
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
      type: "UpdateTenancyConfigDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "UpdateTenancyConfigDataType",
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
    return UpdateTenancyConfigData.attributeTypeMap;
  }

  public constructor() {}
}
