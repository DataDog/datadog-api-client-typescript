import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditResultsV2DTOData } from "./ExperimentsBanditResultsV2DTOData";

/**
 * Response containing a bandit's results.
 */
export class ExperimentsBanditResultsV2DTO {
  /**
   * JSON:API resource containing a bandit's results.
   */
  "data": ExperimentsBanditResultsV2DTOData;
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
      type: "ExperimentsBanditResultsV2DTOData",
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
    return ExperimentsBanditResultsV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
