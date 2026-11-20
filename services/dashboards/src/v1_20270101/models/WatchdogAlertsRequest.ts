import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { WatchdogAlertsQuery } from "./WatchdogAlertsQuery";
import { WatchdogAlertsRequestColumnsItems } from "./WatchdogAlertsRequestColumnsItems";
import { WatchdogAlertsRequestResponseFormat } from "./WatchdogAlertsRequestResponseFormat";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export class WatchdogAlertsRequest {
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "columns": Array<WatchdogAlertsRequestColumnsItems>;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "query": WatchdogAlertsQuery;
  /**
   * Test-only generated schema for the dashboard versioning proof of concept.
   */
  "responseFormat": WatchdogAlertsRequestResponseFormat;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    columns: {
      baseName: "columns",
      type: "Array<WatchdogAlertsRequestColumnsItems>",
      required: true,
    },
    query: {
      baseName: "query",
      type: "WatchdogAlertsQuery",
      required: true,
    },
    responseFormat: {
      baseName: "response_format",
      type: "WatchdogAlertsRequestResponseFormat",
      required: true,
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return WatchdogAlertsRequest.attributeTypeMap;
  }

  public constructor() {}
}
