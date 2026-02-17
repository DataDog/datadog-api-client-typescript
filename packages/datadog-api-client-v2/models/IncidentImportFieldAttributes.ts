/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { IncidentImportFieldAttributesMultipleValue } from "./IncidentImportFieldAttributesMultipleValue";
import { IncidentImportFieldAttributesSingleValue } from "./IncidentImportFieldAttributesSingleValue";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Dynamic fields for which selections can be made, with field names as keys.
 */

export type IncidentImportFieldAttributes =
  | IncidentImportFieldAttributesSingleValue
  | IncidentImportFieldAttributesMultipleValue
  | UnparsedObject;
