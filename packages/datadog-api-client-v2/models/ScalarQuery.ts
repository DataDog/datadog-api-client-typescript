/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { EventsScalarQuery } from "./EventsScalarQuery";
import { MetricsScalarQuery } from "./MetricsScalarQuery";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * An individual scalar query to one of the basic Datadog data sources.
 */

export type ScalarQuery =
  | MetricsScalarQuery
  | EventsScalarQuery
  | UnparsedObject;
