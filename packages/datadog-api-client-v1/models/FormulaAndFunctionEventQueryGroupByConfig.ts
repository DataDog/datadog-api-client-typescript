/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { FormulaAndFunctionEventQueryGroupBy } from "./FormulaAndFunctionEventQueryGroupBy";
import { FormulaAndFunctionEventQueryGroupByFields } from "./FormulaAndFunctionEventQueryGroupByFields";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Group by configuration for a formula and functions events query. Accepts either a list of facet objects or a flat object that specifies a list of facet fields.
 */

export type FormulaAndFunctionEventQueryGroupByConfig =
  | Array<FormulaAndFunctionEventQueryGroupBy>
  | FormulaAndFunctionEventQueryGroupByFields
  | UnparsedObject;
