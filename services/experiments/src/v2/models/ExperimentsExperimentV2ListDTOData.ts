import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentV2ListDTODataAttributes } from "./ExperimentsExperimentV2ListDTODataAttributes";
import { ExperimentsPatchExperimentV2ResponseDataType } from "./ExperimentsPatchExperimentV2ResponseDataType";

/**
 * Experiment resource returned in a list.
 */
export class ExperimentsExperimentV2ListDTOData {
  /**
   * Summary fields for an experiment returned in a list.
   */
  "attributes"?: ExperimentsExperimentV2ListDTODataAttributes;
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
      type: "ExperimentsExperimentV2ListDTODataAttributes",
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
    return ExperimentsExperimentV2ListDTOData.attributeTypeMap;
  }

  public constructor() {}
}
