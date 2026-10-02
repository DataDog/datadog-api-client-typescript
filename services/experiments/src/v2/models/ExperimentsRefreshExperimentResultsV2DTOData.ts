import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsRefreshExperimentResultsV2DTODataAttributes } from "./ExperimentsRefreshExperimentResultsV2DTODataAttributes";
import { ExperimentsRefreshExperimentResultsV2DTODataType } from "./ExperimentsRefreshExperimentResultsV2DTODataType";

/**
 * JSON:API resource containing the experiment refresh result identity and fields.
 */
export class ExperimentsRefreshExperimentResultsV2DTOData {
  /**
   * Details of the experiment refresh result.
   */
  "attributes"?: ExperimentsRefreshExperimentResultsV2DTODataAttributes;
  /**
   * ID of the experiment whose results were refreshed.
   */
  "id": string;
  /**
   * Experiment results refresh resource type.
   */
  "type": ExperimentsRefreshExperimentResultsV2DTODataType;
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
      type: "ExperimentsRefreshExperimentResultsV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsRefreshExperimentResultsV2DTODataType",
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
    return ExperimentsRefreshExperimentResultsV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
