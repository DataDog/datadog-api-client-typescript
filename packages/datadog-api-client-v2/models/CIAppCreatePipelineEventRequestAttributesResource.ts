/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CIAppPipelineEventJob } from "./CIAppPipelineEventJob";
import { CIAppPipelineEventPipeline } from "./CIAppPipelineEventPipeline";
import { CIAppPipelineEventStage } from "./CIAppPipelineEventStage";
import { CIAppPipelineEventStep } from "./CIAppPipelineEventStep";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Details of the CI pipeline event.
*/

export type CIAppCreatePipelineEventRequestAttributesResource = CIAppPipelineEventPipeline | CIAppPipelineEventStage | CIAppPipelineEventJob | CIAppPipelineEventStep | UnparsedObject;