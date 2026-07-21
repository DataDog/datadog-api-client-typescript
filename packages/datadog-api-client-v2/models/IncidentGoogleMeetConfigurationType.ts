/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Google Meet configuration resource type.
 */

export type IncidentGoogleMeetConfigurationType =
  | typeof GOOGLE_MEET_CONFIGURATIONS
  | UnparsedObject;
export const GOOGLE_MEET_CONFIGURATIONS = "google_meet_configurations";
