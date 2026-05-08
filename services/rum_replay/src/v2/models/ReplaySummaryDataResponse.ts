import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { ReplaySummaryDataAttributesResponse } from "./ReplaySummaryDataAttributesResponse";
import { ReplaySummaryResponseType } from "./ReplaySummaryResponseType";

/**
 * Data object for a RUM replay summary response.
 */
export class ReplaySummaryDataResponse {
  /**
   * Attributes of a RUM replay summary response.
   */
  "attributes": ReplaySummaryDataAttributesResponse;
  /**
   * Unique identifier of the generated summary.
   */
  "id": string;
  /**
   * RUM replay summary response resource type.
   */
  "type": ReplaySummaryResponseType;
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
      type: "ReplaySummaryDataAttributesResponse",
      required: true,
    },
    id: {
      baseName: "id",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "ReplaySummaryResponseType",
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
    return ReplaySummaryDataResponse.attributeTypeMap;
  }

  public constructor() {}
}
