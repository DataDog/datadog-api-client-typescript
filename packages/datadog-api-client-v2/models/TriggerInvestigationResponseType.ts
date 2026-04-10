/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The resource type for trigger investigation responses.
 */

export type TriggerInvestigationResponseType =
  | typeof TRIGGER_INVESTIGATION_RESPONSE
  | UnparsedObject;
export const TRIGGER_INVESTIGATION_RESPONSE = "trigger_investigation_response";
