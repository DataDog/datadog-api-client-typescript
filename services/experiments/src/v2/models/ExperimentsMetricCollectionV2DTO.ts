import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsMetricCollectionV2DTOData } from "./ExperimentsMetricCollectionV2DTOData";

/**
 * Response containing the metric collection.
 */
export class ExperimentsMetricCollectionV2DTO {
  /**
   * JSON:API resource containing the metric collection identity and fields.
   */
  "data": ExperimentsMetricCollectionV2DTOData;
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
      type: "ExperimentsMetricCollectionV2DTOData",
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
    return ExperimentsMetricCollectionV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
