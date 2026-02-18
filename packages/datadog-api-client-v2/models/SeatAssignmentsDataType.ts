/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Seat assignments resource type.
 */

export type SeatAssignmentsDataType = typeof SEAT_ASSIGNMENTS | UnparsedObject;
export const SEAT_ASSIGNMENTS = "seat-assignments";
