import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsBanditV2DTODataType } from "./ExperimentsBanditV2DTODataType";
import { ExperimentsBanditV2ListDTODataAttributes } from "./ExperimentsBanditV2ListDTODataAttributes";

/**
 * JSON:API resource containing a bandit summary.
 */
export class ExperimentsBanditV2ListDTOData {
  /**
   * Summary of a bandit. Use Get bandit for its setup, active policy, and latest refresh.
   */
  "attributes": ExperimentsBanditV2ListDTODataAttributes;
  /**
   * The bandit ID.
   */
  "id": string;
  /**
   * Bandit resource type.
   */
  "type": ExperimentsBanditV2DTODataType;
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
      type: "ExperimentsBanditV2ListDTODataAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsBanditV2DTODataType",
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
    return ExperimentsBanditV2ListDTOData.attributeTypeMap;
  }

  public constructor() {}
}
