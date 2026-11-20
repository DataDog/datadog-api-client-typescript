/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { AggregateAugmentedQuery } from "./AggregateAugmentedQuery";
import { DatasetListQuery } from "./DatasetListQuery";
import { EventsPlatformDataProjectionQueryDefinition } from "./EventsPlatformDataProjectionQueryDefinition";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type DataProjectionQuery =
  | AggregateAugmentedQuery
  | EventsPlatformDataProjectionQueryDefinition
  | DatasetListQuery
  | UnparsedObject;
