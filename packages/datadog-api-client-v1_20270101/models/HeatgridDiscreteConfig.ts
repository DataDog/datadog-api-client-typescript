/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { HeatgridDiscreteConfig20270101OneOf } from "./HeatgridDiscreteConfig20270101OneOf";
import { HeatgridDiscreteConfig20270101OneOf4457881312 } from "./HeatgridDiscreteConfig20270101OneOf4457881312";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type HeatgridDiscreteConfig =
  | HeatgridDiscreteConfig20270101OneOf
  | HeatgridDiscreteConfig20270101OneOf4457881312
  | UnparsedObject;
