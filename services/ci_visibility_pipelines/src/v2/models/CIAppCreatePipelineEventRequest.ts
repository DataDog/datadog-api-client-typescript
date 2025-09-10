import { UnparsedObject } from "@datadog/datadog-api-client";

import { CIAppCreatePipelineEventRequestRootDataArray } from "./CIAppCreatePipelineEventRequestRootDataArray";
import { CIAppCreatePipelineEventRequestRootDataSingle } from "./CIAppCreatePipelineEventRequestRootDataSingle";

/**
 * Request object.
 */
export type CIAppCreatePipelineEventRequest =
  | CIAppCreatePipelineEventRequestRootDataSingle
  | CIAppCreatePipelineEventRequestRootDataArray
  | UnparsedObject;
