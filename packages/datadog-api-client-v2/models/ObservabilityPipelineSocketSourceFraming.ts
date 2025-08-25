/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineSocketSourceFramingBytes } from "./ObservabilityPipelineSocketSourceFramingBytes";
import { ObservabilityPipelineSocketSourceFramingCharacterDelimited } from "./ObservabilityPipelineSocketSourceFramingCharacterDelimited";
import { ObservabilityPipelineSocketSourceFramingChunkedGelf } from "./ObservabilityPipelineSocketSourceFramingChunkedGelf";
import { ObservabilityPipelineSocketSourceFramingNewlineDelimited } from "./ObservabilityPipelineSocketSourceFramingNewlineDelimited";
import { ObservabilityPipelineSocketSourceFramingOctetCounting } from "./ObservabilityPipelineSocketSourceFramingOctetCounting";

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Framing method configuration for the socket source.
*/

export type ObservabilityPipelineSocketSourceFraming = ObservabilityPipelineSocketSourceFramingNewlineDelimited | ObservabilityPipelineSocketSourceFramingBytes | ObservabilityPipelineSocketSourceFramingCharacterDelimited | ObservabilityPipelineSocketSourceFramingOctetCounting | ObservabilityPipelineSocketSourceFramingChunkedGelf | UnparsedObject;