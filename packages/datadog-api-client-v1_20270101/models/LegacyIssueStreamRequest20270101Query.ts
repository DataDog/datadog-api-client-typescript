/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { APMIssueStreamQuery } from "./APMIssueStreamQuery";
import { LogsIssueStreamQuery } from "./LogsIssueStreamQuery";
import { RUMIssueStreamQuery } from "./RUMIssueStreamQuery";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type LegacyIssueStreamRequest20270101Query =
  | APMIssueStreamQuery
  | RUMIssueStreamQuery
  | LogsIssueStreamQuery
  | UnparsedObject;
