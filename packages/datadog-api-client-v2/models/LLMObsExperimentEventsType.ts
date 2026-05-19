/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Resource type for an experiment events collection.
 */

export type LLMObsExperimentEventsType =
  | typeof EXPERIMENT_EVENTS
  | UnparsedObject;
export const EXPERIMENT_EVENTS = "experiment_events";
