/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Status page component resource type.
 */

export type StatusPageComponentType =
  | typeof STATUS_PAGE_COMPONENTS
  | UnparsedObject;
export const STATUS_PAGE_COMPONENTS = "status_page_components";
