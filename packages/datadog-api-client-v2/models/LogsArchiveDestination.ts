/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { LogsArchiveDestinationAzure } from "./LogsArchiveDestinationAzure";
import { LogsArchiveDestinationGCS } from "./LogsArchiveDestinationGCS";
import { LogsArchiveDestinationS3 } from "./LogsArchiveDestinationS3";

import { UnparsedObject } from "../util";

/**
 * An archive's destination.
 */

export type LogsArchiveDestination =
  | LogsArchiveDestinationAzure
  | LogsArchiveDestinationGCS
  | LogsArchiveDestinationS3
  | UnparsedObject;
