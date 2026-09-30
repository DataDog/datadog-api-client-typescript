/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Which revisions to return for each entity: `latest` returns only the latest revision of each entity as of `to`,
 * and `all` returns every revision in the requested time range.
 */

export type EntityContextRevisionsMode =
  | typeof LATEST
  | typeof ALL
  | UnparsedObject;
export const LATEST = "latest";
export const ALL = "all";
