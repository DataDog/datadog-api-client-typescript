/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of value stored in the structured metadata field.
 */

export type ExperimentsPatchExperimentV2ResponseDataAttributesStructuredMetadataItemsFieldType =
  typeof FREETEXT | typeof ENUM | UnparsedObject;
export const FREETEXT = "FREETEXT";
export const ENUM = "ENUM";
