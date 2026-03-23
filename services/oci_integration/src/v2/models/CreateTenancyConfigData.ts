import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTenancyConfigDataAttributes } from "./CreateTenancyConfigDataAttributes";
import { UpdateTenancyConfigDataType } from "./UpdateTenancyConfigDataType";

/**
 * The data object for creating a new OCI tenancy integration configuration, including the tenancy ID, type, and configuration attributes.
 */
export class CreateTenancyConfigData {
  /**
   * Attributes for creating a new OCI tenancy integration configuration, including credentials, region settings, and collection options.
   */
  "attributes"?: CreateTenancyConfigDataAttributes;
  /**
   * The OCID of the OCI tenancy to configure.
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
      type: "CreateTenancyConfigDataAttributes",
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
    return CreateTenancyConfigData.attributeTypeMap;
  }

  public constructor() {}
}
