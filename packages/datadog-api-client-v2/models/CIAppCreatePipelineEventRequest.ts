/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppCreatePipelineEventRequestRootDataArray } from "./CIAppCreatePipelineEventRequestRootDataArray";
import { CIAppCreatePipelineEventRequestRootDataSingle } from "./CIAppCreatePipelineEventRequestRootDataSingle";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Request object.
 */

export type CIAppCreatePipelineEventRequest =
  | CIAppCreatePipelineEventRequestRootDataSingle
  | CIAppCreatePipelineEventRequestRootDataArray
  | UnparsedObject;
