/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of the status page controlling how the status page is accessed. Public pages are accessible to anyone, internal pages are accessible to authenticated users in the Datadog organization, and private pages are accessible only to users matching an allow email access policy and no deny email access policy.
 */

export type CreateStatusPageRequestDataAttributesType =
  | typeof PUBLIC
  | typeof INTERNAL
  | typeof PRIVATE
  | UnparsedObject;
export const PUBLIC = "public";
export const INTERNAL = "internal";
export const PRIVATE = "private";
