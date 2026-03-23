import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { TenancyConfigDataAttributes } from "./TenancyConfigDataAttributes";
import { UpdateTenancyConfigDataType } from "./UpdateTenancyConfigDataType";

/**
 * A single OCI tenancy integration configuration resource object containing the tenancy ID, type, and configuration attributes.
 */
export class TenancyConfigData {
  /**
   * Attributes of an OCI tenancy integration configuration, including authentication details, region settings, and collection options.
   */
  "attributes"?: TenancyConfigDataAttributes;
  /**
   * The OCID of the OCI tenancy.
   */
  "id"?: string;
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
      type: "TenancyConfigDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
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
    return TenancyConfigData.attributeTypeMap;
  }

  public constructor() {}
}
