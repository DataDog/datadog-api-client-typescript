/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type of an LLM Observability patterns topics-with-clustered-points response.
 */

export type LLMObsPatternsTopicsWithClusteredPointsType =
  | typeof GET_TOPICS_WITH_CLUSTER_POINTS_RESPONSE
  | UnparsedObject;
export const GET_TOPICS_WITH_CLUSTER_POINTS_RESPONSE =
  "get_topics_with_cluster_points_response";
