import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CommitmentsListResponseAttributes } from "./CommitmentsListResponseAttributes";
import { CommitmentsListResponseType } from "./CommitmentsListResponseType";

/**
 * The commitments list resource.
 */
export class CommitmentsListResponseData {
  /**
   * Attributes of a commitments list response.
   */
  "attributes": CommitmentsListResponseAttributes;
  /**
   * The identifier of the commitments list response.
   */
  "id": string;
  /**
   * Type of the commitments list response resource.
   */
  "type": CommitmentsListResponseType;
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
      type: "CommitmentsListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "CommitmentsListResponseType",
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
    return CommitmentsListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
