import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricSQLModelV2DTOData } from "./ExperimentsMetricSQLModelV2DTOData";

/**
 * Response containing the metric SQL model.
 */
export class ExperimentsMetricSQLModelV2DTO {
  /**
   * JSON:API resource containing the metric SQL model identity and fields.
   */
  "data": ExperimentsMetricSQLModelV2DTOData;
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
      type: "ExperimentsMetricSQLModelV2DTOData",
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
    return ExperimentsMetricSQLModelV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
