/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { MonitorFormulaAndFunctionEventQueryDefinition } from "./MonitorFormulaAndFunctionEventQueryDefinition";
import { MonitorFormulaAndFunctionReferenceTableQueryDefinition } from "./MonitorFormulaAndFunctionReferenceTableQueryDefinition";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Sub-query for aggregate composite queries (augmented or filtered). Can be an events query or a reference table query.
 */

export type MonitorFormulaAndFunctionAggregateSubQuery =
  | MonitorFormulaAndFunctionEventQueryDefinition
  | MonitorFormulaAndFunctionReferenceTableQueryDefinition
  | UnparsedObject;
