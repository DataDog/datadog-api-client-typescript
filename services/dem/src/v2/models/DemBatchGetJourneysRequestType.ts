import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The resource type for a request to retrieve DEM journeys by test suite IDs.
 */
export type DemBatchGetJourneysRequestType =
  | typeof BATCH_GET_JOURNEYS_BY_TEST_SUITE_IDS_REQUEST
  | UnparsedObject;
export const BATCH_GET_JOURNEYS_BY_TEST_SUITE_IDS_REQUEST =
  "batch_get_journeys_by_test_suite_ids_request";
