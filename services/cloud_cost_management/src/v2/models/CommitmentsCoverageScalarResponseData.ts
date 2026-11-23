import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsCoverageScalarResponseAttributes } from "./CommitmentsCoverageScalarResponseAttributes";
import { ScalarFormulaResponseType } from "./ScalarFormulaResponseType";

/**
 * The scalar coverage resource.
 */
export class CommitmentsCoverageScalarResponseData {
  /**
   * Attributes of a scalar coverage response.
   */
  "attributes": CommitmentsCoverageScalarResponseAttributes;
  /**
   * The identifier of the scalar coverage response.
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
      type: "CommitmentsCoverageScalarResponseAttributes",
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
    return CommitmentsCoverageScalarResponseData.attributeTypeMap;
  }

  public constructor() {}
}
