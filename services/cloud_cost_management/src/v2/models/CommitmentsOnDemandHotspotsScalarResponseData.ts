import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsOnDemandHotspotsScalarResponseAttributes } from "./CommitmentsOnDemandHotspotsScalarResponseAttributes";
import { ScalarFormulaResponseType } from "./ScalarFormulaResponseType";

/**
 * The scalar on-demand hot-spots resource.
 */
export class CommitmentsOnDemandHotspotsScalarResponseData {
  /**
   * Attributes of a scalar on-demand hot-spots response.
   */
  "attributes": CommitmentsOnDemandHotspotsScalarResponseAttributes;
  /**
   * The identifier of the scalar on-demand hot-spots response.
   */
  "id": string;
  /**
   * The type of the resource. The value should always be scalar_response.
   */
  "type": ScalarFormulaResponseType;
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
      type: "CommitmentsOnDemandHotspotsScalarResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ScalarFormulaResponseType",
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
    return CommitmentsOnDemandHotspotsScalarResponseData.attributeTypeMap;
  }

  public constructor() {}
}
