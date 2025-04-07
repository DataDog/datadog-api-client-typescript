import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { IncidentResponseIncludedItem } from "./IncidentResponseIncludedItem";
import { IncidentSearchResponseData } from "./IncidentSearchResponseData";
import { IncidentSearchResponseMeta } from "./IncidentSearchResponseMeta";

/**
 * Response with incidents and facets.
 */
export class IncidentSearchResponse {
  /**
   * Data returned by an incident search.
   */
  "data": IncidentSearchResponseData;
  /**
   * Included related resources that the user requested.
   */
  "included"?: Array<IncidentResponseIncludedItem>;
  /**
   * The metadata object containing pagination metadata.
   */
  "meta"?: IncidentSearchResponseMeta;
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
      type: "IncidentSearchResponseData",
      required: true,
    },
    included: {
      baseName: "included",
      type: "Array<IncidentResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "IncidentSearchResponseMeta",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "any",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IncidentSearchResponse.attributeTypeMap;
  }

  public constructor() {}
}
