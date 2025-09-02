import { UnparsedObject } from "@datadog/datadog-api-client";

import { CIAppCreatePipelineEventRequestData } from "./CIAppCreatePipelineEventRequestData";

/**
 * Data of the pipeline events to create.
 */
export type CIAppCreatePipelineEventRequestDataSingleOrArray =
  | CIAppCreatePipelineEventRequestData
  | Array<CIAppCreatePipelineEventRequestData>
  | UnparsedObject;
