import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsArchiveIntegrationS3AccessKey } from "./LogsArchiveIntegrationS3AccessKey";
import { LogsArchiveIntegrationS3Role } from "./LogsArchiveIntegrationS3Role";

/**
 * The S3 Archive's integration destination. You must provide one of the following: `access_key_id` alone, or both `account_id` and `role_name` together.
 */
export type LogsArchiveIntegrationS3 =
  | LogsArchiveIntegrationS3AccessKey
  | LogsArchiveIntegrationS3Role
  | UnparsedObject;
