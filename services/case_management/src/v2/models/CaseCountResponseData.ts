import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { CaseCountResponseAttributes } from "./CaseCountResponseAttributes";

/**
 * Data object containing the count results, including per-field group breakdowns.
 */
export class CaseCountResponseData {
  /**
   * Attributes for the count response, including the total count and optional facet breakdowns.
   */
  "attributes": CaseCountResponseAttributes;
  /**
   * Count response identifier.
   */
  "id": string;
  /**
   * Count resource type.
   */
  "type": string;
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
      type: "CaseCountResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "string",
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
    return CaseCountResponseData.attributeTypeMap;
  }

  public constructor() {}
}
