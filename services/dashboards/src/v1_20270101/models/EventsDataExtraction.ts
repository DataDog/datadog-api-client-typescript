import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsDataExtractionExtraction } from "./EventsDataExtractionExtraction";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsDataExtraction {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "column": string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "extraction": EventsDataExtractionExtraction;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    column: {
      baseName: "column",
      type: "string",
      required: true,
    },
    extraction: {
      baseName: "extraction",
      type: "EventsDataExtractionExtraction",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsDataExtraction.attributeTypeMap;
  }

  public constructor() {}
}
