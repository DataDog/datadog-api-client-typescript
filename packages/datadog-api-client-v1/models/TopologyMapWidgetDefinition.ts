/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TopologyMapWidgetDefinitionDataStreams } from "./TopologyMapWidgetDefinitionDataStreams";
import { TopologyMapWidgetDefinitionServiceMap } from "./TopologyMapWidgetDefinitionServiceMap";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * This widget displays a topology of nodes and edges for different data sources. It replaces the service map widget.
 */

export type TopologyMapWidgetDefinition =
  | TopologyMapWidgetDefinitionDataStreams
  | TopologyMapWidgetDefinitionServiceMap
  | UnparsedObject;
