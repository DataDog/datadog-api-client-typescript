/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for a request to retrieve DEM journeys by test suite IDs.
 */

export type DemBatchGetJourneysRequestType =
  | typeof BATCH_GET_JOURNEYS_BY_TEST_SUITE_IDS_REQUEST
  | UnparsedObject;
export const BATCH_GET_JOURNEYS_BY_TEST_SUITE_IDS_REQUEST =
  "batch_get_journeys_by_test_suite_ids_request";
