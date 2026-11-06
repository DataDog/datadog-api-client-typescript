/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { GithubApp } from "./GithubApp";
import { GithubPersonalAccessToken } from "./GithubPersonalAccessToken";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Supported GitHub connection credentials.
 */

export type GithubCredentials =
  | GithubApp
  | GithubPersonalAccessToken
  | UnparsedObject;
