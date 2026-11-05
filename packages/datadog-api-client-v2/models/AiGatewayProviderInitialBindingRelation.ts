/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Provider access relation. Editor also grants View.
 */

export type AiGatewayProviderInitialBindingRelation =
  | typeof VIEWER
  | typeof EDITOR
  | UnparsedObject;
export const VIEWER = "viewer";
export const EDITOR = "editor";
