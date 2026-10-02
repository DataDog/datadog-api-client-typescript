import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentV2DTOData } from "./ExperimentsExperimentV2DTOData";

/**
 * Response containing an experiment and its configuration.
 */
export class ExperimentsExperimentV2DTO {
  /**
   * Experiment resource with its identifier and configuration.
   */
  "data": ExperimentsExperimentV2DTOData;
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
      type: "ExperimentsExperimentV2DTOData",
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
    return ExperimentsExperimentV2DTO.attributeTypeMap;
  }

  public constructor() {}
}
