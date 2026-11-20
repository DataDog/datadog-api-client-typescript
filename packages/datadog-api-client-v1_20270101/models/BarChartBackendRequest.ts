/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { BarChartBackendRequest20270101OneOf } from "./BarChartBackendRequest20270101OneOf";
import { BarChartBackendRequest20270101OneOf4454434112 } from "./BarChartBackendRequest20270101OneOf4454434112";
import { BarChartBackendRequest20270101OneOf4454435552 } from "./BarChartBackendRequest20270101OneOf4454435552";
import { BarChartBackendRequest20270101OneOf4454436672 } from "./BarChartBackendRequest20270101OneOf4454436672";
import { BarChartBackendRequest20270101OneOf4454438272 } from "./BarChartBackendRequest20270101OneOf4454438272";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type BarChartBackendRequest =
  | BarChartBackendRequest20270101OneOf
  | BarChartBackendRequest20270101OneOf4454434112
  | BarChartBackendRequest20270101OneOf4454435552
  | BarChartBackendRequest20270101OneOf4454436672
  | BarChartBackendRequest20270101OneOf4454438272
  | UnparsedObject;
