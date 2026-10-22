import { UnparsedObject } from "@datadog/datadog-api-client";

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
