/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Criterion used to pick a sample. `latest` picks the most recent error. `git_metadata` picks the most
 * recent error with source code metadata, whose stack trace is parsed. `trace` picks the most recent error
 * with an APM trace. `session_replay` picks the most recent error with a RUM session replay.
 * `exception_replay` picks the most recent error with an Exception Replay snapshot.
 */

export type IssueSampleBias =
  | typeof LATEST
  | typeof GIT_METADATA
  | typeof TRACE
  | typeof SESSION_REPLAY
  | typeof EXCEPTION_REPLAY
  | UnparsedObject;
export const LATEST = "latest";
export const GIT_METADATA = "git_metadata";
export const TRACE = "trace";
export const SESSION_REPLAY = "session_replay";
export const EXCEPTION_REPLAY = "exception_replay";
