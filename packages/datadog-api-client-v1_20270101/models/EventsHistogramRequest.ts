/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsHistogramRequestRequestType } from "./EventsHistogramRequestRequestType";
import { FormulaEventsQuery } from "./FormulaEventsQuery";
import { WidgetNumberFormat } from "./WidgetNumberFormat";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

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
