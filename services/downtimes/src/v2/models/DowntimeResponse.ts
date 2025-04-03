import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { DowntimeResponseData } from "./DowntimeResponseData";
import { DowntimeResponseIncludedItem } from "./DowntimeResponseIncludedItem";

/**
 * Downtiming gives you greater control over monitor notifications by
 * allowing you to globally exclude scopes from alerting.
 * Downtime settings, which can be scheduled with start and end times,
 * prevent all alerting related to specified Datadog tags.
 */
export class DowntimeResponse {
  /**
   * Downtime data.
   */
  "data"?: DowntimeResponseData;
  /**
   * Array of objects related to the downtime that the user requested.
   */
  "included"?: Array<DowntimeResponseIncludedItem>;
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
      type: "DowntimeResponseData",
    },
    included: {
      baseName: "included",
      type: "Array<DowntimeResponseIncludedItem>",
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
    return DowntimeResponse.attributeTypeMap;
  }

  public constructor() {}
}
