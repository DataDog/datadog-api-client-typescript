/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EntityV3DatadogCodeLocationItem } from "./EntityV3DatadogCodeLocationItem";
import { EntityV3DatadogEventItem } from "./EntityV3DatadogEventItem";
import { EntityV3DatadogLogItem } from "./EntityV3DatadogLogItem";
import { EntityV3DatadogPerformance } from "./EntityV3DatadogPerformance";
import { EntityV3DatadogPipelines } from "./EntityV3DatadogPipelines";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Datadog product integrations for the API entity.
 */
export class EntityV3APIDatadog {
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
    return EntityV3APIDatadog.attributeTypeMap;
  }

  public constructor() {}
}
