import { UnparsedObject } from "@datadog/datadog-api-client";

import { SLOTimeSliceSpec } from "./SLOTimeSliceSpec";

/**
 * A generic SLI specification. This is currently used for time-slice SLOs only.
 */
export type SLOSliSpec = SLOTimeSliceSpec | UnparsedObject;
