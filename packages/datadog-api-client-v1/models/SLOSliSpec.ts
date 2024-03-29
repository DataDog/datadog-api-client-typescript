/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOTimeSliceSpec } from "./SLOTimeSliceSpec";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A generic SLI specification. This is currently used for time-slice SLOs only.
 */

export type SLOSliSpec = SLOTimeSliceSpec | UnparsedObject;
