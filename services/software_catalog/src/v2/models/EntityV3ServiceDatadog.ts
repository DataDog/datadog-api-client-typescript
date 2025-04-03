import { AttributeTypeMap } from "@datadog/datadog-api-client";

import { EntityV3DatadogCodeLocationItem } from "./EntityV3DatadogCodeLocationItem";
import { EntityV3DatadogEventItem } from "./EntityV3DatadogEventItem";
import { EntityV3DatadogLogItem } from "./EntityV3DatadogLogItem";
import { EntityV3DatadogPerformance } from "./EntityV3DatadogPerformance";
import { EntityV3DatadogPipelines } from "./EntityV3DatadogPipelines";

/**
 * Datadog product integrations for the service entity.
 */
export class EntityV3ServiceDatadog {
  /**
   * Schema for mapping source code locations to an entity.
   */
  "codeLocations"?: Array<EntityV3DatadogCodeLocationItem>;
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
   * CI Pipelines association.
   */
  "pipelines"?: EntityV3DatadogPipelines;
  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    codeLocations: {
      baseName: "codeLocations",
      type: "Array<EntityV3DatadogCodeLocationItem>",
    },
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
    pipelines: {
      baseName: "pipelines",
      type: "EntityV3DatadogPipelines",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return EntityV3ServiceDatadog.attributeTypeMap;
  }

  public constructor() {}
}
