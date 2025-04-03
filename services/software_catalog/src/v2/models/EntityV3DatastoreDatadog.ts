import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3DatadogEventItem } from "./EntityV3DatadogEventItem";
import { EntityV3DatadogLogItem } from "./EntityV3DatadogLogItem";
import { EntityV3DatadogPerformance } from "./EntityV3DatadogPerformance";

/**
 * Datadog product integrations for the datastore entity.
 */
export class EntityV3DatastoreDatadog {
  /**
   * Events associations.
   */
  "events"?: Array<EntityV3DatadogEventItem>;
  /**
   * Logs association.
   */
  "logs"?: Array<EntityV3DatadogLogItem>;
  /**
   * Performance stats association.
   */
  "performanceData"?: EntityV3DatadogPerformance;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    events: {
      baseName: "events",
      type: "Array<EntityV3DatadogEventItem>",
    },
    logs: {
      baseName: "logs",
      type: "Array<EntityV3DatadogLogItem>",
    },
    performanceData: {
      baseName: "performanceData",
      type: "EntityV3DatadogPerformance",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3DatastoreDatadog.attributeTypeMap;
  }

  public constructor() {}
}
