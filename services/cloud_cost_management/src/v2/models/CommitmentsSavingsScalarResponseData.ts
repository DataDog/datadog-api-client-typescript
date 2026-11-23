import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsSavingsScalarResponseAttributes } from "./CommitmentsSavingsScalarResponseAttributes";
import { ScalarFormulaResponseType } from "./ScalarFormulaResponseType";

/**
 * The scalar savings resource.
 */
export class CommitmentsSavingsScalarResponseData {
  /**
   * Attributes of a scalar savings response.
   */
  "attributes": CommitmentsSavingsScalarResponseAttributes;
  /**
   * The identifier of the scalar savings response.
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
      type: "CommitmentsSavingsScalarResponseAttributes",
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
    return CommitmentsSavingsScalarResponseData.attributeTypeMap;
  }

  public constructor() {}
}
