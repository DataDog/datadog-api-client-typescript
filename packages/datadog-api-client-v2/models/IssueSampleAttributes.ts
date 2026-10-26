/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IssueSampleBias } from "./IssueSampleBias";
import { IssueSampleDataSource } from "./IssueSampleDataSource";
import { IssueSampleErrorStack } from "./IssueSampleErrorStack";
import { IssueSampleFrameLink } from "./IssueSampleFrameLink";

import { AttributeTypeMap } from "../../datadog-api-client-common/util";

/**
 * Object containing the information of a sample.
 */
export class IssueSampleAttributes {
  /**
   * RUM application identifier of the error.
   */
  "applicationId"?: string;
  /**
   * Biases the sample satisfies. A single error can satisfy several biases.
   */
  "biases"?: Array<IssueSampleBias>;
  /**
   * Build identifier of the mobile application.
   */
  "buildId"?: string;
  /**
   * Bundle version of the mobile application.
   */
  "bundleVersion"?: string;
  /**
   * Product that reported the error. The value is `NONE` when the error has no known origin.
   */
  "dataSource"?: IssueSampleDataSource;
  /**
   * Debug identifier used to resolve the stack trace of the error to source code.
   */
  "debugId"?: string;
  /**
   * Whether an Exception Replay snapshot was captured for the error.
   */
  "debugInfoCaptured"?: boolean;
  /**
   * Source type set by the SDK or tracer that reported the error, such as `browser` for RUM browser errors
   * or `Crashtracking` for backend crash reports. Usually not set for APM and logs errors.
   */
  "errorSourceType"?: string;
  /**
   * Parsed stack trace of the error. Only the sample picked by the `git_metadata` bias has frames.
   */
  "errorStack": IssueSampleErrorStack;
  /**
   * Raw error event, as stored by its data source. Its fields differ between APM, logs, and RUM.
   */
  "event"?: { [key: string]: any };
  /**
   * Git commit SHA of the service version.
   */
  "gitCommitSha"?: string;
  /**
   * Git repository identifier of the service.
   */
  "gitRepositoryId"?: string;
  /**
   * Git repository URL of the service.
   */
  "gitRepositoryUrl"?: string;
  /**
   * Whether a RUM session replay is available for the error.
   */
  "hasSessionReplay"?: boolean;
  /**
   * Programming language of the service.
   */
  "language"?: string;
  /**
   * Source code locations of the stack frames that resolve to a repository file.
   */
  "links"?: Array<IssueSampleFrameLink>;
  /**
   * Operating system of the device that reported the error.
   */
  "osName"?: string;
  /**
   * Service name.
   */
  "service"?: string;
  /**
   * RUM session identifier of the error.
   */
  "sessionId"?: string;
  /**
   * URL of the RUM session replay of the error.
   */
  "sessionReplayUrl"?: string;
  /**
   * Identifier of the Exception Replay snapshot of the error.
   */
  "snapshotId"?: string;
  /**
   * APM span identifier of the error.
   */
  "spanId"?: string;
  /**
   * Timestamp of the error.
   */
  "timestamp": Date;
  /**
   * APM trace identifier of the error.
   */
  "traceId"?: string;
  /**
   * Build variant of the mobile application.
   */
  "variant"?: string;
  /**
   * Version of the service.
   */
  "version"?: string;
  /**
   * RUM view identifier of the error.
   */
  "viewId"?: string;

  /**
   * A container for additional, undeclared properties.
   * This is a holder for any undeclared properties as specified with
   * the 'additionalProperties' keyword in the OAS document.
   */
  "additionalProperties"?: { [key: string]: any };

  /**
   * @ignore
   */
  "_unparsed"?: boolean;

  /**
   * @ignore
   */
  static readonly attributeTypeMap: AttributeTypeMap = {
    applicationId: {
      baseName: "application_id",
      type: "string",
    },
    biases: {
      baseName: "biases",
      type: "Array<IssueSampleBias>",
    },
    buildId: {
      baseName: "build_id",
      type: "string",
    },
    bundleVersion: {
      baseName: "bundle_version",
      type: "string",
    },
    dataSource: {
      baseName: "data_source",
      type: "IssueSampleDataSource",
    },
    debugId: {
      baseName: "debug_id",
      type: "string",
    },
    debugInfoCaptured: {
      baseName: "debug_info_captured",
      type: "boolean",
    },
    errorSourceType: {
      baseName: "error_source_type",
      type: "string",
    },
    errorStack: {
      baseName: "error_stack",
      type: "IssueSampleErrorStack",
      required: true,
    },
    event: {
      baseName: "event",
      type: "{ [key: string]: any; }",
    },
    gitCommitSha: {
      baseName: "git_commit_sha",
      type: "string",
    },
    gitRepositoryId: {
      baseName: "git_repository_id",
      type: "string",
    },
    gitRepositoryUrl: {
      baseName: "git_repository_url",
      type: "string",
    },
    hasSessionReplay: {
      baseName: "has_session_replay",
      type: "boolean",
    },
    language: {
      baseName: "language",
      type: "string",
    },
    links: {
      baseName: "links",
      type: "Array<IssueSampleFrameLink>",
    },
    osName: {
      baseName: "os_name",
      type: "string",
    },
    service: {
      baseName: "service",
      type: "string",
    },
    sessionId: {
      baseName: "session_id",
      type: "string",
    },
    sessionReplayUrl: {
      baseName: "session_replay_url",
      type: "string",
    },
    snapshotId: {
      baseName: "snapshot_id",
      type: "string",
    },
    spanId: {
      baseName: "span_id",
      type: "string",
    },
    timestamp: {
      baseName: "timestamp",
      type: "Date",
      required: true,
      format: "date-time",
    },
    traceId: {
      baseName: "trace_id",
      type: "string",
    },
    variant: {
      baseName: "variant",
      type: "string",
    },
    version: {
      baseName: "version",
      type: "string",
    },
    viewId: {
      baseName: "view_id",
      type: "string",
    },
    additionalProperties: {
      baseName: "additionalProperties",
      type: "{ [key: string]: any; }",
    },
  };

  /**
   * @ignore
   */
  static getAttributeTypeMap(): AttributeTypeMap {
    return IssueSampleAttributes.attributeTypeMap;
  }

  public constructor() {}
}
