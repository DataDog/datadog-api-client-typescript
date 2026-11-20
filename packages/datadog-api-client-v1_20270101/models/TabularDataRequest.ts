/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AllListRequestVariants } from "./AllListRequestVariants";
import { HistogramRequest } from "./HistogramRequest";
import { ScalarFormulaRequest } from "./ScalarFormulaRequest";
import { TabularAdvancedQueryRequest } from "./TabularAdvancedQueryRequest";
import { TabularLocalDatasetRequest } from "./TabularLocalDatasetRequest";
import { TimeseriesFormulaRequest } from "./TimeseriesFormulaRequest";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type TabularDataRequest =
  | AllListRequestVariants
  | TabularAdvancedQueryRequest
  | TimeseriesFormulaRequest
  | ScalarFormulaRequest
  | TabularLocalDatasetRequest
  | HistogramRequest
  | UnparsedObject;
