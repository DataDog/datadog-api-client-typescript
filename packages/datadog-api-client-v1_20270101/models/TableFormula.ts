/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { TableFormula20270101OneOf } from "./TableFormula20270101OneOf";
import { TableFormula20270101OneOf4462669760 } from "./TableFormula20270101OneOf4462669760";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type TableFormula =
  | TableFormula20270101OneOf
  | TableFormula20270101OneOf4462669760
  | UnparsedObject;
