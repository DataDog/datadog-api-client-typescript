/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The GCP project field that the filters are matched against.
 */

export type GCPProjectFilterConfigType =
  | typeof PROJECT_ID
  | typeof PROJECT_LABEL
  | UnparsedObject;
export const PROJECT_ID = "project_id";
export const PROJECT_LABEL = "project_label";
