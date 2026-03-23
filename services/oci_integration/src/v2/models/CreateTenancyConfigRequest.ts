import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CreateTenancyConfigData } from "./CreateTenancyConfigData";

/**
 * Request body for creating a new OCI tenancy integration configuration.
 */
export class CreateTenancyConfigRequest {
  /**
   * The data object for creating a new OCI tenancy integration configuration, including the tenancy ID, type, and configuration attributes.
   */
  "data": CreateTenancyConfigData;
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
      type: "CreateTenancyConfigData",
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
    return CreateTenancyConfigRequest.attributeTypeMap;
  }

  public constructor() {}
}
