import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExposureSQLModelV2DTOData } from "./ExperimentsExposureSQLModelV2DTOData";

/**
 * Response containing a SQL model for experiment assignment data.
 */
export class ExperimentsExposureSQLModelV2DTO {
  /**
   * Exposure SQL model resource with its identifier and configuration.
   */
  "data": ExperimentsExposureSQLModelV2DTOData;
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
      type: "ExperimentsExposureSQLModelV2DTOData",
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
    return ExperimentsExposureSQLModelV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
