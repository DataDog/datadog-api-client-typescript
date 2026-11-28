/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { DashboardInlineSchema46 } from "./DashboardInlineSchema46";
import { SloMeasureEvents } from "./SloMeasureEvents";
import { SloMeasureMinutes } from "./SloMeasureMinutes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type SloMeasure =
  | DashboardInlineSchema46
  | SloMeasureEvents
  | SloMeasureMinutes
  | UnparsedObject;
