import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ExperimentsExperimentHoldoutV2DTOData } from "./ExperimentsExperimentHoldoutV2DTOData";

/**
 * Response containing the holdouts an experiment is attached to.
 */
export class ExperimentsExperimentHoldoutV2DTOArray {
  /**
   * Holdouts the experiment is attached to, in evaluation order.
   */
  "data": Array<ExperimentsExperimentHoldoutV2DTOData>;
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
      type: "Array<ExperimentsExperimentHoldoutV2DTOData>",
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
    return ExperimentsExperimentHoldoutV2DTOArray.attributeTypeMap;
  }

  public constructor() {}
}
