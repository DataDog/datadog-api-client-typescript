import { UnparsedObject } from "@datadog/datadog-api-client";

import { TopologyMapWidgetDefinitionCustom } from "./TopologyMapWidgetDefinitionCustom";
import { TopologyMapWidgetDefinitionDataStreams } from "./TopologyMapWidgetDefinitionDataStreams";
import { TopologyMapWidgetDefinitionServiceMap } from "./TopologyMapWidgetDefinitionServiceMap";

/**
 * This widget displays a topology of nodes and edges for different data sources. It replaces the service map widget.
 */
export type TopologyMapWidgetDefinition =
  | TopologyMapWidgetDefinitionDataStreams
  | TopologyMapWidgetDefinitionServiceMap
  | TopologyMapWidgetDefinitionCustom
  | UnparsedObject;
