/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AzureFallbackDestination } from "./AzureFallbackDestination";
import { GCSFallbackDestination } from "./GCSFallbackDestination";
import { S3FallbackDestination } from "./S3FallbackDestination";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The archiving destination to fall back to.
 */

export type CustomDestinationFallbackDestination =
  | AzureFallbackDestination
  | GCSFallbackDestination
  | S3FallbackDestination
  | UnparsedObject;
