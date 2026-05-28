/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Issue definitions resource type.
 */

export type IssueDefinitionDataType = typeof ISSUE_DEFINITIONS | UnparsedObject;
export const ISSUE_DEFINITIONS = "issue_definitions";
