/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SLOCountDefinitionWithBadEventsFormula } from "./SLOCountDefinitionWithBadEventsFormula";
import { SLOCountDefinitionWithTotalEventsFormula } from "./SLOCountDefinitionWithTotalEventsFormula";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * A count-based (metric) SLI specification, composed of three parts: the good events formula,
 * the bad or total events formula, and the underlying queries.
 * Exactly one of `total_events_formula` or `bad_events_formula` must be provided.
 */

export type SLOCountDefinition =
  | SLOCountDefinitionWithTotalEventsFormula
  | SLOCountDefinitionWithBadEventsFormula
  | UnparsedObject;
