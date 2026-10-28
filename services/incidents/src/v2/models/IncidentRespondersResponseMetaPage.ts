import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Total count for the responder list.
 */
export class IncidentRespondersResponseMetaPage {
  /**
   * Total number of responders matching the query, before pagination.
   */
  "totalFilteredCount": number;
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
    totalFilteredCount: {
      baseName: "total_filtered_count",
      type: "number",
      required: true,
      format: "int64",
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
    return IncidentRespondersResponseMetaPage.attributeTypeMap;
  }

  public constructor() {}
}
