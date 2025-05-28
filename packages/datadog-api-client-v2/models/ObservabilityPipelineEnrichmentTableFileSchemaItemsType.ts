/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Declares allowed data types for enrichment table columns.
*/

export type ObservabilityPipelineEnrichmentTableFileSchemaItemsType = typeof STRING| typeof BOOLEAN| typeof INTEGER| typeof FLOAT| typeof DATE| typeof TIMESTAMP | UnparsedObject;
export const STRING = 'string';
export const BOOLEAN = 'boolean';
export const INTEGER = 'integer';
export const FLOAT = 'float';
export const DATE = 'date';
export const TIMESTAMP = 'timestamp';