/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Byte frames are passed through as-is according to the underlying I/O boundaries (for example, split between messages or stream segments).
*/

export type ObservabilityPipelineSocketSourceFramingBytesMethod = typeof BYTES | UnparsedObject;
export const BYTES = 'bytes';