/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineGeneratedMetricIncrementByField } from "./ObservabilityPipelineGeneratedMetricIncrementByField";
import { ObservabilityPipelineGeneratedMetricIncrementByOne } from "./ObservabilityPipelineGeneratedMetricIncrementByOne";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Specifies how the value of the generated metric is computed.
*/

export type ObservabilityPipelineMetricValue = ObservabilityPipelineGeneratedMetricIncrementByOne | ObservabilityPipelineGeneratedMetricIncrementByField | UnparsedObject;