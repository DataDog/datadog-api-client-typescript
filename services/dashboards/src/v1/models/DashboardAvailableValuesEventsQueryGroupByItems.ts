import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * A field to group by in the available values query.
 */
export class DashboardAvailableValuesEventsQueryGroupByItems {
  /**
   * The facet to group by.
   */
  "facet": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    facet: {
      baseName: "facet",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return DashboardAvailableValuesEventsQueryGroupByItems.attributeTypeMap;
  }

  public constructor() {}
}
