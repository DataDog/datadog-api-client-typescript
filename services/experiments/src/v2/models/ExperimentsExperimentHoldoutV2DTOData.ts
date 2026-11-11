import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentHoldoutV2DTODataAttributes } from "./ExperimentsExperimentHoldoutV2DTODataAttributes";
import { ExperimentsExperimentHoldoutV2DTODataType } from "./ExperimentsExperimentHoldoutV2DTODataType";

/**
 * A holdout the experiment is attached to.
 */
export class ExperimentsExperimentHoldoutV2DTOData {
  /**
   * Attributes of a holdout that the experiment is attached to.
   */
  "attributes"?: ExperimentsExperimentHoldoutV2DTODataAttributes;
  /**
   * Identifier of the holdout.
   */
  "id": string;
  /**
   * Experiment holdout resource type.
   */
  "type": ExperimentsExperimentHoldoutV2DTODataType;
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
      type: "ExperimentsExperimentHoldoutV2DTODataAttributes",
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
      format: "uuid",
    },
    type: {
      baseName: "type",
      type: "ExperimentsExperimentHoldoutV2DTODataType",
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
    return ExperimentsExperimentHoldoutV2DTOData.attributeTypeMap;
  }

  public constructor() {}
}
