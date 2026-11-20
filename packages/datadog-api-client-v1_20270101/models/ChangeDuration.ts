/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeDuration20270101OneOf } from "./ChangeDuration20270101OneOf";
import { ChangeDuration20270101OneOf4454627136 } from "./ChangeDuration20270101OneOf4454627136";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type ChangeDuration =
  | ChangeDuration20270101OneOf
  | ChangeDuration20270101OneOf4454627136
  | UnparsedObject;
