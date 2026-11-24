/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The source type for an AWS IAM Identity Center entity context sync.
 */

export type SecurityMonitoringIntegrationTypeAWSIdentityCenter =
  | typeof AWS_IDENTITY_CENTER
  | UnparsedObject;
export const AWS_IDENTITY_CENTER = "AWS_IDENTITY_CENTER";
