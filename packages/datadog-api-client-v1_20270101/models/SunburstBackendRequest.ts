/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstBackendRequest20270101OneOf } from "./SunburstBackendRequest20270101OneOf";
import { SunburstBackendRequest20270101OneOf4462422560 } from "./SunburstBackendRequest20270101OneOf4462422560";
import { SunburstBackendRequest20270101OneOf4462423840 } from "./SunburstBackendRequest20270101OneOf4462423840";
import { SunburstBackendRequest20270101OneOf4462424800 } from "./SunburstBackendRequest20270101OneOf4462424800";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type SunburstBackendRequest =
  | SunburstBackendRequest20270101OneOf
  | SunburstBackendRequest20270101OneOf4462422560
  | SunburstBackendRequest20270101OneOf4462423840
  | SunburstBackendRequest20270101OneOf4462424800
  | UnparsedObject;
