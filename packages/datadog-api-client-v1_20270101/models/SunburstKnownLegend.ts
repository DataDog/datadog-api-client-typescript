/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SunburstKnownLegend20270101OneOf } from "./SunburstKnownLegend20270101OneOf";
import { SunburstKnownLegend20270101OneOf4462427680 } from "./SunburstKnownLegend20270101OneOf4462427680";
import { SunburstKnownLegend20270101OneOf4462657920 } from "./SunburstKnownLegend20270101OneOf4462657920";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type SunburstKnownLegend =
  | SunburstKnownLegend20270101OneOf
  | SunburstKnownLegend20270101OneOf4462427680
  | SunburstKnownLegend20270101OneOf4462657920
  | UnparsedObject;
