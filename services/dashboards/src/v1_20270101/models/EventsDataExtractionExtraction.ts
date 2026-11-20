import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsDataExtractionExtractionType } from "./EventsDataExtractionExtractionType";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsDataExtractionExtraction {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "pattern": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "type": EventsDataExtractionExtractionType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    pattern: {
      baseName: "pattern",
      type: "string",
      required: true,
    },
    type: {
      baseName: "type",
      type: "EventsDataExtractionExtractionType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsDataExtractionExtraction.attributeTypeMap;
  }

  public constructor() {}
}
