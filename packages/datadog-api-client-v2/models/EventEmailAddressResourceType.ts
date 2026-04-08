/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the resource. Must be `event_emails`.
 */

export type EventEmailAddressResourceType =
  | typeof EVENT_EMAILS
  | UnparsedObject;
export const EVENT_EMAILS = "event_emails";
