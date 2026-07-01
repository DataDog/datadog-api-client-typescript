/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveIntegrationS3AccessKey } from "./LogsArchiveIntegrationS3AccessKey";
import { LogsArchiveIntegrationS3Role } from "./LogsArchiveIntegrationS3Role";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The S3 Archive's integration destination. You must provide one of the following: `access_key_id` alone, or both `account_id` and `role_name` together.
 */

export type LogsArchiveIntegrationS3 =
  | LogsArchiveIntegrationS3AccessKey
  | LogsArchiveIntegrationS3Role
  | UnparsedObject;
