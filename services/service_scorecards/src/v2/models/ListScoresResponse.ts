import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { PaginatedResponseMeta } from "./PaginatedResponseMeta";
import { ScoreResponseData } from "./ScoreResponseData";

/**
 * Response containing a list of scores.
 */
export class ListScoresResponse {
  /**
   * Array of scores.
   */
  "data": Array<ScoreResponseData>;
  /**
   * Metadata for scores response.
   */
  "meta": PaginatedResponseMeta;
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
      type: "Array<ScoreResponseData>",
      required: true,
    },
    meta: {
      baseName: "meta",
      type: "PaginatedResponseMeta",
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
    return ListScoresResponse.attributeTypeMap;
  }

  public constructor() {}
}
