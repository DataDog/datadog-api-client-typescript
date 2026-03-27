/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The status of the campaign.
 */

export type CampaignStatus =
  | typeof IN_PROGRESS
  | typeof NOT_STARTED
  | typeof COMPLETED
  | UnparsedObject;
export const IN_PROGRESS = "in_progress";
export const NOT_STARTED = "not_started";
export const COMPLETED = "completed";
