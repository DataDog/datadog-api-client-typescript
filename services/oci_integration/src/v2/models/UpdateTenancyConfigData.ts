import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { UpdateTenancyConfigDataAttributes } from "./UpdateTenancyConfigDataAttributes";
import { UpdateTenancyConfigDataType } from "./UpdateTenancyConfigDataType";

/**
 * The data object for updating an existing OCI tenancy integration configuration, including the tenancy ID, type, and updated attributes.
 */
export class UpdateTenancyConfigData {
  /**
   * Attributes for updating an existing OCI tenancy integration configuration, including optional credentials, region settings, and collection options.
   */
  "attributes"?: UpdateTenancyConfigDataAttributes;
  /**
   * The OCID of the OCI tenancy to update.
   */
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
