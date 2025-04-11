import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeMeta } from "./DowntimeMeta";
import { DowntimeResponseData } from "./DowntimeResponseData";
import { DowntimeResponseIncludedItem } from "./DowntimeResponseIncludedItem";

/**
 * Response for retrieving all downtimes.
 */
export class ListDowntimesResponse {
  /**
   * An array of downtimes.
   */
  "data"?: Array<DowntimeResponseData>;
  /**
   * Array of objects related to the downtimes.
   */
  "included"?: Array<DowntimeResponseIncludedItem>;
  /**
   * Pagination metadata returned by the API.
   */
  "meta"?: DowntimeMeta;
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
      type: "Array<DowntimeResponseData>",
    },
    included: {
      baseName: "included",
      type: "Array<DowntimeResponseIncludedItem>",
    },
    meta: {
      baseName: "meta",
      type: "DowntimeMeta",
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
    return ListDowntimesResponse.attributeTypeMap;
  }

  public constructor() {}
}
