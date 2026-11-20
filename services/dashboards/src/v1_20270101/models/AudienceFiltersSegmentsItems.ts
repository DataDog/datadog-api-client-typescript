import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class AudienceFiltersSegmentsItems {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "name": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "segmentId": string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    name: {
      baseName: "name",
      type: "string",
      required: true,
    },
    segmentId: {
      baseName: "segment_id",
      type: "string",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return AudienceFiltersSegmentsItems.attributeTypeMap;
  }

  public constructor() {}
}
