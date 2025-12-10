import { UnparsedObject } from "@datadog/datadog-api-client";

import { SLOCountSpec } from "./SLOCountSpec";
import { SLOTimeSliceSpec } from "./SLOTimeSliceSpec";

/**
 * A generic SLI specification. This is currently used for time-slice and metric SLOs only.
 */
export type SLOSliSpec = SLOTimeSliceSpec | SLOCountSpec | UnparsedObject;
