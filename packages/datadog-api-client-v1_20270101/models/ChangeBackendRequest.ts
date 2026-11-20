/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ChangeBackendRequest20270101OneOf } from "./ChangeBackendRequest20270101OneOf";
import { ChangeBackendRequest20270101OneOf4454622976 } from "./ChangeBackendRequest20270101OneOf4454622976";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type ChangeBackendRequest =
  | ChangeBackendRequest20270101OneOf
  | ChangeBackendRequest20270101OneOf4454622976
  | UnparsedObject;
