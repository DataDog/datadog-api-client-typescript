/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The location where the postmortem is created and stored.
 */

export type PostmortemTemplateLocation =
  | typeof DATADOG_NOTEBOOKS
  | typeof CONFLUENCE
  | typeof GOOGLE_DOCS
  | UnparsedObject;
export const DATADOG_NOTEBOOKS = "datadog_notebooks";
export const CONFLUENCE = "confluence";
export const GOOGLE_DOCS = "google_docs";
