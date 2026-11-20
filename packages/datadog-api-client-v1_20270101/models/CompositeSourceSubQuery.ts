/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { CompositeAudienceFiltersQuery } from "./CompositeAudienceFiltersQuery";
import { CompositeEventsPlatformSubQueryDefinition } from "./CompositeEventsPlatformSubQueryDefinition";
import { CompositeReferentialDataQuery } from "./CompositeReferentialDataQuery";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */

export type CompositeSourceSubQuery =
  | CompositeEventsPlatformSubQueryDefinition
  | CompositeReferentialDataQuery
  | CompositeAudienceFiltersQuery
  | UnparsedObject;
