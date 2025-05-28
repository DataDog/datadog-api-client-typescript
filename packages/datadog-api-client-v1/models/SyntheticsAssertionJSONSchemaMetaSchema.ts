/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * The JSON Schema meta-schema version used in the assertion.
*/

export type SyntheticsAssertionJSONSchemaMetaSchema = typeof DRAFT_07| typeof DRAFT_06 | UnparsedObject;
export const DRAFT_07 = 'draft-07';
export const DRAFT_06 = 'draft-06';