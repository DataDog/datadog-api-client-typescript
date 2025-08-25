/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Integration ID sourced from integration manifests.
 */

export type EventSystemAttributesIntegrationId =
  | typeof CUSTOM_EVENTS
  | UnparsedObject;
export const CUSTOM_EVENTS = "custom-events";
