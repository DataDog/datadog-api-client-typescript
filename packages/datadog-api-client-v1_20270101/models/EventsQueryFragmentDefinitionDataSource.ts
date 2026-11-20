/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type EventsQueryFragmentDefinitionDataSource =
  | typeof EVENTS
  | typeof LOGS
  | typeof RUM
  | typeof SYNTHETICS_TEST_RUNS
  | typeof PRODUCT_ANALYTICS
  | typeof NETWORK_DEVICE_FLOWS
  | typeof CI_PIPELINES
  | typeof DATABASE_QUERIES
  | typeof LLM_OBSERVABILITY
  | typeof AUDIT
  | typeof CI_TESTS
  | typeof SPANS
  | UnparsedObject;
export const EVENTS = "events";
export const LOGS = "logs";
export const RUM = "rum";
export const SYNTHETICS_TEST_RUNS = "synthetics_test_runs";
export const PRODUCT_ANALYTICS = "product_analytics";
export const NETWORK_DEVICE_FLOWS = "network_device_flows";
export const CI_PIPELINES = "ci_pipelines";
export const DATABASE_QUERIES = "database_queries";
export const LLM_OBSERVABILITY = "llm_observability";
export const AUDIT = "audit";
export const CI_TESTS = "ci_tests";
export const SPANS = "spans";
