import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EventsHistogramRequestRequestType } from "./EventsHistogramRequestRequestType";
import { FormulaEventsQuery } from "./FormulaEventsQuery";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class EventsHistogramRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "numberFormat"?: WidgetNumberFormat;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": FormulaEventsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "requestType": EventsHistogramRequestRequestType;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    numberFormat: {
      baseName: "number_format",
      type: "WidgetNumberFormat",
    },
    query: {
      baseName: "query",
      type: "FormulaEventsQuery",
      required: true,
    },
    requestType: {
      baseName: "request_type",
      type: "EventsHistogramRequestRequestType",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EventsHistogramRequest.attributeTypeMap;
  }

  public constructor() {}
}
