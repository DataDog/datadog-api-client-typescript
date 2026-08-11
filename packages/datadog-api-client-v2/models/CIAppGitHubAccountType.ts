/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * JSON:API type for the GitHub account resource.
 * The value must always be `ci_github_account`.
 */

export type CIAppGitHubAccountType = typeof CI_GITHUB_ACCOUNT | UnparsedObject;
export const CI_GITHUB_ACCOUNT = "ci_github_account";
