import { AttributeTypeMap } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsContext {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "contextEvent"?: string;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "toEvent"?: string;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    contextEvent: {
      baseName: "context_event",
      type: "string",
    },
    toEvent: {
      baseName: "to_event",
      type: "string",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsContext.attributeTypeMap;
  }

  public constructor() {}
}
