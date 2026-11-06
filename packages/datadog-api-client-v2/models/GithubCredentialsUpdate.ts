/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GithubAppUpdate } from "./GithubAppUpdate";
import { GithubPersonalAccessTokenUpdate } from "./GithubPersonalAccessTokenUpdate";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Supported GitHub connection credentials for an update.
 */

export type GithubCredentialsUpdate =
  | GithubAppUpdate
  | GithubPersonalAccessTokenUpdate
  | UnparsedObject;
