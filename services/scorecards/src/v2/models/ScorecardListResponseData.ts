import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ScorecardListResponseAttributes } from "./ScorecardListResponseAttributes";
import { ScorecardListType } from "./ScorecardListType";

/**
 * Scorecard data.
 */
export class ScorecardListResponseData {
  /**
   * Scorecard attributes.
   */
  "attributes": ScorecardListResponseAttributes;
  /**
   * The unique ID of the scorecard.
   */
  "id": string;
  /**
   * The JSON:API type for scorecard list.
   */
  "type": ScorecardListType;
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
      type: "ScorecardListResponseAttributes",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ScorecardListType",
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
    return ScorecardListResponseData.attributeTypeMap;
  }

  public constructor() {}
}
