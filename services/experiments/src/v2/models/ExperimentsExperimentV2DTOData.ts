import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsPatchExperimentV2ResponseDataAttributes } from "./ExperimentsPatchExperimentV2ResponseDataAttributes";
import { ExperimentsPatchExperimentV2ResponseDataType } from "./ExperimentsPatchExperimentV2ResponseDataType";

/**
 * Experiment resource with its identifier and configuration.
 */
export class ExperimentsExperimentV2DTOData {
  /**
   * Details of the experiment.
   */
  "attributes"?: ExperimentsPatchExperimentV2ResponseDataAttributes;
  /**
   * Identifier of the experiment.
   */
  "id": string;
  /**
   * Experiments resource type.
   */
  "type": ExperimentsPatchExperimentV2ResponseDataType;
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
      type: "ExperimentsPatchExperimentV2ResponseDataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsPatchExperimentV2ResponseDataType",
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
    return ExperimentsExperimentV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
