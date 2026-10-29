/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of a resource linked to a Page.
 */

export type OnCallPageLinkEntityType =
  | typeof CASE
  | typeof INCIDENT
  | typeof PAGE
  | typeof AGENT_CONVERSATION
  | UnparsedObject;
export const CASE = "case";
export const INCIDENT = "incident";
export const PAGE = "page";
export const AGENT_CONVERSATION = "agent_conversation";
