/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API type for branch coverage summary request. The value must always be `ci_app_coverage_branch_summary_request`.
 */

export type BranchCoverageSummaryRequestType =
  | typeof CI_APP_COVERAGE_BRANCH_SUMMARY_REQUEST
  | UnparsedObject;
export const CI_APP_COVERAGE_BRANCH_SUMMARY_REQUEST =
  "ci_app_coverage_branch_summary_request";
