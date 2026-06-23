/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelineEventFinishedJob } from "./CIAppPipelineEventFinishedJob";
import { CIAppPipelineEventInProgressJob } from "./CIAppPipelineEventInProgressJob";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Details of a CI job.
 */

export type CIAppPipelineEventJob =
  | CIAppPipelineEventFinishedJob
  | CIAppPipelineEventInProgressJob
  | UnparsedObject;
