/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AWSRegionsIncludeAll } from "./AWSRegionsIncludeAll";
import { AWSRegionsIncludeOnly } from "./AWSRegionsIncludeOnly";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * AWS Regions to collect data from
 */

export type AWSRegions =
  | AWSRegionsIncludeAll
  | AWSRegionsIncludeOnly
  | UnparsedObject;
