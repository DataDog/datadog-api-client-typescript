import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentV2DTOData } from "./ExperimentsExperimentV2DTOData";
import { ExperimentsPatchExperimentV2MetaDTO } from "./ExperimentsPatchExperimentV2MetaDTO";

/**
 * Response containing the updated experiment, refresh requirements, and warnings.
 */
export class ExperimentsPatchExperimentV2Response {
  /**
   * Experiment resource with its identifier and configuration.
   */
  "data": ExperimentsExperimentV2DTOData;
  /**
   * Refresh requirements and warnings returned by an experiment update.
   */
  "meta"?: ExperimentsPatchExperimentV2MetaDTO;
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
    meta: {
      baseName: "meta",
      type: "ExperimentsPatchExperimentV2MetaDTO",
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
    return ExperimentsPatchExperimentV2Response.attributeTypeMap;
  }

  public constructor() {}
}
