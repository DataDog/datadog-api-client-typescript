import { UnparsedObject } from "@datadog/datadog-api-client";

import { LogsArchiveDestinationAzure } from "./LogsArchiveDestinationAzure";
import { LogsArchiveDestinationGCS } from "./LogsArchiveDestinationGCS";
import { LogsArchiveDestinationS3 } from "./LogsArchiveDestinationS3";

/**
 * An archive's destination.
 */
export type LogsArchiveCreateRequestDestination =
  | LogsArchiveDestinationAzure
  | LogsArchiveDestinationGCS
  | LogsArchiveDestinationS3
  | UnparsedObject;
