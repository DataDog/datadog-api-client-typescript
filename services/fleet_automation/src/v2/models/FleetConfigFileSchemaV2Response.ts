import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { FleetConfigFileSchemaV2ResponseData } from "./FleetConfigFileSchemaV2ResponseData";

/**
 * Response containing the schema for a configuration file.
 */
export class FleetConfigFileSchemaV2Response {
  /**
   * The schema resolved for the requested configuration file.
   */
  "data": FleetConfigFileSchemaV2ResponseData;
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
      type: "FleetConfigFileSchemaV2ResponseData",
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
    return FleetConfigFileSchemaV2Response.attributeTypeMap;
  }

  public constructor() {}
}
