import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { MonitorSearchCountItem } from "./MonitorSearchCountItem";

/**
 * The counts of monitors per different criteria.
 */
export class MonitorSearchResponseCounts {
  /**
   * Search facets.
   */
  "muted"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
   */
  "status"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
   */
  "tag"?: Array<MonitorSearchCountItem>;
  /**
   * Search facets.
   */
  "type"?: Array<MonitorSearchCountItem>;
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
    muted: {
      baseName: "muted",
      type: "Array<MonitorSearchCountItem>",
    },
    status: {
      baseName: "status",
      type: "Array<MonitorSearchCountItem>",
    },
    tag: {
      baseName: "tag",
      type: "Array<MonitorSearchCountItem>",
    },
    type: {
      baseName: "type",
      type: "Array<MonitorSearchCountItem>",
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
    return MonitorSearchResponseCounts.attributeTypeMap;
  }

  public constructor() {}
}
